import Link from "next/link";
import React from "react";

const TicketList = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[600px] w-[100%]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <Link
              href={"/mypage/ticket"}
              className=" bg-[white] p-3 rounded-lg w-40 mb-1 font-bold text-green text-center"
            >
              예약 내역
            </Link>
            <Link
              href={"/mypage/edit"}
              className="border bg-green p-3 rounded-lg w-40 mb-1 font-bold text-[white] text-center"
            >
              회원정보 수정
            </Link>
            <button className="border bg-green p-3 rounded-lg w-40 font-bold text-[white]">회원 탈퇴</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketList;
