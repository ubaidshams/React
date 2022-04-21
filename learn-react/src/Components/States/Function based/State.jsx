import React, { useState } from "react";

const State = ({ props }) => {
  let myStyle = {
    color: "red",
  };
  let [emp, setEmp] = useState({
    ename: "Ubaid",
    eid: 123,
    desg: "Web Dev",
  });
  let { ename, desg, eid } = emp;

  setTimeout(() => {
    setEmp({
      ename: "Wahid",
      desg: "Team Lead",
      eid: 323,
    });
  }, 3000);
  return (
    <div style={myStyle}>
      <h1>{ename}</h1>
      <p>{eid}</p>
      <p>{desg}</p>
    </div>
  );
};

export default State;
