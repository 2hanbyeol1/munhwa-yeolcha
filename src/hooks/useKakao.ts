"use client";

import { createClient } from "@/supabase/client";
import useAuthStore from "@/zustand/authStore";
import { useRouter } from "next/navigation";

const useKakao = () => {
  const supabase = createClient();
  const router = useRouter();
  const { clearAuth } = useAuthStore();

  // 로그인
  const signInWithKakao = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        queryParams: { access_type: "offline", prompt: "select_account" },
        redirectTo: `/api/auth/callback/`
      }
    });
  };

  // 로그아웃
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    clearAuth();
    alert("로그아웃 되었습니다.");
    router.push("/");
  };

  return { signInWithKakao, signOut };
};

export default useKakao;
