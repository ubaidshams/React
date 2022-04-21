import React, { Component } from "react";

export default class Unmounting extends Component {
  state = {
    show: true,
  };
  handleChange = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        {this.state.show ? <Employee /> : null}
        <button onClick={this.handleChange}>Fire Employee</button>
      </div>
    );
  }
}

// import React, { Component } from "react";
class Employee extends Component {
    componentWillUnmount() {
        window.confirm("Are you sure?")
    }
  render() {
    return (
      <div>
        <h1>I am an Employee Component</h1>
      </div>
    );
  }
}

// export default Unmounting;
