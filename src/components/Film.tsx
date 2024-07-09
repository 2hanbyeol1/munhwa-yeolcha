import Image from "next/image";
import filmImage from "../../public/film.png";

interface FilmType {
  image: string;
}

const Film = ({ image: filmSrc }: FilmType) => {
  return (
    <div className="w-full relative aspect-video">
      <Image className="z-20 absolute top-0 left-0" src={filmImage} fill alt="필름" />
      <Image className="z-10 object-cover absolute top-0 left-0" src={filmSrc} fill alt="ㅋㅋ" />
    </div>
  );
};

export default Film;
