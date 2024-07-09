"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

const Header = () => {
  const router = useRouter();

  const handelGoHomeClick = () => {
    router.push("/");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <header className="flex-col">
      <div className="w-full h-14 flex justify-between items-center bg-dark-red px-4 py-2 mb-0">
        <img className="h-full mr-4 cursor-pointer" src="/logo.png" alt="logo" onClick={handelGoHomeClick}></img>
        <Button buttonName={"접속하기"} onClick={handleLoginClick} />
      </div>
      <img className="bg-beige" src="/headerDeco.png" alt="headerDeco" />
    </header>
  );
};

export default Header;
