import React, { useState, useEffect } from "react";

import Chat from "../components/Chat";
import FilmList from "../components/FilmList";
import Accordion from "../components/Accordion";

import "../scss/components/_filmList.scss";

function Support() {
  const [accordionData, setAccordionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://6753f0e0f3754fcea7bcd4f9.mockapi.io/111`)
      .then((res) => res.json())
      .then((arr) => {
        setAccordionData(arr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, []);

  const firstSixItems = accordionData.slice(0, 6);
  const remainingItems = accordionData.slice(6);

  return (
    <div className="support">
      <Chat />
      <h4 className="title">New releases and expected projects</h4>
      <FilmList />
      <h4 className="title">FAQ</h4>
      <div className="accordion">
        <h3 className="new-section-title">Services</h3>

        {firstSixItems.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
        <hr />
        <h3 className="new-section-title">Instructions for use</h3>
        {remainingItems.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Support;
