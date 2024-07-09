import Link from "next/link";
import React from "react";

const TicketList = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[600px] w-[100%]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <Link href={"/mypage/ticket"}>
              <button className="border bg-[white] p-3 rounded-lg w-40 mb-1 font-bold text-green">예약 내역</button>
            </Link>
            <Link href={"/mypage/edit"}>
              <button className="border bg-green p-3 rounded-lg w-40 mb-1 font-bold text-[white]">회원정보 수정</button>
            </Link>
            <button className="border bg-green p-3 rounded-lg w-40 font-bold text-[white]">회원 탈퇴</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketList;
