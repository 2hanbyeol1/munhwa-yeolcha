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
  const { isAuthenticated, userInfo, setIsAuthenticated, setAuth } = useAuthStore();

  const handelGoHomeClick = () => {
    router.push("/");
  };

  const handleGoLoginClick = () => {
    router.push("/login");
  };

  const handelGoMyPageClick = () => {
    router.push("/mypage/edit");
  };

  const handleLogoutClick = () => {
    signOut();
    router.push("/login");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split("; ");
      const authToken = cookies.find((cookie) => cookie.startsWith("sb-awglleigixtjjdlmbhrh-auth-token.0"));
      setIsAuthenticated(!!authToken);
    };

    checkAuthToken();
  }, [setIsAuthenticated]);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user }
        } = await response.json();
        setAuth(user);
      }
    });
  }, []);

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
        {isAuthenticated ? (
          <div>
            <Button buttonName={"마이페이지"} onClick={handelGoMyPageClick} />
            <Button buttonName={"로그아웃"} onClick={handleLogoutClick} />
          </div>
        ) : (
          <Button buttonName={"접속하기"} onClick={handleGoLoginClick} />
        )}
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
