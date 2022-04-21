import React, { useState } from "react";
import JSON from "./Github.json";
import Users2 from "./Users2";

const App6 = () => {
  let [state, setState] = useState(JSON);
  return (
    <>
      <table>
        <thead>
          <th>Photo</th>
          <th>Name</th>
          <th>Repo</th>
          <th>View</th>
        </thead>
        <tbody>
          {state.map(user => {
            return <Users2 {...user} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default App6;
