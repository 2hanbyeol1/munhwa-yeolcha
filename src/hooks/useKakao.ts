"use client";

import React from "react";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const useKakao = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // 로그인
  const signInWithKakao = async () => {
    console.log("로그인 실행");
    // try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`
      }
    });
    //     if (error) {
    //       setError(error);
    //     } else {
    //       setData(data);
    //     }
    //   } catch (err) {
    //     setError(err);
    //   }
    //   console.log("로그인 완료");
  };

  // 로그아웃
  const signOut = async () => {
    console.log("로그아웃 실행");
    const { error } = await supabase.auth.signOut();

    //   if (error) {
    //     setError(error);
    //   } else {
    //     setData(null);
    //   }
    //   console.log("로그아웃 완료");
  };

  return { signInWithKakao, signOut };
};

export default useKakao;
