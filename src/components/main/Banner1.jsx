import React from "react";
import './Main.module.scss'
import banner from '../data/banner1.png'

const Banner1 = () => {
    return (
        <div className="banner">
            <div className="banner__inf">
                <h2 className="banner__title">Сделаем мир чище</h2>
                <h3 className="banner__subtitle">Сдай макулатуру или старую одежду и получи скидку на покупку
                    товаров из
                    переработанных материалов</h3>
                <button className="banner__btn">Условия сервиса</button>
            </div>
            <div className="banner__img">
                <img src={banner}/>
            </div>
        </div>
    )
}

export default Banner1;