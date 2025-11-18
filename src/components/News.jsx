import React from "react";

import news1 from "../assets/img/news1.jpg";
import news2 from "../assets/img/news2.jpg";
import news3 from "../assets/img/news3.jpg";
import news4 from "../assets/img/news4.jpg";
import news5 from "../assets/img/news5.jpg";
import news6 from "../assets/img/news6.jpg";
import news7 from "../assets/img/news7.jpg";
import news8 from "../assets/img/news8.jpg";
import news9 from "../assets/img/news9.jpg";

import "../scss/components/_news.scss";

const news = [
  {
    // desc
    text: "'Flight Out': 'Fast Bullets' and 'John Wick' on the same plane",
    img: news1,
  },
  {
    // desc
    text: "World Industry Digest: Trump Terrorizes Hollywood, 'Sinners' Rewrites Rules, Illuminos Is Doing Well",
    img: news2,
  },
  {
    // desc
    text: "'Eddington': Joaquin Phoenix Shoots America",
    img: news3,
  },
  {
    // desc
    text: "All episodes of the fourth season of 'Love. Death. Robots' - from stupid to best",
    img: news4,
  },
  {
    // desc
    text: "Andor's Finale: What Went Wrong",
    img: news5,
  },
  {
    // desc
    text: "The Most Hated Disney Movie? The Truth and Falsehood of the Snow White Controversy",
    img: news6,
  },
  {
    // desc
    text: "'Leave Once' opened the 78th Cannes Film Festival. We tell you what kind of film it is",
    img: news7,
  },
  {
    // desc
    text: "The third season of 'The Squid Game' will be released in June. What is known about the finale of the most popular Retflix project?",
    img: news8,
  },
  {
    // desc
    text: "'Lust for Glory': An unsettling shelf film starring Jonathan Majors as a sullen loser jock",
    img: news9,
  },
];

function News() {
  return (
    <div className="news">
      {news.map((neww, index) => (
        <div
          key={index}
          className="news__block"
          style={{
            backgroundImage: `url(${neww.img})`,
          }}
        >
          <h3>{neww.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default News;
