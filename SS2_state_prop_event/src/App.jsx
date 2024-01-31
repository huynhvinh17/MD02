import React, { Component } from "react";
import Parents from "./Components/Parents";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Rikkei Academy",
      name: "Minh Huyền",
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      title: "rikkei",
    });
  };

  render() {
    console.log("function re-render");
    return (
      <>
        <div className="hello"> xin chào </div>
        <div>hello</div>
        <p>count: {this.state.count}</p>
        <p>company: {this.state.title}</p>
        <button onClick={this.increaseCount}>increase_count</button>
        <Parents name={this.state.name}></Parents>
      </>
    );
  }
}
