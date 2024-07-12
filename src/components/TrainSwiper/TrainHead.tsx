import Image from "next/image";
import trainHeadImg from "../../../public/train/train-head.png";

const TrainHead = () => {
  return (
    <div className="flex items-end h-24">
      <Image src={trainHeadImg} width={0} height={0} sizes="100%" className="w-full h-auto" alt="기차헤드" />
    </div>
  );
};

export default TrainHead;
