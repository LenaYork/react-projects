import "./Button.css";

export const Button = (props) => {

    const {innerText, onClick, onKeyDown, className, id, activeControl} = props;

    const isActiveCOntrol = id === activeControl ? "active-control-button" : "";

    return(
        <div 
            id={id}
            className={`button ${className} ${isActiveCOntrol}`}
            onClick={() => onClick(id)}
            // onKeyDown={onKeyDown}
            onKeyPress={onKeyDown}
        > 
            {innerText}
        </div>
    )
}