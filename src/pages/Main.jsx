import React from "react";
import Banner from "../components/Banner";
import FilmList from "../components/FilmList";
import Sign from "../components/Sign";

import "../scss/app.scss";

function Main() {
  return (
    <div>
      <Banner />
      <div className="films">
        <h3 className="title">Popular on Retflix</h3>
        <FilmList />
        <h3 className="title">Popular on Retflix</h3>
        <FilmList />
        <h3 className="title">Popular on Retflix</h3>
        <FilmList />
        <h3 className="title">Popular on Retflix</h3>
        <FilmList />
      </div>

      <hr className="hr-main" />

      <Sign />
    </div>
  );
}

export default Main;
