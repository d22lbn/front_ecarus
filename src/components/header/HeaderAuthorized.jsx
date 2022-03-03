import React from "react";
import styles from './Header.module.scss'
import logo from '../data/logo.svg'
import location from '../data/location.svg'
import coin from '../data/coin.svg'
import ava from '../data/ava.svg'
import login from '../data/login.svg'

const HeaderAuthorized = (props) => {
    return (
        <header>
            <div className={styles.header__inner}>
                <div className={styles.header__nav}>
                    <div className={styles.logo}>
                        <img src={logo} align={"logo"}/>
                    </div>
                    <nav>
                        <span> <a href="/main">Главная</a> </span>
                        <span> <a href="/collection-points">Пункты сбора</a> </span>
                        <span> <a href="/eco-market">ЭкоМаркет</a> </span>
                        <span> <a href="/service">О сервисе</a> </span>
                    </nav>
                </div>

                <div className={styles.header__inf__area}>
                    <div className={styles.header__information}>
                        <img src={location} align={"location"}/>
                        <span>Казань</span>
                    </div>
                    <div className={styles.header__information} style={{"display": (props.auth ? "flex" : "none")}}>
                        <img src={coin} align={"coin"}/>
                        <span>1000</span>
                    </div>
                    <div className={styles.header__information}>
                        <img src={props.auth ? ava : login} align={props.auth ? "ava" : "login"}/>
                        <span>{props.auth ? "Алексей" : "Войти"}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderAuthorized;