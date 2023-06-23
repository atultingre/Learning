import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  
  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Class Component Counter</h1>
        <h1>{count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.decrementCount}>Decrement</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
