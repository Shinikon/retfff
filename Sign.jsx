import React, { useState } from "react";
import "../scss/components/_sign.scss";
import ModalTrigger from "../components/ModalTrigger";

const API_BASE_URL = "http://localhost:8000"; // Укажите ваш PHP-сервер

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
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  // Обработчик входа
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();
      setLoginMessage(data.message);
      if (data.success) {
        // Можно закрыть модалку или перезагрузить страницу
        window.location.reload();
      }
    } catch (err) {
      setLoginMessage("Network error. Please try again.");
    }
  };

  // Обработчик регистрации
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value; // добавляем имя
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      setRegisterMessage(data.message);
      if (data.success) {
        alert("Registration successful! You can now sign in.");
      }
    } catch (err) {
      setRegisterMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="sign">
      <div className="sign__top">
        <h3>Choose one plan and watch everything on illuminos</h3>
        <div className="sign__top_btns">
          {/* Modal: Sign In */}
          <ModalTrigger
            children={
              <button>
                <h3>Sign In</h3>
              </button>
            }
            modalContent={
              <div className="modal-content-wrapper">
                <div className="modal-text-content">
                  <h2>
                    Sign In To <span>Illuminos</span>
                  </h2>
                  <form onSubmit={handleLogin}>
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="PASSWORD"
                      required
                    />
                    <button type="submit">SIGN IN</button>
                    {loginMessage && (
                      <p
                        style={{
                          color: loginMessage.toLowerCase().includes("success")
                            ? "green"
                            : "red",
                          fontSize: "0.9em",
                          marginTop: "10px",
                        }}
                      >
                        {loginMessage}
                      </p>
                    )}
                  </form>
                  <div className="copy">
                    <p>Privacy Policy</p>
                    <p>Copyright 2025</p>
                  </div>
                </div>
              </div>
            }
          />

          <h3>OR</h3>

          {/* Modal: Sign Up */}
          <ModalTrigger
            children={
              <button>
                <h3>Sign Up</h3>
              </button>
            }
            modalContent={
              <div className="modal-content-wrapper">
                <div className="modal-text-content">
                  <h2>
                    Create Account on <span>Illuminos</span>
                  </h2>
                  <form onSubmit={handleRegister}>
                    <input
                      type="name"
                      name="name"
                      placeholder="FULL NAME"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="PASSWORD"
                      required
                    />
                    <button type="submit">SIGN UP</button>
                    {registerMessage && (
                      <p
                        style={{
                          color: registerMessage
                            .toLowerCase()
                            .includes("success")
                            ? "green"
                            : "red",
                          fontSize: "0.9em",
                          marginTop: "10px",
                        }}
                      >
                        {registerMessage}
                      </p>
                    )}
                  </form>
                  <div className="copy">
                    <p>Privacy Policy</p>
                    <p>Copyright 2025</p>
                  </div>
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