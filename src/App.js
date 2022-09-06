import React, { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

function App () {

    // useEffect(() => {
    //     document.querySelector(".total-number").innerHTML = countLength(todoArr, activeControl);
    // }, [todoArr, activeControl ])
        
    return(
        <div className='app'>
            <h1 className="app-title">TODO LIST</h1>
            <div className="controls">
            
            </div>
            
        </div>
    )
}

export default App;
