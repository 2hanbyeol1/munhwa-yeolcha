import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handleClickLogIn = () => {};
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-3xl w-full max-w-lg h-[550px] border-4 border-dark-red shadow-2xl flex flex-col gap-10 items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center ">접 속 하 기</h2>
        <div className="mb-6 space-y-6">
          <div className="flex items-center space-x-6 w-[380px]">
            <label className="bg-coral text-white px-4 py-2 rounded-full whitespace-nowrap">접 속 이 름</label>
            <input
              type="text"
              className="bg-beige text-center flex-grow border-b-2 border-black focus:outline-none"
              placeholder="전 자 우 편 주 소"
            />
          </div>
          <div className="flex items-center space-x-6">
            <label className="bg-coral text-white px-4 py-2 rounded-full whitespace-nowrap">비 밀 번 호</label>
            <input
              type="password"
              className="bg-beige text-center flex-grow border-b-2 border-black focus:outline-none"
              placeholder="비 밀 번 호"
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="w-[380px] bg-green text-white py-2 rounded-full text-lg hover:bg-hover-green transition duration-300">
            들 어 가 기
          </button>
          <Link
            href={"/signup"}
            className="w-[380px] text-center bg-green text-white py-2 rounded-full text-lg hover:bg-hover-green transition duration-300"
          >
            멤 바 등 록
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
