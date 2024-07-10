import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import hanbyeolImg from "../../../public/members/hanbyeol.png";
import seongguImg from "../../../public/members/seonggu.png";
import seungbinImg from "../../../public/members/seungbin.png";
import siseungImg from "../../../public/members/siseung.png";
import TrainCart from "./TrainCart";
import TrainHead from "./TrainHead";

const TrainSwiper = () => {
  var settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    pauseOnHover: false
  };

  return (
    <div className="swiper w-1/2 min-w-80 mx-auto">
      <Slider {...settings}>
        <div>
          <TrainHead />
        </div>
        <div>
          <TrainCart member={{ name: "한별", img: hanbyeolImg }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "인화", img: hanbyeolImg }} color="yellow" />
        </div>
        <div>
          <TrainCart member={{ name: "승빈", img: seungbinImg }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "성구", img: seongguImg }} color="yellow" />
        </div>
        <div>
          <TrainCart member={{ name: "시승", img: siseungImg }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "지환", img: hanbyeolImg }} color="yellow" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>
    </div>
  );
};

export default TrainSwiper;
