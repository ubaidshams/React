import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={props.handleClick}>click me</button>
    </div>
  );
});

export default Input;
