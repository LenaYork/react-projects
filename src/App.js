import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';
import { Modal } from './components/Modal/Modal';
import { BOOKS } from './components/BOOKS'

function App () {

    const [ isModalActive, setIsModalActive ] = useState(false);
    const [ books, setBooks ] = useState(BOOKS);
    const [ cartBooks, setCartBooks ] = useState([]);
    const [ cartSum, setCartSum ] = useState(0);

    const calculateSum = (booksList) => {
        const prices = [];
        const tempCartBooks = booksList.filter(book => book.isChosen);
        tempCartBooks.forEach( elem => prices.push(elem.price));
        console.log("prices", prices);
        const sum = prices ? prices.reduce( (a,b) => a+b, 0) : 0;
        setCartSum(sum);
        console.log("sum", sum);
    }

    const buttonHandler = (id, isToggling) => {
        let newBooks = [...books];
        newBooks = newBooks.map(book =>
            {
                if (book.id === id) {
                    let newBook = {...book};
                    newBook.isChosen = isToggling ? !newBook.isChosen : false;
                    return newBook;
                } else return book;
            });
        setBooks(newBooks);
        setCartBooks(newBooks.filter(book => book.isChosen));
        calculateSum(newBooks);
    }

    // const deleteCartItemHandler = (id) => {
    //     let newBooks = [...books];
    //     newBooks = newBooks.map( book => 
    //         {
    //             if (book.id === id) {
    //                 let newBook = {...book};
    //                 newBook.isChosen = false;
    //                 return newBook;
    //             } else return book;
    //         })
    //     setBooks(newBooks);
    //     setCartBooks(newBooks.filter(book => book.isChosen));
    //     calculateSum(newBooks);
    //     console.log("стейт", books);
    // }
        
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
                    <Route path="/" element={<Catalog books={books} buttonHandler={buttonHandler}/>} />
                    <Route path="/cart" element={<Cart cartBooks={cartBooks} cartSum={cartSum} buttonHandler={buttonHandler}/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;
