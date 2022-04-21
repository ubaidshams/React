import React, { Component } from "react";

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Ubaid",
    };
  }
  //   static getDerivedStateFromProps(props) {
  //     return {
  //       username: props.mytrainer,
  //     };
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ username: "Shashi" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    );
  }
}
