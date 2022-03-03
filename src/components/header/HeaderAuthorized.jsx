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
                        <object type="image/svg+xml" data={logo}></object>
                    </div>
                    <nav>
                        <span> <a href="#">Главная</a> </span>
                        <span> <a href="#">Пункты сбора</a> </span>
                        <span> <a href="#">ЭкоМаркет</a> </span>
                        <span> <a href="#">О сервисе</a> </span>
                    </nav>
                </div>

                <div className={styles.header__inf__area}>
                    <div className={styles.header__information}>
                        <object type="image/svg+xml" data={location}></object>
                        <span>Казань</span>
                    </div>
                    <div className={styles.header__information} style={{"display": (props.auth ? "flex" : "none")}}>
                        <object type="image/svg+xml" data={coin}></object>
                        <span>1000</span>
                    </div>
                    <div className={styles.header__information}>
                        <object type="image/svg+xml" data={props.auth ? ava : login}></object>
                        <span>{props.auth ? "Алексей" : "Войти"}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderAuthorized;