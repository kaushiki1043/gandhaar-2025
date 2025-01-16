import React from "react";
import "../style/FireFooter.css";

const FireFooter = () => {
  return (
    <div className="fire-footer">
      <div className="footer">
        <div className="bubbles"></div>
        <div className="content">
          <div className="container">
            <div className="footer__label">
              <h2 className="footer__title">Gandhaar</h2>
              <span className="footer__subtitle">2025</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Link1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Link2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Link3
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a href="#" className="footer__social">
                <i className="uil uil-github-alt social__icon"></i>
              </a>
              <a href="#" className="footer__social">
                <i className="fa-brands fa-codepen"></i>
              </a>
              <a href="#" className="footer__social">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="#" className="footer__social">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </div>
          </div>
          <p className="footer__copy">© Copyright All rights reserved</p>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default FireFooter;
