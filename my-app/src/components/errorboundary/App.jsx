import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroname="Iron Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Thor" />
      </ErrorBoundary>
    </div>
  );
};

export default App;
