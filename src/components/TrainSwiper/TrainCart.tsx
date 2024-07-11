import { MemberType } from "@/types/member";
import Image from "next/image";
import redCartImg from "../../../public/train/train-red.png";
import yellowCartImg from "../../../public/train/train-yellow.png";

interface TrainCartProps {
  member: MemberType;
  color: "red" | "yellow";
}

const TrainCart = ({ member, color }: TrainCartProps) => {
  return (
    <div className="flex flex-col justify-end items-center h-24">
      <Image src={member.img} width={50} height={50} alt={member.name} className="animate-swing origin-bottom" />
      <Image src={color === "red" ? redCartImg : yellowCartImg} width={70} height={70} alt="기차칸" />
    </div>
  );
};

export default TrainCart;
