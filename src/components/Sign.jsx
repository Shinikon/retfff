import React from "react";
import "../scss/components/_sign.scss";

const plans = [
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
  { priceEndDate: "xx/xx/xx", basicPrice: "EUR7.99", premiumPrice: "EUR11.99" },
];

function Sign() {
  return (
    <div className="sign">
      <div className="sign__top">
        <h3>Choose one plan and watch everything on retflix</h3>
        <div className="sign__top_btns">
          <button>
            <h3>Sign In</h3>
          </button>
          <h3>
            OR
          </h3>
          <button>
            <h3>Sign Up</h3>
          </button>
        </div>
      </div>

      <div className="sign__bottom">
        <div className="sign__bottom_sub">
          <h3>BASIC</h3>
          <h3>PREMIUM</h3>
        </div>

        {plans.map((plan, index) => (
          <div
            className={`sign__bottom_row ${
              index % 2 === 0 ? "even-row" : "odd-row"
            }`}
            key={index}
          >
            <h3>Price after free month ends on {plan.priceEndDate}</h3>
            <div>
              <h3>{plan.basicPrice}</h3>
              <h3>{plan.premiumPrice}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sign;
