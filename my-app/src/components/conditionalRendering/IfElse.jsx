import React, { useState } from "react";

const IfElse = () => {
  let [theme, setTheme] = useState(false);
  let changeTheme = () => {
    setTheme(!theme);
    console.log(theme);

    if (theme === true) {
      document.body.style.background = "orange";
      document.getElementById("themeBtn").innerHTML = "Orange";
    } else {
        document.body.style.background = "skyblue";
      document.getElementById("themeBtn").innerHTML = "Sky Blue";}

    }
  
  return (
    <div>
      <button id="themeBtn" onClick={changeTheme}>
        Skyblue
      </button>
    </div>
  );
  }

export default IfElse;
