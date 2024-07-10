"use client";

import React from "react";
import { createClient } from "@/supabase/client";

const useKakao = () => {
  const supabase = createClient();

  // 로그인
  const signInWithKakao = async () => {
    console.log("로그인 실행");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        queryParams: { access_type: "offline", prompt: "select_account" },
        redirectTo: `http://localhost:3000/api/auth/callback/`
      }
    });
  };

  // 로그아웃
  const signOut = async () => {
    console.log("로그아웃 실행");
    const { error } = await supabase.auth.signOut();
  };

  return { signInWithKakao, signOut };
};

export default useKakao;
