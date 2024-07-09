import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <div className="rounded-3xl w-full max-w-lg h-[550px] border-4 border-dark-red shadow-2xl flex flex-col gap-5 items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center ">멤 바 등 록</h2>
        <div className="mb-6 space-y-6">
          <div className="flex items-center space-x-6 w-[380px]">
            <label className="bg-coral text-white px-4 py-2 rounded-full whitespace-nowrap">접 속 이 름</label>
            <input type="text" className="bg-beige text-center flex-grow border-b-2 border-black focus:outline-none" />
          </div>
          <div className="flex items-center space-x-6">
            <label className="bg-coral text-white px-4 py-2 rounded-full whitespace-nowrap">비 밀 번 호</label>
            <input
              type="password"
              className="bg-beige text-center flex-grow border-b-2 border-black focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="w-[380px] text-lg bg-green text-white py-2 rounded-full hover:bg-hover-green transition duration-300">
            멤 바 등 록 하 기
          </button>
          <button className="flex justify-center gap-2 w-[380px] text-lg bg-yellow py-2 rounded-full hover:bg-hover-green transition duration-300">
            <img src="/images/kakaologo.png" alt="Kakao Logo" className="w-9 h-8" />
            <span>까 까 오 대 화 로ㅤ 등 록 하 기</span>
          </button>
          <Link
            href={"/login"}
            className="w-[380px] text-center text-lg bg-green text-white py-2 rounded-full hover:bg-hover-green transition duration-300"
          >
            뒤 로 가 기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
