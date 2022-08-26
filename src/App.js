import React, { useState } from 'react';
import './App.css';
import { Circle } from './components/Circle/Circle';

function App () {

    const [activeCircle, setActiveCircle ] = useState("2");

    const circleHandler = (event) => {
        // console.log(event.target.id);
        setActiveCircle(event.target.id);
    }

    return(
        <div className='app'>
            <h1 className="app-title">Traffic Light</h1>
            <div className="circles">
                <Circle 
                    color="red"
                    id="1"
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
                <Circle 
                    color="yellow"
                    id="2"
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
                <Circle 
                    color="green"
                    id="3"
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
            </div>
            
        </div>
    )
}

export default App;
