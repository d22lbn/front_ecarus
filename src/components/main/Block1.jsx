import React from "react";
import './Main.module.scss'
import arrow from '../data/arrow.svg'
import map from '../data/map.png'

const Block1 = () => {
    return (
        <div className="block">
            <div className="block__inf">
                <h2 className="block__title">Пункты сбора</h2>
                <h3 className="block__subtitle">Посмотри, где в твоем городе можно сдать вторсырье на
                    переработку</h3>
                <button className="block__btn">
                    <object type="image/svg+xml" data={arrow}></object>
                </button>
            </div>
            <div className="block__img">
                <img src={map}/>
            </div>
        </div>
    )
}

export default Block1;