import React, { useEffect, useState } from 'react';
import './App.css';
import { Circle } from './components/Circle/Circle';

function App () {
    const [ activeCircle, setActiveCircle ] = useState(1);
    const [ isIncreasing, setIsIncreasing ] = useState(true);
    const [ timeLeft, setTimeLeft ] = useState(10);

    useEffect( () => {
            let newTimer;
            if (activeCircle === 1) {
                newTimer =  10
            } else if (activeCircle === 3) {
                newTimer =  15
            } else { 
                newTimer = 3
            }
            setTimeLeft(newTimer)
    }, [activeCircle] )

    useEffect(() => {
        const changeSeconds = setInterval( () => {
            if (timeLeft !== 0) {
                setTimeLeft(timeLeft - 1)
            }
        }, 1000)

        return () => {
            clearInterval(changeSeconds);
        } 
    }, [timeLeft])

    useEffect( () => {
        const timings = [10000, 3000, 15000]
        const changeActiveCircle = () => {
            let newActiveCircle = activeCircle;

            if (isIncreasing === false) {
                if (newActiveCircle > 1) {
                    newActiveCircle--;
                } else {
                    setIsIncreasing(true);
                    localStorage.setItem("isIncreasing", JSON.stringify(true))
                    newActiveCircle++;
                }
            } else {
                if (activeCircle > 3) {
                    newActiveCircle = 2;
                    setIsIncreasing(false);
                    localStorage.setItem("isIncreasing", JSON.stringify(false))
                }  else newActiveCircle++;
            }

            setActiveCircle(newActiveCircle);
            localStorage.setItem("activeCircle", JSON.stringify(newActiveCircle))
        }
        let changeLights;
            changeLights = setInterval(changeActiveCircle, timings[activeCircle-1]);
        return () => {
            clearInterval(changeLights);
        } 
    }, [activeCircle, isIncreasing ])

    return(
        <div className='app'>
            <h1 className="app-title">Traffic Light</h1>
            <div className="circles">
                <Circle 
                    color="red"
                    id={1}
                    activeCircle={activeCircle}
                    timeLeft={timeLeft}
                />
                <Circle 
                    color="yellow"
                    id={2}
                    activeCircle={activeCircle}
                />
                <Circle 
                    color="green"
                    id={3}
                    activeCircle={activeCircle}
                    timeLeft={timeLeft}
                />
            </div>
            
        </div>
    )
}

export default App;
