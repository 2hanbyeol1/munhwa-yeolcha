import Image from "next/image";

const TrainHead = () => {
  return (
    <div className="flex items-end h-24">
      <Image src="/train/train-head.png" width={0} height={0} sizes="100%" className="w-full h-auto" alt="기차헤드" />
    </div>
  );
};

export default TrainHead;
