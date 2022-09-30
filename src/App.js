import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';
import { Modal } from './components/Modal/Modal';

function App () {

    const [ isModalActive, setIsModalActive ] = useState(false);

    // useEffect(() => {
    //     document.querySelector(".total-number").innerHTML = countLength(todoArr, activeControl);
    // }, [todoArr, activeControl ])
        
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
                    <Route path="/" element={<Catalog />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;
