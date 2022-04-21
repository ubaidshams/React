import React, { useState } from "react";

const Logical = () => {
  let [messages, setMessages] = useState([
    "acbba",
    "dkflk",
    "ksdhkjsh",
    "ghiewuh",
  ]);

  let PrintMessage = () => {
    return (
      <>
        <p>
          Notifications :{" "}
          <strong
            style={{
              color: "teal",
              background: "#121212",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {messages.length}
          </strong>
        </p>
      </>
    );
  };
  return <div>{messages.length > 0 && <PrintMessage />}</div>;
};

export default Logical;
