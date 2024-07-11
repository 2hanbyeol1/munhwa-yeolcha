"use client";
import { createClient } from "@/supabase/client";
import useAuthStore from "@/zustand/authStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

// 임시 타입지정
export interface Ticket {
  id: string;
  created_at: string;
  user_id: string;
  post_id: string;
  date: string;
  title: string;
  image_url: string;
  status: string;
}

const MyTicketingListPage = () => {
  const { userInfo } = useAuthStore();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("예약일 순");
  const [reserved, setReserved] = useState(true);

  console.log(userInfo);

  // 마이페이지에 뿌려주는 것
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await createClient().from("reservation").select("*").eq("user_id", userInfo?.id);
      console.log(userInfo?.id);
      setTickets(data); //여기 타입 물어보기
    };
    fetchData();
  }, [userInfo]);

  // select부분
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortTickets = (tickets: Ticket[], sortOrder: string) => {
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

  // 1. 데이터 가져오기
  // 2. 아이디와 아이디가 같은 걸 supabase에서 삭제하기
  // 2.2 삭제가 되면 텍스트가 바뀌게 하고싶다.
  // 3. 화면에 보여주기
  useEffect(() => {
    const deleteData = async () => {
      const { data: reservedData } = await createClient().from("reservation").delete().eq("user_id", userInfo?.id);
      if (reservedData === true) {
        setReserved(false);
      }

      setReserved(reservedData); //여기 타입 물어보기
    };

    deleteData();
  }, []);

  return (
    <>
      <span>
        <div className="flex justify-between gap-5 py-[10px]">
          <span className="flex justify-center items-center w-[200px] h-[50px] rounded-lg font-bold text-green text-[30px]">
            전체 예약 내역
          </span>
          <select className="border rounded-md bg-white" onChange={handleSortChange} value={sortOrder}>
            <option>예약일 순</option>
            <option>공연 날짜 순</option>
          </select>
        </div>
      </span>
      <div className="border-t border-b border-l border-r-0 border-gray-400">
        <div className="overflow-x-auto">
          <div className="flex">
            {sortedTickets?.map((ticket, userInfo) => (
              <div
                key={ticket.userInfo?.id}
                className="flex items-center p-[20px] border-r border-gray-400 min-w-[400px]"
              >
                <div>
                  <div>
                    <div>공연 날짜 : {formatDate(ticket.date)}</div>
                    <div className="text-[10px] text-[gray] pt-2 pb-3">예약번호:{ticket.post_id}</div>
                  </div>
                  <Link href={`/detail/${userInfo?.id}`} className="border w-[100px]">
                    <Image src={ticket.image_url} alt={ticket.title} width={150} height={100} />
                  </Link>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="font-bold pb-[10px] text-[25px] truncate max-w-32">{ticket.title}</div>
                  <div className="text-[10px] text-[gray] pb-1">예약 날짜 : {formatDate(ticket.created_at)}</div>
                  <div>{ticket.status}</div>
                  <button>예약취소: {reserved}</button>
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
