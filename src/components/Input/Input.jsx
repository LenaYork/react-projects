import "./Input.css";

export const Input = (props) => {

    const {onChange, value} = props;

    return (
        <input 
            className="input" 
            value={value}
            onChange={onChange}
        >
        </input>
    )
}