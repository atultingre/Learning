import React, { Component } from "react";

export default class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;

    return <div>
        <h1>Interval Class Counter</h1>
        <p>{count}</p>
    </div>;
  }
}
