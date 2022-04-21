import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let btn = useRef();
  let [state, setState] = useState(true);
  //   let validateAuth = () => {
  //     if (state === true) {
  //       history.push("/");
  //     }
  //     };
  let validateAuth = () => {
    if (location.pathname === "/login") {
      btn.current.classList.add("login");
    } else {
      btn.current.classList.remove("login");
    }
  };
  return (
    <div>
      <h2>Please login to continue</h2>
      <button onClick={validateAuth} ref={btn}>
        Login
      </button>
    </div>
  );
};

export default Login;
