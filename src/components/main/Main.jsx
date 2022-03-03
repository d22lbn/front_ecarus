import React from "react";
import './Main.style.scss'
import Banner from "./banner/Banner";
import Block from "./block/Block";
import bannerImg1 from '../data/banner1.png'
import bannerImg2 from '../data/banner2.png'
import bannerImg3 from '../data/banner3.png'
import mapImg1 from '../data/map.png'
import mapImg2 from "../data/products.png";

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
    return (
        <main>
            <div className="main__inner">
                <Swiper modules={[Navigation]} navigation loop={true}>
                    <SwiperSlide><Banner
                        backgraund={"rgba(179, 237, 200, 1)"}
                        title={"Сделаем мир чище"}
                        subtitle={"Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"}
                        btn={"Условия сервиса"}
                        image={bannerImg1}
                    /></SwiperSlide>

                    <SwiperSlide><Banner
                        backgraund={"rgba(255, 228, 143, 1)"}
                        title={"А вы знали..."}
                        subtitle={"что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?"}
                        btn={"Узнать больше"}
                        image={bannerImg2}
                    /></SwiperSlide>

                    <SwiperSlide><Banner
                        backgraund={"rgba(191, 240, 222, 1)"}
                        title={"Что с масками?"}
                        subtitle={"Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку."}
                        btn={"Пункты сбора масок"}
                        image={bannerImg3}
                    /></SwiperSlide>
                </Swiper>

                <div className="blocks">
                    <Block
                        title={"Пункты сбора"}
                        subtitle={"Посмотри, где в твоем городе можно сдать вторсырье на переработку"}
                        image={mapImg1}
                    />
                    <Block
                        title={"ЭкоМаркет"}
                        subtitle={"Используй заработанные экокоины для покупки товаров из переработанных материалов"}
                        image={mapImg2}
                    />
                </div>
            </div>
        </main>
    )
}

export default Main;
