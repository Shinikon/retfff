import React from "react";

import squidGame from "../assets/img/squidGame.svg";

function FilmDesc() {
  return (
    <div className="filmDesc">
      <img src={squidGame} alt="squidGame" />
      <h3>Squid Game</h3>
      <div>
        <h3>17/09/21</h3>
        <h3>Anti-utopian Survival Thriller</h3>
        <h3>IMBd 8.7</h3>
      </div>
      <div>
        <h3>
          The series tells the story of a group of people, including series
          protagonist Seong Gi-hun, who risk their lives in a mysterious
          survival game called the Squid Games for a ₩45.6 billion prize. It was
          released worldwide on September 17, 2021, on the streaming service
          Netflix. The title of the series draws from a similarly named Korean
          children's game.
        </h3>
      </div>
    </div>
  );
}

export default FilmDesc;
