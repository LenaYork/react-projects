import "./Catalog.css";
import { BookCard} from "./BookCard/BookCard";
// import { BOOKS } from "../BOOKS" 

// const BOOKS = [
//     {
//         title: "White Fang",
//         writer: "Jack London",
//         year: "1906",
//         image: "./books/whitefang.jpg",
//         genre: ["adventure", "novel", "fiction"]     
//     },
//     {
//         title: "The Call of the Wild",
//         writer: "Jack London",
//         year: "1903",
//         image: "./books/callofthewild.jpg",
//         genre: ["adventure", "novel", "fiction"]     
//     },
//     {
//         title: "Hot Shot",
//         writer: "Susan E Phillips",
//         year: "1991",
//         image: "./books/hotshot.jpg",
//         genre: ["romance", "novel", "history"]     
//     },
//     {
//         title: "Into the Darkest Corner",
//         writer: "Elizabeth Haynes",
//         year: "2012",
//         image: "./books/intothedarkestcorner.jpg",
//         genre: ["thriller", "novel", "romance"]     
//     },
//     {
//         title: "When Panic Attacks",
//         writer: "Burns David D.",
//         year: "2006",
//         image: "./books/whenpanicattacks.jpg",
//         genre: ["psychology"]     
//     },
//     {
//         title: "Invisible Women",
//         writer: "Caroline Criado Perez",
//         year: "2020",
//         image: "./books/invisiblewomen.jpg",
//         genre: ["psychology", "sociology", "statistics"]     
//     },
//     {
//         title: "A Thousand Splendid Suns",
//         writer: "Khaled Hosseini",
//         year: "2007",
//         image: "./books/AThousandSplendidSuns.gif",
//         genre: ["novel"]     
//     },
//     {
//         title: "Pretty Little Liars",
//         writer: "Sarah Shepard",
//         year: "2010",
//         image: "./books/pll.jpg",
//         genre: ["novel", "detective", "drama"]     
//     },
// ]

export const Catalog = ({books, buttonHandler}) => {
    return(
        <div className="catalog">
            {books.map(
                (book) => {
                    return(
                        <BookCard 
                            key={`${book.title}-${book.writer}`}
                            title={book.title}
                            writer={book.writer}
                            image={book.image}
                            year={book.year}
                            genres={book.genre}
                            id={book.id}
                            price={book.price}
                            buttonHandler={buttonHandler}
                            isChosen={book.isChosen}
                        />
                    )
                }
            )}
            
        </div>
    )
}