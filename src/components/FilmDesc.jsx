import React from "react";

import squidGame from "../assets/img/squidGame.svg";
import strangerThings from "../assets/img/euphoria.svg";
import theCrown from "../assets/img/witcher.svg";
import moneyHeist from "../assets/img/arcane.svg";

import "../scss/components/_filmDesc.scss";

const films = [
  {
    title: "Squid Game",
    date: "17/09/21",
    genre: "Anti-utopian Survival Thriller",
    rating: "IMBd 8.7",
    description:
      "The series tells the story of a group of people, including series protagonist Seong Gi-hun, who risk their lives in a mysterious survival game called the Squid Games for a ₩45.6 billion prize. It was released worldwide on September 17, 2021, on the streaming service Netflix. The title of the series draws from a similarly named Korean children's game.",
    img: squidGame,
  },
  {
    title: "Stranger Things",
    date: "15/07/16",
    genre: "Science Fiction Horror",
    rating: "IMBd 8.7",
    description:
      "A group of young friends in a small town uncover a series of supernatural mysteries and government conspiracies while searching for their missing friend.",
    img: strangerThings,
  },
  {
    title: "The Crown",
    date: "04/11/16",
    genre: "Historical Drama",
    rating: "IMBd 8.7",
    description:
      "The Crown chronicles the reign of Queen Elizabeth II and the events that shaped the second half of the 20th century.",
    img: theCrown,
  },
  {
    title: "Money Heist",
    date: "02/05/17",
    genre: "Heist Crime Drama",
    rating: "IMBd 8.3",
    description:
      "A criminal mastermind who goes by 'The Professor' plans the biggest heist in recorded history, aiming to print billions of euros in the Royal Mint of Spain.",
    img: moneyHeist,
  },
];

function FilmDesc() {
  return (
    <div className="filmDesc">
      {films.map((film, index) => (
        <div key={index} className="filmDesc__item">
          <img src={film.img} alt={film.title} />
          <div className="filmDesc__item_info">
            <h3>{film.title}</h3>
            <div className="filmDesc__item_info_top">
              <h3>{film.date}</h3>
              <h3>{film.genre}</h3>
              <h3>{film.rating}</h3>
            </div>
            <div className="filmDesc__item_info_text">
              <h3>{film.description}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmDesc;
