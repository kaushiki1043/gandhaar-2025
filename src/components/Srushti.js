import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../style/Srushti.css";
import gandhaarvideo from "../Gandhaar-website-video.mp4";

const Launchpage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSkip = () => {
    navigate("/home"); // Redirect to the home page
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoEnd = () => {
    navigate("/home"); // Redirect to the home page when the video ends
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="fullscreen-video"
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleVideoEnd} // Add onEnded event to redirect when the video finishes
      >
        <source src={gandhaarvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button className="control-button top-left" onClick={handleSkip}>
        Skip
      </button>

      <button className="control-button bottom-right" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default Launchpage;
