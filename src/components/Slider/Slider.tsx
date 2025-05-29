/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ImageProps } from "../../../types/ImageTypes";
import styles from "./Slider.module.css";

import { Pagination, Navigation } from "swiper/modules";

export const Slider = ({ images }: Array<ImageProps>) => {
  const width = images[0].dimensions.width;
  const height = images[0].dimensions.height;
  const aspectRatio = width / height;

  const pagination = {
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <div className={styles.root}>
      <button className="custom-prev" />
      <button className="custom-next" />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={pagination}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.key}>
            <img
              style={
                {
                  aspectRatio: aspectRatio,
                } as React.CSSProperties
              }
              className={styles.slide}
              src={image.src}
              alt="hello"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
