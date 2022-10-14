import "./BookCard.css";
import React, { useState } from 'react';

export const BookCard = ({ title, writer, image, year, genres, id, price, addButtonHandler, isChosen }) => {

    const addButtonClass = isChosen ? "add-button added-button" : "add-button";
    const addButtonText = isChosen ? "Remove" : "Add to Cart"

    return(
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="writer">{writer}</p>
            <img src={image} alt={title} className="book-image"></img>
            <p className="year">{year}</p>
            <p className="genres">{genres.join(", ")}</p>
            <p className="price">$ {price}</p>
            <button className={addButtonClass} onClick={() => addButtonHandler(id)}>
                {addButtonText}
            </button>
        </div>
    )
}