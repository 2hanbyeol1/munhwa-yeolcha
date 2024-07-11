"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketList = () => {
  const [clickButton, setClickButton] = useState("ticket");

  const handleLinkClick = (link: string) => {
    setClickButton(link);
  };

  const router = useRouter();
  const handleDeleteAccount = async () => {
    if (!confirm("계정을 정말 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/delete-account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        alert("계정이 삭제되었습니다.");
        router.push("/");
      } else {
        const { message } = await response.json();
        alert(`계정 삭제 실패: ${message}`);
      }
    } catch (error) {
      alert("계정 삭제 도중 에러가 생겼습니다.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[600px] w-[100%]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <Link
              href={"/mypage/ticket"}
              className={`p-3 rounded-lg w-40 mb-1 font-bold text-center ${
                clickButton === "ticket" ? "bg-white text-green" : "bg-green text-white"
              }`}
              onClick={() => handleLinkClick("ticket")}
            >
              예약 내역
            </Link>
            <Link
              href={"/mypage/edit"}
              className={`p-3 rounded-lg w-40 mb-1 font-bold text-center ${
                clickButton === "edit" ? "bg-white text-green" : "bg-green text-white"
              }`}
              onClick={() => handleLinkClick("edit")}
            >
              회원정보 수정
            </Link>
            <button
              onClick={handleDeleteAccount}
              className="border bg-green p-3 rounded-lg w-40 font-bold text-[white]"
            >
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketList;
