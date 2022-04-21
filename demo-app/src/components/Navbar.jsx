import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = props => {
  return (
    <section id="navbarBlock">
      <article>
        <Logo />

        <Menu username={props.username} />
      </article>
    </section>
  );
};

export default Navbar;
