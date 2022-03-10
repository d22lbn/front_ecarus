import React from "react";
import "./Button.module.scss"

const Button = (props) => {
    return (
        <button style={{background : props.background, marginTop : props.marginTop, color : props.textColor}}
                type="submit" name="button">{props.name}</button>
    )
}

export default Button;