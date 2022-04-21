import React, { useState } from "react";

const Ternary = () => {
  let [login, setLogin] = useState(false);
  let changeButton = () => {
    setLogin(!login);

    login
      ? (document.getElementById("change").textContent = "Login")
      : (document.getElementById("change").textContent = "Logout");
  };
  return (
    <div>
      <button id="change" onClick={changeButton}>
        Login
      </button>
    </div>
  );
};

export default Ternary;
