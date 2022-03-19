import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'

export default (props) => {
    const slideTopics = props.slideTopics

    const click = (topicId) => {
        console.log('slide clicked!!!', topicId);
    }
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            slideTopics.map((topic) => {
                return (
                    <SwiperSlide onClick={click.bind(this, topic.id)}>{topic.topic}</SwiperSlide>
                )
            })
        }
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}

      <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
    </Swiper>
  );
};