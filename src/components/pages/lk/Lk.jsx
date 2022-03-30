import React from "react";
import Profile from "./profile/Profile";
import PromoCode from "./promoCode/PromoCode";
import style from "./Lk.module.scss"
import History from "./history/History";

const Lk = () => {
  return (
    <main className={style.lk}>
      <h1>Личный кабинет</h1>
      <div className={style.lk__inf}>
        <Profile/>
        <div className={style.lk__items}>
          <div className={style.lk__links}>
            <a className={style.active__link} href="#">Промокоды</a>
            <a href="#">История</a>
          </div>
          <div className={style.lk_promo}>
            <PromoCode price={1000}
                       isActive={true}
                       date="25.09.2021"
                       link="adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu..."/>
            <PromoCode price={100}
                       isActive={false}
                       date="25.09.2021"
                       link="adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu..."/>
            <PromoCode price={400}
                       isActive={false}
                       date="25.09.2021"
                       link="adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu..."/>
          </div>
          <div className={style.lk_history}>
            <History address="Казань, Кремлёвская, 88"
                     material="Пластик: 1 кг · Стекло: 2 кг · Бумага: 25 кг"
                     data="25.09.2021"
                     price="1000"/>
            <History address="​Казань, проспект Победы, 141"
                     material="Пластик: 1 кг · Стекло: 3 кг · Бумага: 5 кг"
                     data="25.09.2021"
                     price="900"/>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Lk;