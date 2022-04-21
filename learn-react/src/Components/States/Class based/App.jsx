import React, { Component } from "react";
import State from "./State";

export default class App extends Component {
  state = {
    username: "Ubaid",
  };
  render() {
    return (
      <div>
            <State uname={ this.state.username}/>
      </div>
    );
  }
}
