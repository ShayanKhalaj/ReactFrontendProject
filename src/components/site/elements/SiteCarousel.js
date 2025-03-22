"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SiteSlider.module.scss";
import Image from "next/image";
import Link from "next/link";

const SiteSlider = ({ slider }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className={styles.carousel}
    >
      {slider.map((item, index) => {
        return (
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Image
                width={1200}
                height={600}
                src={item.movieCoverImageUrl}
                alt="First slide"
                className={styles.image}
              />
              <div className={styles.legend}>
                <h2>{item.moviePersianTitle}</h2>
                <div>
                  {item.minAge} +
                  <br />
                  {item.summary}
                  <br/>
                  {item.director}
                  <br/>
                  <Link className="btn btn-info" href={`/site/movie/${item.movieId}`}>نمایش</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SiteSlider;
