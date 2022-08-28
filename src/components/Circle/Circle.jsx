import "./Circle.css";

export function Circle({color, onClick, id, activeCircle}) {

    const currentClass = activeCircle === id ? color : "notActiveCircle";
    
    return(
        <div 
            className={`circle ${currentClass}`}
            onClick={onClick}
            id={id}
        >

        </div>
    )
}