import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
          <TrainCart member={{ name: "한별", img: "/members/hanbyeol.png" }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "인화", img: "/members/inhwa.png" }} color="yellow" />
        </div>
        <div>
          <TrainCart member={{ name: "승빈", img: "/members/seungbin.png" }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "성구", img: "/members/seonggu.png" }} color="yellow" />
        </div>
        <div>
          <TrainCart member={{ name: "시승", img: "/members/siseung.png" }} color="red" />
        </div>
        <div>
          <TrainCart member={{ name: "지환", img: "/members/jihwan.png" }} color="yellow" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>
    </div>
  );
};

export default TrainSwiper;
