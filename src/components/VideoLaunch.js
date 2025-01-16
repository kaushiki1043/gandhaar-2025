import React, { useEffect, useRef, useState } from "react";
import "./VideoLaunch.css";

const VideoLaunch = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const text = "Gandhaar-2025"; // Text to progressively display

  useEffect(() => {
    const handleProgress = () => {
      if (videoRef.current) {
        const percent =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
      }
    };

    // Set interval to update the loading progress
    const interval = setInterval(handleProgress, 100);

    return () => {
      clearInterval(interval); // Cleanup interval when component unmounts
    };
  }, []);

  // Calculate how much of the text to display based on progress
  const visibleText = text.slice(0, Math.ceil((progress / 100) * text.length));

  return (
    <div className="launch-page-video">
      <video ref={videoRef} autoPlay loop muted>
        <source src="/videos/macow_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="music-loading-bar">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="wave" />
        ))}
        <div
          className="music-loading-bar-progress"
          style={{ width: `${progress}%` }}
        />
        <div className="loading-percentage">{visibleText}</div>
      </div>
    </div>
  );
};

export default VideoLaunch;
