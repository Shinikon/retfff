import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import user from "../assets/img/user.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/">
      <img src={logo} alt="" /></Link>
      <Link to="/search">
        <h3>SEARCH</h3>
      </Link>
      <Link to="/aboutUs">
        <h3>ABOUT US</h3>
      </Link>
      <Link to="/blog">
        <h3>BLOG</h3>
      </Link>
      <img src={user} alt="" />
    </div>
  );
}

export default Header;
