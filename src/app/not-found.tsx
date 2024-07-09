import Header from "@/components/Header";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-10">없는 페이지 입니다.</div>
    </div>
  );
};

export default NotFoundPage;
