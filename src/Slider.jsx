import { PicsData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = ({ style }) => (
  <>
    <h4 className="display-6">Наш дружный коллектив:</h4>
    <Swiper
      modules={[Navigation, Scrollbar, Pagination, Autoplay]}
      loop
      navigation
      pagination
      centeredSlides
      autoplay={{ delay: 1000 }}
      style={style}
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
    >
      {PicsData.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} alt="Фотка" />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default Slider;
