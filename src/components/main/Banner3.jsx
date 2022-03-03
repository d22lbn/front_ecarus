import React from "react";
import './Main.module.scss'
import banner from '../data/banner3.png'

const Banner3 = () => {
    return (
        <div className="banner banner3">
            <div className="banner__inf">
                <h2 className="banner__title">Что с масками?</h2>
                <h3 className="banner__subtitle">Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку. </h3>
                <button className="banner__btn">Пункты сбора масок</button>
            </div>
            <div className="banner__img">
                <img src={banner}/>
            </div>
        </div>
    )
}

export default Banner3;