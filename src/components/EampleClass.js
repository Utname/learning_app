import React, { Component } from "react";

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test",
      age: 12,
    };
  }
  handleClick = () => {
    this.setState({ name: "Update" });
  };

  render() {
    return (
      <>
        <p>{JSON.stringify(this.state)}</p>
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}
