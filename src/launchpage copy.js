import React from "react";
import "../style/launchpage.css";

const launchpage = () => {
  return (
    <div className="video-container">
      htfrj
      <video className="fullscreen-video" autoPlay muted loop>
        <source src="Gandhaar website video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default launchpage;
