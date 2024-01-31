import "./App.css";
import Products from "./Components/Products";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      Products: [
        {
          name: "iphone15",
          id: 2,
        },

        {
          name: "iphone16",
          id: 3,
        },
      ],
      isActive: false,
      title: "Học lập trình",
    };
  }

  render() {
    const handleClick = () => {
      this.setState({
        title: "Học lập trình JavaScript",
      });
    };
    
    const name1 = "hoa";
    const age = 20;
    const students = ["van", "Minh", "Huyen", "anh", "trang"];
    const getDataAdress=(address)=>{
      console.log("Địa chỉ product gửi lên app",address);
    }
    return (
      <>
        <h1>Tên của bạn là: {name1}</h1>
        <h1>Tuổi của bạn là: {age}</h1>
        <ul>
          {students.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <p>title: {this.state.title}</p>
        <button onClick={handleClick}>Change_Name</button>
        <Products address={getDataAdress} Products={this.state.Products}> </Products>
        
      </>
    );
  }
}
