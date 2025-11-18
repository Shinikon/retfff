import React from "react";

import off from "../assets/img/offer.svg";

import "../scss/components/_offersList.scss";

const offers = [
  {
    // desc
    text: "Flash Sale!",
    img: off,
  },
  {
    // desc
    text: "Limited Time Offer!",
    img: off,
  },
  {
    // desc
    text: "Big Savings Inside!",
    img: off,
  },
  {
    // desc
    text: "Deal of the Day!",
    img: off,
  },
  {
    // desc
    text: "Price Drop!",
    img: off,
  },
  {
    // desc
    text: "Hot Discount!",
    img: off,
  },
  {
    // desc
    text: "Extra 20% Off!",
    img: off,
  },
  {
    // desc
    text: "Sale Ends Soon!",
    img: off,
  },
  {
    // desc
    text: "Don’t Miss Out!",
    img: off,
  },
  {
    // desc
    text: "Clearance Event!",
    img: off,
  },
];

function OffersList() {
  return (
    <div className="listt">
      {offers.map((offer) => (
        <div className="listt__block">
          <img src={offer.img} />
          <h3>{offer.text}</h3>
          <button className="listt__block_btn">
            <h3>buy now</h3>
          </button>
        </div>
      ))}
    </div>
  );
}

export default OffersList;
