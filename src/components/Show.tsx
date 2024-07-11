import { PerformanceType } from "@/types/performance";
import Image from "next/image";
import Link from "next/link";

interface ShowType {
  performance: PerformanceType;
}

const Show = ({ performance }: ShowType) => {
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOJwaIGV12m9rDXUdIsetg0DuXVDZLWZhXA&s";
  return (
    <Link
      href={`/detail/${performance.id}`}
      className="w-full relative transition-transform hover:z-10 hover:scale-105"
    >
      <div
        className={`rounded text-xs p-2 absolute top-2 left-2 ${
          performance.state === "공연완료" ? "bg-withered-diamond" : "bg-blue"
        } text-white z-10`}
      >
        {performance.state}
      </div>
      <div className="relative aspect-poster">
        <Image
          sizes="100%"
          className="vintage-img w-full object-cover"
          src={performance.poster === " " ? defaultImage : performance.poster}
          alt="연극"
          fill
        />
      </div>
      <div className="flex flex-col gap-2 w-full h-36 p-7 bg-white shadow-md">
        <span className="text-lg overflow-hidden whitespace-nowrap text-ellipsis">{performance.name}</span>
        <span className="text-sm text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
          {performance.place}
        </span>
        <span className="text-xs">
          {performance.duration[0]} - {performance.duration[1]}
        </span>
      </div>
    </Link>
  );
};

export default Show;
