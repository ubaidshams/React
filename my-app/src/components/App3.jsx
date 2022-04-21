// Passing json data as prop

import React from "react";
import Users from "./Users";
import JSON from "../data.json";

const App3 = () => {
  return (
    <div>
      <Users json={JSON} />
    </div>
  );
};

export default App3;
