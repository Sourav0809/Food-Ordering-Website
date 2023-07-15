// Slider Components...
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FirstCover from "../Covers/FirstCover/FirstCover";
import SecondCover from "../Covers/SecondCover/SecondCover";
import ThirdCover from "../Covers/ThirdCover/ThirdCover";
import FourthCover from "../Covers/FourthCover/FourthCover";

const CoversContainer = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <FirstCover />
      </SwiperSlide>
      <SwiperSlide>
        <SecondCover />
      </SwiperSlide>
      <SwiperSlide>
        <ThirdCover />
      </SwiperSlide>
      <SwiperSlide>
        <FourthCover />
      </SwiperSlide>
    </Swiper>
  );
};

export default CoversContainer;
