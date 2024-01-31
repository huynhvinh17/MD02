import React, { Component } from "react";
import Children from "./Children";

export default class Parents extends Component {
  getAge = (age) => {
    console.log("age", age);
  };

  render() {
    console.log("parent");
    const { name } = this.props;
    return (
      <>
        <div>Parents</div>
        <Children name={name} age={this.getAge}></Children>
      </>
    );
  }
}
