import React from "react";
import "../scss/components/_sign.scss";

import ModalTrigger from "../components/ModalTrigger";

import signIn from "../assets/img/signIn.svg";
import signUp from "../assets/img/signUp.svg";

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
          <ModalTrigger
            children={
              <button>
                <h3>Sign In</h3>
              </button>
            }
            modalContent={
              <div className="modal-content-wrapper">
                <div className="modal-text-content">
                  <img src={signIn} alt="Архитектура" />
                </div>
              </div>
            }
          />

          <h3>OR</h3>
          <ModalTrigger
            children={
              <button>
                <h3>Sign In</h3>
              </button>
            }
            modalContent={
              <div className="modal-content-wrapper">
                <div className="modal-text-content">
                  <img src={signUp} alt="Архитектура" />
                </div>
              </div>
            }
          />
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
