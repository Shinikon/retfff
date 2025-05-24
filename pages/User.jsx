import React from "react";

import Sign from "../components/Sign";
import FilmDesc from "../components/FilmDesc";

import userpfp from "../assets/img/userpfp.svg";
import change from "../assets/img/change.svg";
import infochange from "../assets/img/infochange.svg";

function User() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="user">
      <div className="user__info">
        <div>
          <img src={userpfp} alt="" />
        </div>
        <span
          onClick={() => setOpen(!open)}
          className={`popup ${open ? "active" : ""}`}
        >
          <h3>@VanTae</h3>
          <img src={change} alt="" />
        </span>
        {open && (
          <div>
            <img src={infochange} alt="" />
          </div>
        )}

        <h3>vantae.95@gmail.com</h3>
      </div>

      <Sign />
      <h4 className="title">Your Favourite</h4>
      <FilmDesc />
      <h4 className="title">You've watched</h4>
      <FilmDesc />
    </div>
  );
}

export default User;
