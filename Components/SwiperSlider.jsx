// components/SwiperSlider.jsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const SwiperSlider = ({ posts }) => {
  return (
    <div className="w-[22rem] md:w-full px-4 sm:px-6 md:px-10 py-6  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
        }}
        className="rounded-lg overflow-hidden"
      >
        {posts.slice(0, 5).map((post) => (
          <SwiperSlide key={post._id} className="relative">
            <Link href={`/post/${post._id}`}>
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <div className="p-3 sm:p-4 bg-black/60 absolute bottom-0 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {post.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
