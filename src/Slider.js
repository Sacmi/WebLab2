import { PicsUrl } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => (
  <Swiper
    modules={[Navigation, Scrollbar, Pagination]}
    centeredSlides={false}
    loop
    navigation
    pagination
    breakpoints={{
      "@0.75": {
        slidesPerView: 1,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
    // navigation={{
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // }}
  >
    {PicsUrl.map((url, index) => (
      <SwiperSlide key={index}>
        <img src={url} alt="Фотка" />
      </SwiperSlide>
    ))}
  </Swiper>
);
