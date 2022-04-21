import React, { useState } from "react";

const Switch = () => {
  const [auth, setAuth] = useState(false);

  {
    switch (auth) {
      case true:
        return (
          <>
            <button>LogIn</button>
          </>
        );
        break;
      case false:
        return (
          <>
            <button>Register</button>
          </>
        );
      default:
        break;
    }
  }
};

export default Switch;
