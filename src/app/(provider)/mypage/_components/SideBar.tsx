"use client";
import useAuthStore from "@/zustand/authStore";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [clickButton, setClickButton] = useState("ticket");

  const handleLinkClick = (link: string) => {
    setClickButton(link);
  };

  const router = useRouter();
  const { provider } = useAuthStore();
  const [flagProvider, setFlagProvider] = useState<string>(provider);

  useEffect(() => {
    if (!provider) {
      axios
        .get("/api/auth/me")
        .then(async (response) => {
          if (response.data?.error) {
            alert("로그인 정보에 문제가 있습니다. 로그인 페이지로 이동합니다.");
            router.push("/login");
          } else if (response.status === 200) {
            setFlagProvider(response?.data?.app_metadata?.provider);
          }
        })
        .catch((error) => console.log("error : ", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteAccount = async () => {
    if (!confirm("정말 회원탈퇴를 하시겠습니까?")) {
      return;
    }

    try {
      const response = await axios.delete("/api/auth/delete-account");
      if (response.status === 200) {
        alert("회원탈퇴 되었습니다.");
        router.push("/");
      } else {
        throw new Error(`회원탈퇴 실패: ${response.data.message}`);
      }
    } catch (error) {
      alert("회원탈퇴 도중 에러가 생겼습니다.");
    }
  };

  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <Link
        href={"/mypage/ticket"}
        className={`p-3 rounded-lg w-40 font-bold text-center ${
          clickButton === "ticket" ? "bg-white text-green" : "bg-green text-white"
        }`}
        onClick={() => handleLinkClick("ticket")}
      >
        예약 내역
      </Link>
      {flagProvider !== "" && flagProvider !== "kakao" ? (
        <Link
          href={"/mypage/edit"}
          className={`p-3 rounded-lg w-40 font-bold text-center ${
            clickButton === "edit" ? "bg-white text-green" : "bg-green text-white"
          }`}
          onClick={() => handleLinkClick("edit")}
        >
          회원정보 수정
        </Link>
      ) : null}
      <button onClick={handleDeleteAccount} className="border bg-green p-3 rounded-lg w-40 font-bold text-[white]">
        회원 탈퇴
      </button>
    </div>
  );
};

export default SideBar;
