import React, { useState } from "react";

const Hooks = () => {
  let [username, setUsername] = useState("Ubaid");
  console.log(username);
  return <div>app {username}</div>;
};

export default Hooks;
