import "./Circle.css";
import React from "react";

export class Circle extends React.Component {
    

    // handleClick = ()=> {
    //     this.setState({
    //         isActive: !this.state.isActive,
    //     })
    // }

    render() {
        const circleColor = (this.props.id === this.props.active) ? this.props.color : "grey";
        return(
            <div className={`circle ${circleColor}`} onClick={()=>this.props.click(this.props.id)}></div>
        )
    }
}