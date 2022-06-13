import React from "react";
import "./Circle.css";

export const Circle = (props) => {
    const {innerText, bgColor} = props;

    return(
        <div className="circle"
            style={{ backgroundColor: bgColor }}
        >
            {innerText}
        </div>
    )
}