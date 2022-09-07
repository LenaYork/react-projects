import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Cart } from './components/Cart/Cart';

function App () {

    // useEffect(() => {
    //     document.querySelector(".total-number").innerHTML = countLength(todoArr, activeControl);
    // }, [todoArr, activeControl ])
        
    return(
        <div className='app'>
            <Header />
            <Routes>
                <Route path="/home" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            <div className="controls">

            </div>
            <Footer />
        </div>
    )
}

export default App;
