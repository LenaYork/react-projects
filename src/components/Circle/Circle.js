import "./Circle.css";
import React from "react";

export function Circle(props) {
    
        const circleColor = (props.id === props.active) ? props.color : "grey";
        return(
            <div className={`circle ${circleColor}`} onClick={()=> props.click(props.id)}></div>
        )
}