import Header from "@/components/Header";
import React from "react";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-10">없는 페이지 입니다.</div>
    </div>
  );
}
