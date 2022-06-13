import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Circle } from './components/Circle/Circle';


function App () {
    const CIRCLES = [
        {
            bgColor : "#004500",
            innerText : "Йа кружок!",
            id : "1"
        },
        {
            bgColor : "#004500",
            innerText : "И йа кружок!",
            id : "2"
        },
        {
            bgColor : "#004500",
            innerText : "Я тож!",
            id : "3"
        },
    ]

    const [ circleArr, setCircleArr ] = useState([]);
    const [ counter, setCounter ] = useState(0);
 
    const addCircle = () => {
        console.log("тыц");
        if (circleArr.length > 0 ) {
            let newArr = [...circleArr];
            newArr.push({
                bgColor : "#004500",
                innerText : "новый!",
                id : circleArr[circleArr.length-1].id+1
            });
            setCircleArr(newArr);
        } else {
            console.log("2");
            setCircleArr([{
                bgColor : "#004500",
                innerText : "новый!",
                id : 1
            }]);
        }
    }

    const deleteCircle = () => {
        if (circleArr.length === 0 ) {
            setCounter(counter+1);
            if (counter === 3) {
                alert("ибанько штоль? нечего ж удалять!");
            }
        }

        let reducedArr = [...circleArr];
        reducedArr.pop();
        setCircleArr(reducedArr);
    }

    const clearCircles = () => {
        setCircleArr([]);
    }

    return(
        <div className='app'>
            <h1>Рисуем кружочки по тыку</h1>
            <div className="buttons-container">
                <Button innerText="Добавить" onClick={addCircle}/>
                <Button innerText="Удалить" onClick={deleteCircle}/>
                <Button innerText="Очистить" onClick={clearCircles}/>
            </div>
            {
                circleArr.map(elem => {
                    return <Circle 
                        bgColor={elem.bgColor}
                        innerText={elem.innerText}
                        key={elem.id}
                    />
                })
        
            }
            {/* <Circle 
                bgColor="#008000"
                innerText="Йа кружок!"
            />
            <Circle 
                bgColor="#008000"
                innerText="И йа кружок!"
            />
            <Circle 
                bgColor="#008000"
                innerText="И я!"
            /> */}
            
        </div>
    
    )
}

export default App;
