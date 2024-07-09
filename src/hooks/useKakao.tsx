"use client";

import React from "react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const useKakao = () => {
  const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 로그인
  const signInWithKakao = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          redirectTo: `https://jhjvnwjixzbcoqzkmbmb.supabase.co/auth/v1/callback`
        }
      });
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    } catch (err) {
      setError(err);
    }
  };

  // 로그아웃
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error);
    } else {
      setData(null);
    }
  };

  return { data, error, signInWithKakao, signOut };
};

export default useKakao;
