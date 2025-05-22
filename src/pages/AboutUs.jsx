import React from "react";

import aboutUs from "../assets/img/aboutUs.svg";

import FilmList from "../components/FilmList";

function AboutUs() {
  return (
    <div className="about">
      <div className="about__banner">
        <h2>
          retflix is ​​more than just a streaming service. it is a community of
          movie and tv show lovers where everyone can find something for
          themselves and share their experiences with others.
        </h2>
      </div>
      <div className="about__info">
        <div className="about__info_text">
          <h3>
            Retflix is ​​a streaming platform that offers a wide selection of
            movies, TV series, documentaries and more. We strive to provide our
            users with an unforgettable viewing experience by offering a variety
            of content that will satisfy all tastes. On Retflix, you will find
            both popular new releases and classic works of cinematic art. Our
            library is constantly updated to ensure that you always have fresh
            and interesting content to enjoy. We also offer personalized
            recommendations to help you find exactly what you will love.
          </h3>

          <ul>
            What you'll find on Retflix:
            <li>
              <b>A huge library of content:</b> From Hollywood blockbusters to
              gripping series, documentaries to anime, we have something for
              everyone.
            </li>
            <li>
              <b>Personalized recommendations:</b> Our intelligent
              recommendation engine analyzes your preferences and suggests
              content we know you'll love.
            </li>
            <li>
              <b> User-friendly interface:</b> Enjoy watching on any device,
              from TV to smartphone, with our intuitive and easy-to-use
              interface.
            </li>
            <li>
              <b> Retflix original content:</b> Discover exclusive
              Retflix-produced movies and series that you won't find anywhere
              else.
            </li>
            <li>
              <b> Watch anywhere, anytime:</b> Download content for offline
              viewing and enjoy your favorite movies and series even without an
              internet connection.
            </li>
          </ul>
        </div>

        <img src={aboutUs} alt="" />
      </div>

      <div className="films">
        <h3 className="title">Popular on Retflix</h3>
        <FilmList />
        <h3 className="title">Watch now</h3>
        <FilmList />
      </div>

      <div className="about__contacts"></div>
    </div>
  );
}

export default AboutUs;
