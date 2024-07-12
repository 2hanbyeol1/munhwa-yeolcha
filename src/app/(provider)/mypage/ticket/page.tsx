"use client";
import { createClient } from "@/supabase/client";
import useAuthStore from "@/zustand/authStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tables } from "../../../../../types/supabase";
import Button from "@/components/Button";

// 날짜와 시간 동기화
const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (isNaN(Number(date))) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const daysWeek = daysOfWeek[date.getDay()];
  return `${year}-${month}-${day}(${daysWeek})`;
};

const MyTicketingListPage = () => {
  const { userInfo } = useAuthStore();
  const [tickets, setTickets] = useState<Tables<"reservation">[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("예약일 순");
  const supabase = createClient();

  // 마이페이지에 뿌려주는 것
  const fetchData = async () => {
    if (!userInfo) return;
    const { data } = await supabase.from("reservation").select("*").eq("user_id", userInfo.id);
    if (!data) {
      return;
    }
    setTickets(data);
  };

  useEffect(() => {
    fetchData();
  }, [userInfo]);

  // select부분
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortTickets = (tickets: Tables<"reservation">[], sortOrder: string) => {
    return tickets?.slice().sort((reservation, day) => {
      if (sortOrder === "예약일 순") {
        return new Date(reservation.created_at).getTime() - new Date(day.created_at).getTime();
      } else if (sortOrder === "공연 날짜 순") {
        return new Date(reservation.date).getTime() - new Date(day.date).getTime();
      }
      return 0;
    });
  };

  const sortedTickets = sortTickets(tickets, sortOrder);

  //예약 취소 업데이트 로직
  const handleCancelClick = async (postId: string) => {
    if (!userInfo) return;
    const { data, error } = await supabase
      .from("reservation")
      .update({ reserved: false }) // false로 업데이트
      .eq("user_id", userInfo.id)
      .eq("post_id", postId);
    console.log(userInfo.id, postId);

    if (error) {
      console.error(error);
      alert("예약 취소에 실패했습니다.");
      return;
    }
    console.log(postId);
    alert("취소었습니다.");
    fetchData();
  };

  return (
    <>
      <span>
        <div className="flex justify-between gap-5 py-[10px] border-b border-black">
          <span className="flex justify-center items-center w-[200px] h-[50px] font-bold text-green text-[30px]">
            전체 예약 내역
          </span>
          <select className="border rounded-md bg-white font-custom" onChange={handleSortChange} value={sortOrder}>
            <option>예약일 순</option>
            <option>공연 날짜 순</option>
          </select>
        </div>
      </span>
      <div>
        <div className="">
          <div className="flex flex-col">
            {sortedTickets?.map((ticket, index) => (
              <div key={index} className="flex items-center p-[10px] border-black border-b">
                <div>
                  <div>
                    <div>공연 날짜 : {formatDate(ticket.date)}</div>
                    <div className="text-[10px] text-[gray] pt-2 pb-3">예약번호:{ticket.post_id}</div>
                  </div>
                  <Link href={`/detail/${ticket.post_id}`}>
                    <Image src={ticket.image_url} alt={ticket.title} width={100} height={100} />
                  </Link>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="font-bold pb-[10px] text-[25px] truncate max-w-xs font-custom">{ticket.title}</div>
                  <div className="text-[10px] text-[gray] pb-1">예약 날짜 : {formatDate(ticket.created_at)}</div>
                  <div className={ticket.reserved ? "text-blue" : "text-red-500"}>
                    {ticket.reserved ? "예약되었슴다람쥐" : "취소되었슴다랑어"}
                    {ticket.reserved && (
                      <div className="">
                        <Button onClick={() => handleCancelClick(ticket.post_id)} buttonName="예약 취소" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTicketingListPage;
