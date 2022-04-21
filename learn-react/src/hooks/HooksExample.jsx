import React, { useEffect, useState } from "react";

const HooksExample = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `useEffect ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default HooksExample;
