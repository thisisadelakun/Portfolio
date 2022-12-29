import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "../Styles/NewGallery.css";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Projec1 from '../Assets/Projec1.jpg'
import Projec2 from '../Assets/flipcoinSS.jpg'

export default function NewGallery() {
    return (
        <>
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
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"

            >

                <SwiperSlide>
                    <img src={Projec2} alt="slider1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Projec1} alt="slider2" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Projec1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Projec2} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Projec1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Projec1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Projec2} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Projec2} alt="slider2" />
                </SwiperSlide>
                {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}