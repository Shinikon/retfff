import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import user from "../assets/img/user.svg";

import "../scss/components/_header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="header__nav">
        <Link to="/">
          <h3>MAIN</h3>
        </Link>
        <Link to="/series">
          <h3>SERIES</h3>
        </Link>
        <Link to="/films">
          <h3>FILMS</h3>
        </Link>
        {/*         <Link to="/support">
          <h3>SUPPORT</h3>
        </Link> */}
        {/*         <Link to="/offers">
          <h3>OFFERS</h3>
        </Link> */}
      </div>

      <div className="header__user">
        <Link to="/user">
          <img src={user} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
