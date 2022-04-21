import React from "react";

const Hero = ({ heroname }) => {
  if (heroname === "Joker") {
    throw new Error(`You're not a hero`);
  }
  return (
    <div>
      <h1>Hero: {heroname}</h1>
    </div>
  );
};

export default Hero;
