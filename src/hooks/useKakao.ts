"use client";

import React from "react";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";

const useKakao = () => {
  const supabase = createClient();
  const router = useRouter();

  // 로그인
  const signInWithKakao = async () => {
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
    const { error } = await supabase.auth.signOut();
    alert("로그아웃 되었습니다.");
    router.push("/login");
  };

  return { signInWithKakao, signOut };
};

export default useKakao;
