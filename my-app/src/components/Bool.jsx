import React from "react";

const Bool = props => {
  if (props.isBool == true) {
    return (
      <div>
        <h1>welcome to react</h1>
        <p>i am true</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You're not welcome to React </h1>
        <p>I am false</p>
      </div>
    );
  }
};

export default Bool;
