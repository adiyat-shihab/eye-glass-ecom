import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "/src/components/Molecules/carousel.css";
import { Pagination } from "swiper/modules";
import Slides from "../Atoms/Slides.jsx";

const Carousel = () => {
  return (
    <div className={"  h-screen w-[99.12vw] bg-[#EAEAEA]"}>
      {" "}
      <Swiper
        direction={"vertical"}
        pagination={{
          type: "bullets",
          clickable: true,
          enabled: true,
          verticalClass: "px-10",
        }}
        modules={[Pagination]}
        className="h-full w-full "
      >
        <SwiperSlide>
          <Slides
            HeadingContent={"Personalized Eyeglass Shopping"}
            personImg={"person1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            HeadingContent={"Personalized Eyeglass Shopping"}
            personImg={"person1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            HeadingContent={"Personalized Eyeglass Shopping"}
            personImg={"person1.png"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
