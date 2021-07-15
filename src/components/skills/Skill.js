// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./Project.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import "./Skill.css";
// import classes from "./Skill.module.css"

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Skill = (props) => {
  const skill = props.skillArr.map((skill) => {
    return (
      <>
        <SwiperSlide>
          <div className="box">
            <img src={skill.imgUrl} alt="Skill" />
            <div className="description">{skill.name}</div>
          </div>
        </SwiperSlide>
      </>
    );
  });

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {skill}
      </Swiper>
    </>
  );
};

export default Skill;
