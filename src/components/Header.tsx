"use client";

import Image from "next/image";
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
    <header className="fixed top-0 left-0 flex-col w-full z-50">
      <div className="w-full h-14 flex justify-between items-center bg-dark-red px-4 py-2 mb-0">
        <Image
          width={0}
          height={0}
          sizes="100%"
          className="w-24 h-auto cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={handelGoHomeClick}
        />
        <Button buttonName={"접속하기"} onClick={handleLoginClick} />
      </div>
      <Image
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-auto cursor-pointer"
        src="/headerDeco.png"
        alt="headerDeco"
      />
    </header>
  );
};

export default Header;
