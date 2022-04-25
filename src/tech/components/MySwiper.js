import React, {useRef, useCallback, useState} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Grid, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";
import './myswiper.css'

SwiperCore.use([Navigation]);

export default (props) => {
    const navigationPrevRef = React.useRef(null)
      const navigationNextRef = React.useRef(null)
      const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slideTopics = props.slideTopics

    const click = (topicId) => {
        console.log('slide clicked!!!', topicId);
        props.selectedSlide(topicId)
    }

    // navigation={{
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   }}

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
    navigation
    // pagination={{clickable: true}}
    ref={sliderRef}
      spaceBetween={1}
      slidesPerView={3}
      thumbs={{ swiper: thumbsSwiper }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide></SwiperSlide>
      {/* <div class={{marginLeft: 200}}> */}
        {
            slideTopics.map((topic) => {
                return (
                    <SwiperSlide onClick={click.bind(this, topic.id)}>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />

                      {topic.topic}</SwiperSlide>
                )
            })
        }
        {/* </div> */}

<SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <span slot="container-start">Games</span>
  <span slot="container-end"></span>
  <span slot="wrapper-start"></span>
  <span slot="wrapper-end"></span>
    </Swiper>
  );
};