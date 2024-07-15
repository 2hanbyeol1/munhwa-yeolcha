"use client";

import useKakao from "@/hooks/useKakao";
import useAuthStore from "@/zustand/authStore";
import useModalStore from "@/zustand/modalStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <header className="fixed top-0 left-0 flex-col w-full z-50">
      <div className="w-full h-[80px] flex justify-between items-center bg-dark-red px-4 py-2 mb-0">
        <Image
          width={0}
          height={0}
          sizes="100%"
          className="w-36 h-auto cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={handelGoHomeClick}
        />
        {isAuthenticated ? (
          <div>
            <Button hover={true} buttonName={"마이페이지"} onClick={handelGoMyPageClick} />
            <Button hover={true} buttonName={"로그아웃"} onClick={() => toggleModal("로그아웃")} />
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
      <Image width={0} height={0} sizes="100%" className="w-full h-10 -z-10" src="/headerDeco.png" alt="headerDeco" />
    </header>
  );
};

export default Header;
