import React from "react";
import styles from "./Header.module.scss"
import crossOut from "../../data/crossOut.svg"

const Header = (props) => {
    return (
        <div className={styles.auth__header}>
            <h3>{props.text}</h3>
            <a href="#"><img src={crossOut} alt=""/></a>
        </div>
    )
}

export default Header;

