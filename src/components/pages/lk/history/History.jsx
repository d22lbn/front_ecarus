import React from "react";
import style from "./History.module.scss"
import coin from '../../../data/coin.svg'

const History = (props) => {
  return (
    <div className={style.history__card}>
      <div className={style.history__inf}>
        <div>
          <span className={style.history__inf__title}>Адрес</span>
          <span className={style.history__inf__text}>{props.address}</span>
        </div>
        <div>
          <span className={style.history__inf__title}>Материал</span>
          <span className={style.history__inf__text}>{props.material}</span>
        </div>
        <div>
          <span className={style.history__inf__title}>Дата</span>
          <span className={style.history__inf__text}>{props.data}</span>
        </div>
      </div>
      <div className={style.history__price}>
        <img src={coin} alt="coin"/>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

export default History;