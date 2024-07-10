"use client";

import React from "react";
import useKakao from "@/hooks/useKakao";

const TestPage: React.FC = () => {
  const { signInWithKakao, signOut } = useKakao();

  return (
    <div>
      <h1>테스트 페이지</h1>
      <button onClick={signInWithKakao}>로그인</button>
      <br />
      <button onClick={signOut}>로그아웃</button>
    </div>
  );
};

export default TestPage;
