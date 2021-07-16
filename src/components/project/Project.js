import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import classes from "./Project.module.css";

// Import photos
import diagnode from "../../assets/diagnode.PNG";
import sportify from "../../assets/sportify.PNG";
import ukaccent from "../../assets/ukaccent.PNG";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const projects = [
  { name: "Diagnode", img: diagnode, description: "A website that uses an API from ImmuniWeb to analyze your website security level and gives back a tailored result that explains different security matters and provides a marketplace to buy security products."},
  { name: "Sportify", img: sportify, description:"An Airbnb clone. The website was built for tennis enthusiast to be able to book a court and for court owners to list their property for hourly rent." },
  { name: "UKACCENT", img: ukaccent, description:"A website built with WordPress, a freelance project for a construction company."}
];

function Project() {
  const projectJsx = projects.map((project) => {
    return (
          <SwiperSlide className={classes["swiper-slide"]}>
            <img src={project.img} alt="yes" />
            <div className={classes.info}>
              <h1 className={classes.title}>{project.name}</h1>
              <p className={classes.description}>{project.description}</p>
            </div>
          </SwiperSlide>
    );
  });

  return (
    <>
      <div className={classes.top}><h1>Projects</h1></div>
      <div className={classes.project}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className={`${classes.mySwiper} ${classes["swiper-container"]} ${classes["swiper-pagination-bullets"]}`}
        >
          {projectJsx}
        </Swiper>
      </div>
    </>
  );
}

export default Project;
