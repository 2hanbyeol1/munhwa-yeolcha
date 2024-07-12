"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useKakao from "@/hooks/useKakao";
import useAuthStore from "@/zustand/authStore";
import Image from "next/image";
import Button from "./Button";
import Modal from "./Modal";
import useModalStore from "@/zustand/modalStore";

const Header = () => {
  const router = useRouter();
  const { signOut } = useKakao();
  const { isAuthenticated, setIsAuthenticated, setAuth } = useAuthStore();
  const { toggleModal } = useModalStore();

  const handelGoHomeClick = () => {
    router.push("/");
  };

  const handleGoLoginClick = () => {
    router.push("/login");
  };

  const handelGoMyPageClick = () => {
    router.push("/mypage/ticket");
  };

  const handleLogoutClick = () => {
    signOut();
    router.push("/login");
    toggleModal("로그아웃");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split("; ");
      const authToken = cookies.find((cookie) => cookie.startsWith("sb-awglleigixtjjdlmbhrh-auth-token"));

      setIsAuthenticated(!!authToken);
    };

    checkAuthToken();
  }, [isAuthenticated]);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user }
        } = await response.json();
        setAuth(user);
      }
    });
  }, [isAuthenticated]);

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
            <Button buttonName={"로그아웃"} onClick={() => toggleModal("로그아웃")} />
            <Modal id="로그아웃">
              <p>정말 로그아웃 하시겠습니까?</p>
              <Button buttonName="예" onClick={handleLogoutClick} bgColor={"bg-coral"} />
              <Button buttonName="아니오" onClick={() => toggleModal("로그아웃")} bgColor={"bg-[#696060]"} />
            </Modal>
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
