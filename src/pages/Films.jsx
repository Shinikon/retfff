import React, { useState, useRef, useEffect } from "react";

import FilmDesc from "../components/FilmDesc";

import search from "../assets/img/search.svg";
import down from "../assets/img/down.svg";

function Films() {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search">
      <div className="search__bar">
        <input
          type="text"
          placeholder="SEARCH FILMS..."
          value={searchText}
          onChange={handleSearchInputChange}
          className="search__input"
        />

        <div className="search__bar_lupa">
          <img src={search} alt="" />
        </div>
      </div>

      <FilmDesc />
    </div>
  );
}

export default Films;
