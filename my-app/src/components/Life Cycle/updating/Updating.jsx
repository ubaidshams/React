import React, { Component } from "react";

export default class Updating extends Component {
  state = {
    food: "Chciken Biryani",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ food: "Pizza" });
    }, 3000);
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log(`Previous props:${prevProps}`);
    console.log(`Previous state:${prevStates}`);
    document.getElementById('prev_state').innerHTML=`Previous value was ${prevStates.food}`
  }

  componentDidUpdate(prevStates, snapshot) {
    // console.log("Cdu",prevStates);
    console.log("snapshot", snapshot);
    // console.log("Cdu", prevStates);

    document.getElementById('curr_state').innerHTML=`Previous value was ${this.state.food}`
  }
  render() {
    return (
      <div>
        <h1>Favourite Food:{this.state.food}</h1>
        <h2 id="prev_state"></h2>
        <h2 id="curr_state"></h2>
      </div>
    );
  }
}
