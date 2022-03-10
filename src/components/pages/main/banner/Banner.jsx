import React from "react";
import '../Main.scss'
import styles from './Banner.module.scss'

const Banner = (props) => {
    return (
        <div className={styles.banner} style={{"background": props.background}}>
            <div className={styles.banner__inf}>
                <h2 className={styles.banner__title}>{props.title}</h2>
                <h3 className={styles.banner__subtitle}>{props.subtitle}</h3>
                <button className={styles.banner__btn}>{props.btn}</button>
            </div>
            <div className={styles.banner__img}>
                <img src={props.image}/>
            </div>
        </div>
    )
}

export default Banner;