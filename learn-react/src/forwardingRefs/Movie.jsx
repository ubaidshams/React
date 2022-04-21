import React, { useRef, useState } from "react";
import Player from "./Player";

const Movie = () => {
  let movieRef = useRef();
  let [play, setPlay] = useState(true);
  let PlayorPause = () => {
    setPlay(!play);
    if (play === true) movieRef.current.play();
    else movieRef.current.pause();
  };
  return (
    <div>
      <Player ref={movieRef} handlePlay={PlayorPause} />
    </div>
  );
};

export default Movie;
