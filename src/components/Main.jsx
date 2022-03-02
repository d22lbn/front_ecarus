import React from "react";
import style from './Main.style.scss'
import banner1 from './data/banner1.png'
import arrow from './data/arrow.svg'
import map from './data/map.png'
import products from './data/products.png'

const Main = () => {
    return (
        <main>
            <div className="main__inner">
                <div className="banner">
                    <div className="banner__inf">
                        <h2 className="banner__title">Сделай мир чище</h2>
                        <h3 className="banner__subtitle">Сдай макулатуру или старую одежду и получи скидку на покупку
                            товаров из
                            переработанных материалов</h3>
                        <button className="banner__btn">Условия сервиса</button>
                    </div>
                    <div className="banner__img">
                        <img src={banner1}/>
                    </div>
                </div>

                <div className="blocks">
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
                </div>
            </div>
        </main>
    )
}

export default Main;
