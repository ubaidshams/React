// // State using class constructor

// import React, { Component } from "react";

// class App4 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "ubaid",
//       skills: ["html", "css", "Javascript", "React"],
//     };
//   }
//   render() {
//     console.log(this);
//     return <div>App</div>;
//   }
// }

// export default App4;

// State using class without constructor

import React, { Component } from "react";

export default class App4 extends Component {
  state = {
    username: "Ubaid",
    salary: 20000,
    company: "TestYantra",
  };
  changeSal = () => {
    this.setState({ salary: 50000 });
  };
  render() {
    return (
      <div>
        <h2>{this.state.username}</h2>
        <p>{this.state.salary}</p>
        <p>{this.state.company}</p>
        <button onClick={this.changeSal}>Change salary</button>
      </div>
    );
  }
}
