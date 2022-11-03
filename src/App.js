import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';
import { Modal } from './components/Modal/Modal';
import { BOOKS } from './components/BOOKS';

function App () {

    const [ isModalActive, setIsModalActive ] = useState(false);
    const [ books, setBooks ] = useState(BOOKS);
    const [ cartBooks, setCartBooks ] = useState([]);
    const [ cartSum, setCartSum ] = useState(0);
    const [ displayedBooks, setDisplayedBooks ] = useState(BOOKS);

    const calculateSum = (booksList) => {
        const prices = [];
        const tempCartBooks = booksList.filter(book => book.isChosen);
        tempCartBooks.forEach( elem => prices.push(elem.price));
        const sum = prices ? prices.reduce( (a,b) => a+b, 0) : 0;
        setCartSum(sum);
    }

    const buttonHandler = (id, isToggling) => {

        const updateBooks = (arr) => {
            let newBooks = [...arr];
            newBooks = newBooks.map(book =>
                {
                    if (book.id === id) {
                        let newBook = {...book};
                        newBook.isChosen = isToggling ? !newBook.isChosen : false;
                        return newBook;
                    } else return book;
                });
                return newBooks;
        }

        const updatedBooks = updateBooks(books);

        setBooks(updatedBooks);
        setDisplayedBooks(updateBooks(displayedBooks));
        
        setCartBooks(updatedBooks.filter(book => book.isChosen));
        calculateSum(updatedBooks);
    }

    return(
        <div className='app'>
            <Header 
                setIsModalActive={setIsModalActive}
            />
            <Modal 
                isModalActive={isModalActive}
                setIsModalActive={setIsModalActive}
            />

            <div className="main">
                <Routes>
                    <Route path="/" element={<Catalog books={books} buttonHandler={buttonHandler} displayedBooks={displayedBooks} setDisplayedBooks={setDisplayedBooks} />} />
                    <Route path="/cart" element={<Cart cartBooks={cartBooks} cartSum={cartSum} buttonHandler={buttonHandler}/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;
