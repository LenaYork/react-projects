import React from 'react';
import './App.css';
import { Circle } from "./components/Circle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isActive: false,
        activeCircle: "0",

    }
}

  
  handleClick = (id)=> {
    // const isMatch = id === this.state.activeCircle;
    const currentId = (id === this.state.activeCircle) ? "0" : id;
    this.setState({
        isActive: !this.state.isActive,
        activeCircle: currentId,
    })
}

  render() {
    return (
      <div className="App">
        <h1>Traffic Light</h1>
        <section className="traffic-container">
          <Circle  color="red" click={this.handleClick} id="1" active={this.state.activeCircle} />
          <Circle  color="yellow" click={this.handleClick} id="2" active={this.state.activeCircle}/>
          <Circle  color="green" click={this.handleClick} id="3" active={this.state.activeCircle}/>
          <Circle  color="blue" click={this.handleClick} id="4" active={this.state.activeCircle}/>
        </section>
      </div>
    );
  }

}

export default App;
