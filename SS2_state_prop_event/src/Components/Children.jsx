import React, { Component } from "react";

export default class Children extends Component {
  constructor() {
    super();
    this.state = {
      age: 20,
    };
  }
  render() {
    const { name, age } = this.props;
    age(this.state.age);
    console.log("children");
    return (
      <>
        <div>Children11 nhận dữ liệu từ App : {name}</div>;
      </>
    );
  }
}
