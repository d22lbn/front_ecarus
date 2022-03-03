import React from "react";
import '../Main.scss'
import arrow from '../../data/arrow.svg'
import styles from './Block.module.scss'

const Block = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.block__inf}>
                <h2 className={styles.block__title}>{props.title}</h2>
                <h3 className={styles.block__subtitle}>{props.subtitle}</h3>
                <button className={styles.block__btn}>
                    <object type="image/svg+xml" data={arrow}></object>
                </button>
            </div>
            <div className={styles.block__img}>
                <img src={props.image}/>
            </div>
        </div>
    )
}

export default Block;