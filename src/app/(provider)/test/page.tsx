"use client";

import React from "react";
import { createClient } from "@supabase/supabase-js";
import useKakao from "@/hooks/useKakao";
import { supabase } from "../../../../lib/supabaseClient";
import { redirect } from "next/navigation";
import Button from "@/components/Button";

const TestPage: React.FC = () => {
  const { signInWithKakao, signOut } = useKakao();

  // async function signInWithKakao() {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "kakao",
  //     options: {
  //       redirectTo: "http://localhost:3000/auth/callback"
  //     }
  //   });
  // }

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

// "use client";

// import { useRouter } from "next/navigation";

// import { useUser } from "@supabase/auth-helpers-react";
// import { createClient } from "@supabase/supabase-js";
// // import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// const AuthContent = () => {
//   const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
//   const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//   const supabase = createClient(supabaseUrl, supabaseKey);

//   const router = useRouter();
//   const user = useUser(); //useUser훅을 통해 유저데이터를 받아옴

//   const handleAuth = async () => {
//     if (user) {
//       const { error } = await supabase.auth.signOut(); //로그아웃
//       if (error) {
//         console.error(error);
//       }
//     }
//     if (!user) {
//       router.push("/auth");
//     }
//   };
//   return (
//     <div className="font-semibold h-full flex flex-col items-center justify-center">
//       {user && <div>안녕하세요 {user?.user_metadata.full_name}님</div>}
//       <div>
//         <button
//           className="border border-neutral-400 rounded-lg px-4 py-1 hover:bg-neutral-100 hover:border-neutral-500 transition"
//           onClick={handleAuth}
//         >
//           {user ? "로그아웃" : "로그인"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthContent;
