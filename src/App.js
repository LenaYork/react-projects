import React, { useEffect, useState } from 'react';
import './App.css';
import { Circle } from './components/Circle/Circle';

function App () {

    const [activeCircle, setActiveCircle ] = useState(1);

    const circleHandler = (event) => {
        setActiveCircle(event.target.id);
    }

    useEffect( () => {
        const timings = [10000, 3000, 15000]
        const intervalShit = setInterval(() => {
            console.log("activeCircle", activeCircle);
            if (activeCircle > 3) {
                console.log("4 возвращаем в 1");
                setActiveCircle(1)
            } else { setActiveCircle(activeCircle+1)}
        }, timings[activeCircle-1]);
        return () => {
            clearInterval(intervalShit);
        } 
    }, [activeCircle])

    // const changeLights = () => {
    //     console.log("activeCircle", activeCircle);
    //     if (activeCircle > 3) {
    //         console.log("4 возвращаем в 1");
    //         setActiveCircle(1)
    //     } else { setActiveCircle(activeCircle+1)}
    // }

    return(
        <div className='app'>
            <h1 className="app-title">Traffic Light</h1>
            <div className="circles">
                <Circle 
                    color="red"
                    id={1}
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
                <Circle 
                    color="yellow"
                    id={2}
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
                <Circle 
                    color="green"
                    id={3}
                    onClick={circleHandler}
                    activeCircle={activeCircle}
                />
            </div>
            
        </div>
    )
}

export default App;
