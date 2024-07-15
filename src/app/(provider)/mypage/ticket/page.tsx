"use client";
import Button from "@/components/Button";
import { createClient } from "@/supabase/client";
import useAuthStore from "@/zustand/authStore";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useEffect, useState } from "react";
import { Tables } from "../../../../../types/supabase";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortTickets = (tickets: Tables<"reservation">[], sortOrder: string) => {
    return tickets?.slice().sort((reservation, day) => {
      if (sortOrder === "예약일 순") {
        return new Date(day.created_at).getTime() - new Date(reservation.created_at).getTime();
      } else if (sortOrder === "공연 날짜 순") {
        return new Date(reservation.date).getTime() - new Date(day.date).getTime();
      }
      return 0;
    });
  };

  const sortedTickets = sortTickets(tickets, sortOrder);

  const handleCancelClick = async (e: MouseEvent<HTMLButtonElement>, postId: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (!userInfo) return;
    const ok = confirm(postId + " 예약을 취소하시겠습니까?");
    if (!ok) return;
    const { data, error } = await supabase
      .from("reservation")
      .update({ reserved: false })
      .eq("user_id", userInfo.id)
      .eq("post_id", postId);
    if (error) {
      console.error(error);
      alert("예약 취소에 실패했습니다.");
      return;
    }
    alert("취소되었습니다.");
    fetchData();
  };

  return (
    <div>
      <div className="flex justify-between gap-5 border-b border-black pb-2 pt-2">
        <span className="flex justify-center items-center font-bold text-green text-2xl">전체 예약 내역</span>
        <select
          className="px-1 text-sm border rounded-md bg-white outline-none font-custom"
          onChange={handleSortChange}
          value={sortOrder}
        >
          <option>예약일 순</option>
          <option>공연 날짜 순</option>
        </select>
      </div>
      <div className="list flex flex-col overflow-x-hidden overflow-y-scroll h-[calc(100vh-15rem)] pr-3">
        {sortedTickets.length === 0 ? (
          <div className="flex justify-center items-center h-[100px] text-stone-500">예약 내역이 없습니다.</div>
        ) : (
          sortedTickets?.map((ticket, index) => (
            <Link
              href={`/detail/${ticket.post_id}`}
              key={index}
              className="grid grid-cols-[150px_1fr] items-center gap-7 px-3 py-1 border-black border-b bg-beige hover:brightness-95"
            >
              <Image src={ticket.image_url} alt={ticket.title} width={150} height={150} />
              <div className="flex flex-col w-full h-full justify-between py-5">
                <div className="w-full">
                  <div className="text-stone-500 mb-3">[{ticket.post_id}]</div>
                  <div className="font-bold w-full text-2xl font-custom mb-1">{ticket.title}</div>
                  <div className={`text-lg ${ticket.reserved ? "text-blue" : "text-red-500 line-through"}`}>
                    <span className="mr-2">{formatDate(ticket.date)}</span>
                    <span>{ticket.reserved ? "예약됨" : "취소 완료"}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    {ticket.reserved && (
                      <Button onClick={(e) => handleCancelClick(e, ticket.post_id)} buttonName="예약 취소" />
                    )}
                  </div>
                  <div className="text-xs text-stone-600">{formatDate(ticket.created_at)} 예약</div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MyTicketingListPage;
