import React, { forwardRef } from "react";
// import Mov from "./Wish_Dragon.mp4";

const Player = forwardRef((props, ref) => {
  return (
    <div>
      <video src="" ref={ref} onClick={props.handlePlay} controls></video>
    </div>
  );
});

export default Player;
