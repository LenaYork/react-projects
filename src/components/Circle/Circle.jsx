import React from "react";
import "./Circle.css";

export const Circle = (props) => {
    const {innerText, bgColor, onClick, isActive} = props;

    return(
        <div className={`circle ${isActive}`}
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {innerText}
        </div>
    )
}