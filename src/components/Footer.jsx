import React from "react";
import style from './Footer.style.scss'
import mail from './data/mail.svg'
import phone from './data/phone.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer__inner">
                <div className="footer__items">
                    <div className="footer__item">
                        <object type="image/svg+xml" data={mail}></object>
                        <span>info@ecorus.ru</span>
                    </div>
                    <div className="footer__item">
                        <object type="image/svg+xml" data={phone}></object>
                        <span>+7 (800) 880-88-88</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
