import React from "react";
import "./Input.module.scss"

const Input = (props) => {
    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} required/>
    )
}

export default Input;