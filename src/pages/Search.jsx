import React from "react";

import FilmDesc from "../components/FilmDesc";

import search from "../assets/img/search.svg";
import down from "../assets/img/down.svg";

function Search() {
  return (
    <div className="search">
      <div className="search__bar">
        <h3>SEARCH...</h3>

        <div className="search__bar_sort">
          <p>Author</p>
          <div>
            <img src={down} alt="" />
          </div>
          <p>Category</p>
          <div>
            <img src={down} alt="" />
          </div>

          <p>Actor</p>
          <div>
            <img src={down} alt="" />
          </div>
        </div>

        <div className="search__bar_lupa">
          <img src={search} alt="" />
        </div>
      </div>

      <FilmDesc />
    </div>
  );
}

export default Search;

/* const [open, setOpen] = React.useState(false); */
/* 
<div
            onClick={() => setOpen(!open)}
            className={`popup ${open ? "active" : ""}`}
          >
            <h3>Select size</h3>
            <img src={size} alt="Select Size" />
          </div>
          {open && (
            <div className="size-options">
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
          )} */
