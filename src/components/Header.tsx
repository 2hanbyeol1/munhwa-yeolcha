"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useKakao from "@/hooks/useKakao";
import useAuthStore from "@/zustand/authStore";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const router = useRouter();
  const { signOut } = useKakao();
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  const handelGoHomeClick = () => {
    router.push("/");
  };

  const handleGoLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    signOut();
    setIsAuthenticated(false);
    router.push("/login");
  };
  // console.log(document.cookie);
  // console.log(document.cookie.split("; "));

  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split("; ");
      const authToken = cookies.find((cookie) => cookie.startsWith("sb-awglleigixtjjdlmbhrh-auth-token.0"));
      setIsAuthenticated(!!authToken);
    };

    checkAuthToken();
  }, [setIsAuthenticated]);

  return (
    <header className="fixed top-0 left-0 flex-col w-full z-10">
      <div className="w-full h-14 flex justify-between items-center bg-dark-red px-4 py-2 mb-0">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="w-24 h-auto cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={handelGoHomeClick}
        />
        {isAuthenticated ? (
          <Button buttonName={"로그아웃"} onClick={handleLogoutClick} />
        ) : (
          <Button buttonName={"접속하기"} onClick={handleGoLoginClick} />
        )}
      </div>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto cursor-pointer"
        src="/headerDeco.png"
        alt="headerDeco"
      />
    </header>
  );
};

export default Header;
