"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import charactersImg from "../../public/characters.png";
const ErrorPage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.refresh();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image width={200} height={200} className="object-cover" sizes="100%" src={charactersImg} alt="철수와 영희" />
      <p>얘, 저기 문제 생겼단다 ㅋㅋ</p>
      <Button buttonName="재시도" onClick={handleButtonClick} />
    </div>
  );
};

export default ErrorPage;
