import React from "react";
import "./Link.module.scss"

const Link = (props) => {
    return (
        <a href="#">{props.text}</a>
    )
}

export default Link;