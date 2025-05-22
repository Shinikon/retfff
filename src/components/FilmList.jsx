import React from "react";
import { Link } from "react-router-dom";

import "../scss/components/_filmList.scss";

import squidGame from "../assets/img/squidGame.svg";
import euphoria from "../assets/img/euphoria.svg";
import arcane from "../assets/img/arcane.svg";
import witcher from "../assets/img/witcher.svg";

function FilmList() {
  return (
    <div className="list">
      <Link to="/film">
        <img src={squidGame} alt="squidGame" />
      </Link>
      <Link to="/film">
        <img src={euphoria} alt="euphoria" />
      </Link>
      <Link to="/film">
        <img src={arcane} alt="arcane" />
      </Link>
      <Link to="/film">
        <img src={witcher} alt="witcher" />
      </Link>
    </div>
  );
}

export default FilmList;
