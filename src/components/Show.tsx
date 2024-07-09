import Image from "next/image";

interface ShowType {
  image: string;
}

const Show = ({ image }: ShowType) => {
  return (
    <div className="relative w-full aspect-poster">
      <Image className="object-cover" src={image} fill alt="연극" />
      <div className="absolute -bottom-3 -right-3 p-5 bg-withered-diamond">
        <div>탈연극</div>
        <div>서울특별시</div>
      </div>
    </div>
  );
};

export default Show;
