import React from "react";
import './Main.module.scss'
import arrow from '../data/arrow.svg'
import map from '../data/map.png'
import products from "../data/products.png";

const Block2 = () => {
    return (
        <div className="block">
            <div className="block__inf">
                <h2 className="block__title">ЭкоМаркет</h2>
                <h3 className="block__subtitle">Используй заработанные экокоины для покупки товаров из
                    переработанных
                    материалов </h3>
                <button className="block__btn">
                    <object type="image/svg+xml" data={arrow}></object>
                </button>
            </div>
            <div className="block__img">
                <img src={products}/>
            </div>
        </div>
    )
}

export default Block2;