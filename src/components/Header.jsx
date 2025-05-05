import React from "react";

import logo from "../assets/img/logo.svg";
import user from "../assets/img/user.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <Link to="/search">
        <h3>SEARCH</h3>
      </Link>
      <Link to="/search">
        <h3>SEARCH</h3>
      </Link>{" "}
      <Link to="/search">
        <h3>SEARCH</h3>
      </Link>
      <img src={user} alt="" />
    </div>
  );
}

export default Header;
