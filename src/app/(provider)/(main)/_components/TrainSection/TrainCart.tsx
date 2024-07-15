import { MemberType } from "@/types/member";
import Image from "next/image";

interface TrainCartProps {
  member: MemberType;
  color: "red" | "yellow";
}

const TrainCart = ({ member, color }: TrainCartProps) => {
  return (
    <div className="flex flex-col justify-end items-center h-24">
      <Image src={member.img} width={50} height={50} alt={member.name} className="animate-swing origin-bottom" />
      <Image
        src={color === "red" ? "/train/train-red.png" : "/train/train-yellow.png"}
        width={70}
        height={70}
        alt="기차칸"
      />
    </div>
  );
};

export default TrainCart;
