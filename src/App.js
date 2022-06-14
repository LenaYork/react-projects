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
    const [ color, setColor ] = useState("#008000");
    const [ userText,  setUserText ] = useState("Начальный текст");
    const [ activeIDArr, setActiveIDArr ] = useState([]);

    const addCircle = () => {
        console.log("тыц");
        if (circleArr.length > 0 ) {
            let newArr = [...circleArr];
            newArr.push({
                bgColor : color,
                innerText : userText,
                id : circleArr[circleArr.length-1].id+1
            });
            setCircleArr(newArr);
        } else {
            console.log("2");
            setCircleArr([{
                bgColor : color,
                innerText : userText,
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

    const colorBlur = (event) => {
        setColor(event.target.value);
    }
    
    const saveText = (event) => {
        setUserText(event.target.value);
        console.log(userText);
    }

    const circleClick = (id) => {
        let newArr = [...activeIDArr];
        if (activeIDArr.includes(id)) {
            console.log("ыыыыыыыыыыыыыыыыыыыыы");
            newArr = newArr.filter(elem => elem !== id);
        } else {
            newArr.push(id); 
        }
        console.log(newArr)
        setActiveIDArr(newArr);
    }

    return(
        <div className='app'>
            <h1>Рисуем кружочки по тыку</h1>
            <label htmlFor="colorPicker">Выберите цвет:</label>
            <input type="color" id="colorPicker" onBlur={colorBlur}></input>
            <label htmlFor="userText">Напишите текст для кружочка</label>
            <input type="text" id="userText" onBlur={saveText}></input>
            <div className="buttons-container">
                <Button innerText="Добавить" onClick={addCircle}/>
                <Button innerText="Удалить" onClick={deleteCircle}/>
                <Button innerText="Очистить" onClick={clearCircles}/>
            </div>
            {
                circleArr.map(elem => {
                    const activeClass = activeIDArr.includes(elem.id) ? "activeCircle" : "";
                    return <Circle 
                        bgColor={elem.bgColor}
                        innerText={elem.innerText}
                        isActive={activeClass}
                        key={elem.id}
                        onClick={() => circleClick(elem.id)}
                    />
                })
        
            }
            
            
        </div>
    
    )
}

export default App;
