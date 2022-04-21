import React, { useEffect, useRef, useState } from "react";
import "./grid.css";

const Grid = () => {
  let [width, setWidth] = useState();
  let artRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", e => {
      setWidth(window.innerWidth);
      if (window.innerWidth<=500) {
        
      }
    });
  }, []);
  return (
    <section className="container">
      <article ref={artRef}>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
        <div className="card">
          <h3>Name</h3>
          <p>company</p>
        </div>
      </article>
    </section>
  );
};

export default Grid;
