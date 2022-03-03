import React from "react";
import './Main.module.scss'
import Banner1 from "./Banner1";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const Main = () => {
    return (
        <main>
            <div className="main__inner">
                <Swiper modules={[Navigation]}  navigation loop={true}>
                    <SwiperSlide><Banner1/></SwiperSlide>
                    <SwiperSlide><Banner2/></SwiperSlide>
                    <SwiperSlide><Banner3/></SwiperSlide>
                </Swiper>

                <div className="blocks">
                    <Block1/>
                    <Block2/>
                </div>
            </div>
        </main>
    )
}

export default Main;
