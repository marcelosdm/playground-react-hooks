import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementeCount = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h1>Counter Class</h1>
        <p>You clicked {this.state.count} times!</p>
        <button onClick={this.incrementeCount}>Click me</button>
      </div>
    );
  }
}

export default CounterClass;
