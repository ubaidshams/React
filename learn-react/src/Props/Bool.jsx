// Passing boolean value as props

import React from "react";

const Bool = ({ isLoggedIn, uname }) => {
  if (isLoggedIn === true) {
    return <p>Logout</p>;
  } else
    return (
      <>
        <p>Please Login</p>
        <p>Register</p>
        <p>{uname}</p>
      </>
    );
};

export default Bool;
