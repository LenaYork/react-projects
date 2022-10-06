import "./BookCard.css";

export const BookCard = ({ title, writer, image, year, genres }) => {
    return(
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="writer">{writer}</p>
            <img src={image} alt={title} className="book-image"></img>
            <p className="year">{year}</p>
            <p className="genres">{genres.join(", ")}</p>
        </div>
    )
}