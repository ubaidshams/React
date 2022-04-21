import React from "react";

const Menu = props => {
  return (
    <div className="menuBlock">
      <ul>
        <li>
          <a href="" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">SignUp</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
