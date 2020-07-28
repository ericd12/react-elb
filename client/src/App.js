import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {},
    };
    this.getFlower();
  }

  getFlower() {
    axios
      .get("/flower")
      .then((response) => {
        this.setState({
          flower: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
    // fetch('/flower')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       flower: data
    //     });
    //   });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.flower.name}</h1>
        <p>{this.state.flower.color}</p>
      </div>
    );
  }
}

export default App;
