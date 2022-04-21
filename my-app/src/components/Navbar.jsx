import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./navbar.css";

const Navbar = () => {
  return (
    <section id="navbarBlock">
      <article>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
