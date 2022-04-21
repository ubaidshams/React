import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Authmenu extends Component {
  handleClick = e => {
    console.log(this.props);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={this.handleClick}>submit</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Authmenu);
