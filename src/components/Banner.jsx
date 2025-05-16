import React from "react";
// import { Link } from "react-router-dom";
import banner from "../assets/img/banner.svg";
import trailer from "../assets/img/trailerArc.svg";
import teaser from "../assets/img/teaserArc.svg";

import "../scss/components/_banner.scss";

function Header() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="banner__title">
        <h1>ARCANE</h1>
        <h2>League of Legends</h2>
      </div>
      <div className="banner__bottom">
        <div className="banner__bottom_desc">
          <h3 className="banner__bottom_desc_title">PLOT</h3>
          <h3  className="banner__bottom_desc_text">
            Arcane dives into the delicate balance between the rich, utopian
            city of  Piltover and the seedy, oppressed underground of  Zaun.
            Known across Runeterra as the "city of progress," many of the most
            brilliant minds call these cities home. Read More
          </h3>

          <button>
            <h3>Learn More</h3>
          </button>
          <button>
            <h3>Add to Watch List</h3>
          </button>
        </div>

        <div className="banner__bottom_side">
          <h3>WATCH TEASER AND TRAILER</h3>
          <img src={teaser} alt="" />
          <img src={trailer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
