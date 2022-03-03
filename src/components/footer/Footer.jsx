import React from "react";
import styles from './Footer.module.scss'
import mail from '../data/mail.svg'
import phone from '../data/phone.svg'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__inner}>
                <div className={styles.footer__items}>
                    <div className={styles.footer__item}>
                        <object type="image/svg+xml" data={mail}></object>
                        <span>info@ecorus.ru</span>
                    </div>
                    <div className={styles.footer__item}>
                        <object type="image/svg+xml" data={phone}></object>
                        <span>+7 (800) 880-88-88</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
