import React, { Component } from "react";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "Ubaid",
      company: "Test Yantra",
    };
    console.log(this.state);
  }
  ckickME = () => {
    console.log("Hello");
    this, this.setState({ username: "Wahid" });
  };
  render() {
    console.log("render");
    return <div></div>;
  }
}

export default States;
