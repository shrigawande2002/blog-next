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
    <div className="w-full px-4 sm:px-10 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden"
      >
        {posts.slice(0, 5).map((post) => (
          <SwiperSlide key={post._id}>
            <Link href={`/post/${post._id}`}>
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-96 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4 bg-black/60 absolute bottom-0 w-full">
              <h3 className="text-lg font-bold text-white">{post.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
