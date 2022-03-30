import React from "react";
import style from "./PromoCode.module.scss"
import activePromoCard from "../../../data/promoCard.png"

const PromoCode = (props) => {
  return (
    <div className={style.promo__card}>
      <div className={style.card__photo}>
        <img src={activePromoCard} alt="card" style={!props.isActive ? {filter: "grayscale(100%)"} : {filter: "none"}}/>
        <h3>{props.price} <span>₽</span></h3>
      </div>
      <div className={style.card__info}>
        <div>
          <span className={style.card__info__title}>Дата создания:</span>
          <span className={style.card__info__date}>{props.date}</span>
        </div>
        <div>
          <span className={style.card__info__title}>Ссылка на товар:</span>
          <a href="#">{props.link}</a>
        </div>
      </div>
      <div className={style.show__qr} style={!props.isActive ? {opacity: 0} : {opacity: 1}}>
        <button>Показать qr-код</button>
      </div>
    </div>
  )
}

export default PromoCode;