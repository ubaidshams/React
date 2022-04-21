import React, { Component } from "react";
import Marvel from "./components/Marvel";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar username="Ubaid" />
      <Marvel />
    </>
  );
};

export default App;
