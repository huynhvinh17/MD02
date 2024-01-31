import React, { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  constructor() {
    super();
  }
  render() {
    //Hứng dữ liệu về
    //Destructoring cực kì quan trọng
    let { Products } = this.props;

    //let data = this.props;
    console.log("11111", Products);
    return (
      <>
        <div>List product</div>
        {/*         <Product data={Products}></Product>
         */}

        {Products.map((item, index) => {
          return <Products key={index} data={item}></Products>;
        })}
      </>
    );
  }
}
