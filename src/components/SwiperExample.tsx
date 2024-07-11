"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import Film from "./Film";

const TrainSwiper = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Film image="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fdef9c31941083.566793886985a.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TrainSwiper;
