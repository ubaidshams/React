import React, { useState, useEffect, useRef } from "react";

const HooksExapmple2 = () => {
  let [width, setWtidth] = useState(0);
  let textRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", e => {
      setWtidth(window.innerWidth);
      if (window.innerWidth <= 500) {
        textRef.current.style.background = "red";
      } else if (window.innerWidth > 500 && width <= 700) {
        textRef.current.style.background = "green";
      } else if (window.innerWidth > 700 && width <= 900) {
        textRef.current.style.background = "blue";
      } else {
        textRef.current.style.background = "black";
        textRef.current.style.color = "#efeffe";
      }
      console.log("Rendered how many times");
    });
    return () => {
      window.removeEventListener("resize", e => {
        setWtidth(window.innerWidth);
      });
    };
  }, [width]);
  return (
    <div>
      <h1 ref={textRef}>{width}</h1>
    </div>
  );
};

export default HooksExapmple2;
