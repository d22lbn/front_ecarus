import React from "react";
import style from "./Profile.module.scss"
import ava from "../../../data/avalk.svg"

const Profile = () => {
  return (
    <div className={style.profile__wrapper}>
      <img src={ava} alt="ava"/>
      <h3>Алексей Петрович</h3>
      <span className={style.phone}>+7 (917) 888 88 88</span>
      <span className={style.email}>ivanov@gmail.com</span>
      <button>Редактировать</button>
    </div>
  )
}

export default Profile;