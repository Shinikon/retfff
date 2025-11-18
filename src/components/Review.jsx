import React from "react";

import user from "../assets/img/reviewPfp.svg";

const reviews = [
  {
    name: "Ivanov Ivan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ivanov Ivan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ivanov Ivan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ivanov Ivan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Review = ({ name, text }) => (
  <div className="review">
    <div className="avatar">
      <img src={user} alt="" />
      <h3>{name}</h3>
    </div>
    <p>{text}</p>
  </div>
);

const ReviewsBlock = () => (
  <div className="reviews-block">
    {reviews.map((review, index) => (
      <Review key={index} name={review.name} text={review.text} />
    ))}
  </div>
);

export default ReviewsBlock;
