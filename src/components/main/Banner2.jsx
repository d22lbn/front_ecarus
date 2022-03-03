import React from "react";
import './Main.module.scss'
import banner from '../data/banner2.png'

const Banner2 = () => {
    return (
        <div className="banner banner2">
            <div className="banner__inf">
                <h2 className="banner__title">А вы знали...</h2>
                <h3 className="banner__subtitle">что среднее время разложения пластмассовых изделий колеблется от
                    400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет? </h3>
                <button className="banner__btn">Узнать больше</button>
            </div>
            <div className="banner__img">
                <img src={banner}/>
            </div>
        </div>
    )
}

export default Banner2;