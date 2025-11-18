import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../assets/img/footerLogo.svg";
import facebook from "../assets/img/facebook.svg";
import twi from "../assets/img/twi.svg";
import apple from "../assets/img/apple.svg";

import "../scss/components/_footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={footerLogo} alt="" />

        <div className="footer__top_social">
          <img src={facebook} alt="" />
          <img src={twi} alt="" />
          <img src={apple} alt="" />
        </div>
      </div>

      <div className="footer__bottom">
        <p>ILLUMINOS® | 2025</p>
      </div>
    </div>
  );
}

export default Footer;
