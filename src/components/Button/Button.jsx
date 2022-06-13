import React from "react";
import "./Button.css";

export const Button = (props) => {

    const {innerText, onClick} = props;

    return(
        <div 
            className="button"
            onClick={onClick} 
        > 
            {innerText}
        </div>
    )
}