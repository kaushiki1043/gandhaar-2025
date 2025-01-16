import React from "react";
import "../style/StarLineUp.css";

function StarLineUp() {
  return (
    <div className="star-lineup-container">
      <h2>Star Line Up</h2>
      <div className="star-gift-container">
        <div className="star-gift">
          <input type="checkbox" id="star-click" />
          <label htmlFor="star-click" className="star-click">
            Tap to reveal
          </label>
          <div className="star-card-container">
            <div className="star-card">
              <h3>Coming Soon...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarLineUp;
