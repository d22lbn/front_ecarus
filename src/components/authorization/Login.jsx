import React from "react";
import styles from "./Login.module.scss"
import Input from "./input/Input";
import Button from "./button/Button";
import Link from "./link/Link";
import Header from "./header/Header";

const Login = () => {
    return (
        <div className={styles.auth__wrapper}>
            <div className={styles.auth}>
                <div className={styles.auth__inner}>
                    <Header text="Вход"/>
                    <form className={styles.auth__form}>
                        <Input type="tel" name="phone" placeholder="Телефон"/>
                        <Input type="password" name="password" placeholder="Пароль"/>
                        <Button name="Войти" background="rgba(7, 200, 142, 1)" textColor="rgba(255, 255, 255, 1)" marginTop="0.9026vh"/>
                        <div className={styles.auth__links}>
                            <Link text="Войти с помощью смс"/>
                            <Link text="Регистрация"/>
                        </div>
                        <Button name="Вход для партнёров" background="rgba(62, 80, 114, 0.08)" textColor="rgba(0, 11, 38, 0.8)"  marginTop="3.6106vh"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
