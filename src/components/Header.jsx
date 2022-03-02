import React from "react";
import style from './Header.style.scss'
import logo from './data/logo.svg'
import location from './data/location.svg'
import coin from './data/coin.svg'
import ava from './data/ava.svg'

const Header = () => {
    return (
        <header>
            <div className="header__inner">
                <div className="header__nav">
                    <div className="logo">
                        <object type="image/svg+xml" data={logo}></object>
                    </div>
                    <nav>
                        <span> <a href="#">Главная</a> </span>
                        <span> <a href="#">Пункты сбора</a> </span>
                        <span> <a href="#">ЭкоМаркет</a> </span>
                        <span> <a href="#">О сервисе</a> </span>
                    </nav>
                </div>

                <div className="header__inf__area">
                    <div className="header__information">
                        <object type="image/svg+xml" data={location}></object>
                        <span>Казань</span>
                    </div>
                    <div className="header__information">
                        <object type="image/svg+xml" data={coin}></object>
                        <span>1000</span>
                    </div>
                    <div className="header__information">
                        <object type="image/svg+xml" data={ava}></object>
                        <span>Алексей</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;