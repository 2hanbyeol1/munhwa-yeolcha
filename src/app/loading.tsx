import Image from "next/image";
import face1Img from "../../public/face-1.png";
import face2Img from "../../public/face-2.png";

const LoadingPage = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col justify-center items-center gap-2  ">
      <div className="flex gap-5">
        <Image width={85} height={85} className="object-cover animate-spin" sizes="100%" src={face1Img} alt="철수" />
        <Image width={85} height={85} className="object-cover animate-spin" sizes="100%" src={face2Img} alt="영희" />
      </div>
      <p className="animate">쫌만 기다려보렴. . .</p>
    </div>
  );
};

export default LoadingPage;
