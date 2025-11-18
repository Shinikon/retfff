import React from "react";

import "../scss/components/_filmList.scss";

import squidGame from "../assets/img/squidGame.svg";
import euphoria from "../assets/img/euphoria.svg";
import arcane from "../assets/img/arcane.svg";
import witcher from "../assets/img/witcher.svg";

function FilmList() {
  return (
    <div className="list">
      <img src={squidGame} alt="squidGame" />
      <img src={euphoria} alt="euphoria" />
      <img src={arcane} alt="arcane" />
      <img src={witcher} alt="witcher" />
    </div>
  );
}

export default FilmList;
