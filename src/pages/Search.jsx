import React, { useState, useRef, useEffect } from "react";

import FilmDesc from "../components/FilmDesc";

import search from "../assets/img/search.svg";
import down from "../assets/img/down.svg";

function Search() {
  const [openAuthor, setOpenAuthor] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [openActor, setOpenActor] = useState(false);
  const [searchText, setSearchText] = useState("");

  const authorRef = useRef(null);
  const genreRef = useRef(null);
  const actorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authorRef.current && !authorRef.current.contains(event.target)) {
        setOpenAuthor(false);
      }
      if (genreRef.current && !genreRef.current.contains(event.target)) {
        setOpenGenre(false);
      }
      if (actorRef.current && !actorRef.current.contains(event.target)) {
        setOpenActor(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authorRef, genreRef, actorRef]);

  const handleAuthorClick = () => {
    setOpenAuthor(!openAuthor);
    setOpenGenre(false);
    setOpenActor(false);
  };

  const handleGenreClick = () => {
    setOpenGenre(!openGenre);
    setOpenAuthor(false);
    setOpenActor(false);
  };

  const handleActorClick = () => {
    setOpenActor(!openActor);
    setOpenAuthor(false);
    setOpenGenre(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search">
      <div className="search__bar">
        <input
          type="text"
          placeholder="SEARCH..."
          value={searchText}
          onChange={handleSearchInputChange}
          className="search__input"
        />

        <div className="search__bar_sort">
          <div className="popup-wrapper">
            <div
              onClick={handleAuthorClick}
              className={`popup ${openAuthor ? "active" : ""}`}
            >
              <p>Author</p>
            </div>
            {openAuthor && (
              <div className="popup__open" ref={authorRef}>
                <ul>
                  <li>Author</li>
                  <li>Author</li>
                  <li>Author</li>
                  <li>Author</li>
                  <li>Author</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <img src={down} alt="" />
          </div>
          <div className="popup-wrapper">
            <div
              onClick={handleGenreClick}
              className={`popup ${openGenre ? "active" : ""}`}
            >
              <p>Genre</p>
            </div>
            {openGenre && (
              <div className="popup__open" ref={genreRef}>
                <ul>
                  <li>Genre</li>
                  <li>Genre</li>
                  <li>Genre</li>
                  <li>Genre</li>
                  <li>Genre</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <img src={down} alt="" />
          </div>

          <div className="popup-wrapper">
            <div
              onClick={handleActorClick}
              className={`popup ${openActor ? "active" : ""}`}
            >
              <p>Actor</p>
            </div>
            {openActor && (
              <div className="popup__open" ref={actorRef}>
                <ul>
                  <li>Actor</li>
                  <li>Actor</li>
                  <li>Actor</li>
                  <li>Actor</li>
                  <li>Actor</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <img src={down} alt="" />
          </div>
        </div>

        <div className="search__bar_lupa">
          <img src={search} alt="" />
        </div>
      </div>

      <FilmDesc />
    </div>
  );
}

export default Search;
