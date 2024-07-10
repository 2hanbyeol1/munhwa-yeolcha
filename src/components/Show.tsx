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
      className="relative w-full aspect-poster transition-transform hover:z-10 hover:scale-110"
    >
      <Image
        sizes="100%"
        className="vintage-img w-full object-cover"
        src={performance.poster === " " ? defaultImage : performance.poster}
        alt="연극"
        fill
      />
      <div className="flex flex-col max-w-40 absolute -bottom-3 -right-3 p-5 bg-withered-diamond-translucent rounded-lg shadow-md">
        <span>{performance.name}</span>
        <span className="text-sm text-gray-700">{performance.place}</span>
      </div>
    </Link>
  );
};

export default Show;
