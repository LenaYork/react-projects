import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Todo } from './components/Todo/Todo';

function App () {

    const [ inputText, setInputText ] = useState("");
    const [ todoArr, setTodoArr ] = useState([]);
    const [ activeControl, setActiveControl ] = useState("");
    const [ lengthTitle, setLengthTitle ] = useState("total");
    const [ displayedArr, setDisplayedArr ] = useState(todoArr);
    // const [ selectedTodoArr, setSelectedTodoArr ] = useState([]);
    const [list, setList ] = useState([]);
    const [ listLength, setListLength ] = useState(0);

    const inputOnChange = (event) => {
        setInputText(event.target.value);
    }

    const addButtonClick = () => {
        if (inputText) {
            setInputText("");
            let newArr = [...todoArr];
            newArr.push({
                "text" : inputText,
                "id" : todoArr.length ? todoArr[todoArr.length-1].id + 1 :  1,
                "isDone" : false
            })
            setTodoArr(newArr);
        } else alert("Todo item cannot be empty");
        
    }

    const onRadioClick = (activeId) => {
        console.log("radio was clicked");
        let newArr = [...todoArr];
        // newArr.push(...todoArr.filter(elem => elem.id === activeId));
        newArr = newArr.map(elem => {
            if (elem.id === activeId) {
                return {
                    "text" : elem.text,
                    "id" : elem.id,
                    "isDone" : !elem.isDone
                }
            } else return elem;
        })
        setTodoArr(newArr);
        console.log(newArr);
    }

    const onCrossClick = (clickedId) => {
        let newArr = [...todoArr];
        newArr = newArr.filter(elem => elem.id !== clickedId)
        setTodoArr(newArr);
    }

    // const isActiveTodo = (id) => {
    //     let isActive = false;
    //     selectedTodoArr.forEach(elem => {
    //         if (elem.id === id) {
    //             isActive = true;
    //         }
    //     })
    //     console.log(isActive)
    //     return isActive;
    // }

    const addKeyDown = (event) => {
        console.log("onKeyDown", event.target);
        if (event.keyCode === 13) {
            addButtonClick();
        }
    }

    const clearButton = () => {
        if (todoArr.length > 0) {
            let isConfirmed = window.confirm("Are you sure you want to delete ALL the items in the list?");
            if(isConfirmed) {
                setTodoArr([]);
            }
        } else alert("There is nothing to delete")
        
    }

    const activeButtonHandler = (id) => {
        let newArr;
        console.log(id)
        setActiveControl(id);        
        setLengthTitle(id)
        sortArr();
    }

    const sortArr = () => {
        // let list = [];
        let newList = [];
        switch(true) {
            case activeControl === "all": 
                newList = [...todoArr]
                break;

            case activeControl === "done": 
                newList = [...todoArr.filter(elem => elem.isDone )]
                break;

            case activeControl === "pending": 
                newList = [...todoArr.filter(elem => !elem.isDone )]
                break;

            default:
                newList = [...todoArr];
                break;
        }

        setList(newList);
        setListLength(list.length)
    }

    const renderList = () => {
        // let list = [];
        // switch(true) {
        //     case activeControl === "all": 
        //         list = [...todoArr]
        //         // setListLength(list.length)
        //         console.log("list.length", list.length)
        //         break;

        //     case activeControl === "done": 
        //         list = [...todoArr.filter(elem => elem.isDone )]
        //         // setListLength(list.length)
        //         break;

        //     case activeControl === "pending": 
        //         list = [...todoArr.filter(elem => !elem.isDone )]
        //         // setListLength(list.length)
        //         break;

        //     default:
        //         list = [...todoArr];
        //         break;
        // }
        return(
            <div className="items-area">
                    {list.map(elem  => {
                        return (
                            <Todo 
                                isActiveTodo={elem.isDone}
                                onRadioClick={onRadioClick}
                                // onCrossClick={() => onCrossClick(elem.id)}
                                onCrossClick={onCrossClick}
                                innerText={elem.text}
                                id={elem.id}
                                key={elem.id}
                            />
                        )
                    })}
            </div>
        )
    }

    return(
        <div className='app'>
            <h1 className="app-title">TODO LIST</h1>
            <div className="controls">
                <div className="input-area">
                    <Input 
                        onChange={inputOnChange}
                        value={inputText}
                    />
                    <Button 
                        innerText="add"
                        className="add-button"
                        onClick={addButtonClick}
                        onKeyDown={addKeyDown}
                    />
                </div>
                <div className="results-area">
                    <div className="buttons-container">
                        <div className="total-number-container">
                            <div>{lengthTitle}</div>
                            <div className="total-number">{listLength}</div>
                        </div>
                        <Button 
                            innerText="all"
                            id="all"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="done"
                            id="done"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="pending"
                            id="pending"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="clear"
                            id="clear"
                            className="clear-button"
                            onClick={clearButton}
                        />
                    </div>

                    {renderList()}
                </div>
                
                
            </div>
            
        </div>
    )
}

export default App;
