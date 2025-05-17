import React from "react";

import { Link } from "react-router-dom";

import film from "../assets/img/film.svg";
import arrow from "../assets/img/arrow.svg";

import FilmList from "../components/FilmList";

function Film2() {
  return (
    <div className="film2">
      <div className="film2__watch">
        <img src={film} alt="" />
      </div>

      <div className="film__desc">
        <h3>PLOT</h3>
        <h3>
          Based on the world behind League of Legends, Arcane dives into the
          delicate balance between the rich city of Piltover and the seedy
          underbelly of Zaun. Known across Runeterra as the “city of progress,”
          many of the most brilliant minds call these cities home. But the
          creation of hextech, a way for any person to control magical energy,
          threatens that balance. While Arcane holds the backstories of League
          of Legends champions, the series is designed to stand on its own as a
          complex world filled with moral decisions, breathtaking animation, and
          suspenseful storytelling. Players will see some familiar faces in
          Arcane, like Jinx, Vi, Jayce, and Caitlyn, and learn about the events
          that made them into the iconic champions we know today as we push
          their stories forward. Players will also be introduced to some new
          faces too, like Vander and Silco, who are both citizens of Zaun and
          play critical roles in shaping the evolving world.
        </h3>
      </div>

      <div className="films">
        <h3 className="title">season 1</h3>
        <FilmList />
        <h3 className="title">season 2</h3>
        <FilmList />
      </div>

      <Link to="/">
        <button>
          <div className="film2__back">
            {/* <div> */}
            <img src={arrow} alt="" />
            {/* </div> */}
            <h3>Go Back</h3>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default Film2;
