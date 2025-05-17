import React from "react";

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
    </div>
  );
}

export default Search;
