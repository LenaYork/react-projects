import "./Todo.css";

export const Todo = (props) => {

    const { isActiveTodo, innerText, onRadioClick, onCrossClick, id } = props;

    const isActive = isActiveTodo ? "active-todo" : "";

    return(
        <div className={`todo ${isActive}`} id={id}>
            <input type="checkbox" onClick={() => onRadioClick(id)}/>
            <p className="todo-text">{innerText}</p>
            <div className="delete-todo-box" onClick={() => onCrossClick(id)}>X</div>
        </div>
    )
}