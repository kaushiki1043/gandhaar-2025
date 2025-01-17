import React from "react";
import "../style/RegistrationPage.css";
import Bubbles from "./Bubbles";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <Bubbles />
      <button
        onClick={() => window.history.back()} // Goes back to the previous page
        className="back-button"
      >
        &larr;
      </button>
      <div className="regPage-content">
        <h2>Registrations for the event are now closed</h2>
        <p>
          As we have reached the maximum number of participants. Thank you for
          your interest!
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
