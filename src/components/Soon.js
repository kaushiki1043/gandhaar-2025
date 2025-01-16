import React from "react";
import "../style/RegistrationPage.css";
import Bubbles from "./Bubbles";

const Soon = () => {
  return (
    <div className="registration-page">
      <Bubbles />
      <div className="regPage-content">
        <h1>The website will be launched soon!</h1>
        <p>
          Thank you for your interest in our events. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Soon;
