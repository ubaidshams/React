import React, { useRef } from "react";
import Input from "./Input";

const Form = () => {
  let inputRef = useRef();
  let handleClick = () => {
    inputRef.current.placeholder = "Please enter some text";
    inputRef.current.style.background = "#efefef";
  };
  return (
    <div>
      <Input handleClick={handleClick} ref={inputRef} />
    </div>
  );
};

export default Form;
