import React, { Component } from "react";

export default class Product extends Component {
  constructor() {
    super();
  }
  render() {
    let { data } = this.props;
    console.log("22222", data);
    return (
      <>
        <div>{data.name}</div>
        console.log("data", data.name);
      </>
    );
  }
}
