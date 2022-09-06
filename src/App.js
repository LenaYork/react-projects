import React, { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';

function App () {

    // useEffect(() => {
    //     document.querySelector(".total-number").innerHTML = countLength(todoArr, activeControl);
    // }, [todoArr, activeControl ])
        
    return(
        <div className='app'>
            <h1 className="app-title">Book Store</h1>
            <div className="controls">
            
            </div>
            <Footer />
        </div>
    )
}

export default App;
