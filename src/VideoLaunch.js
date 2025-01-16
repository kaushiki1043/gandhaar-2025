import React, { useRef, useState, useEffect } from "react";
import "./VideoLaunch.css";
import gandhaarLogo from "./images/gandhaar-logo.png";

const VideoLaunch = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [leftNotes, setLeftNotes] = useState([]);
  const [rightNotes, setRightNotes] = useState([]);
  const [showReadyText, setShowReadyText] = useState(true); // Control "Are you ready" visibility
  const text = "Gandhaar-2025";

  useEffect(() => {
    const handleProgress = () => {
      if (videoRef.current) {
        const percent =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
      }
    };

    const interval = setInterval(handleProgress, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createNote = (setNotes, side) => {
      const newNote = {
        id: Date.now(),
        content: Math.random() > 0.5 ? "♪" : "♬",
        side: side, // "left" or "right"
      };
      setNotes((prev) => [...prev, newNote]);

      // Remove note after animation duration
      setTimeout(() => {
        setNotes((prev) => prev.filter((note) => note.id !== newNote.id));
      }, 10000); // Matches animation duration
    };

    const leftNoteInterval = setInterval(
      () => createNote(setLeftNotes, "left"),
      2000
    );
    const rightNoteInterval = setInterval(
      () => createNote(setRightNotes, "right"),
      2000
    );

    return () => {
      clearInterval(leftNoteInterval);
      clearInterval(rightNoteInterval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReadyText(false);
      const scrollTarget = document.querySelector(".music-loading-bar");
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: "smooth" });
      }
    }, 6000); // Match fade-in-out animation duration
    return () => clearTimeout(timer);
  }, []);

  const visibleText = text.slice(0, Math.ceil((progress / 100) * text.length));

  return (
    <div className="launch-page-video">
      {showReadyText && (
        <div>
          <div className="ready-text">Are you ready?</div>
          <img className="ready-image" src={gandhaarLogo} alt="Gandhaar Logo" />
        </div>
      )}

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

      {leftNotes.map((note) => (
        <div
          key={note.id}
          className="musical-note"
          style={{
            left: "5%",
            animationDelay: `${Math.random()}s`,
          }}
        >
          {note.content}
        </div>
      ))}

      {rightNotes.map((note) => (
        <div
          key={note.id}
          className="musical-note"
          style={{
            left: "95%",
            animationDelay: `${Math.random()}s`,
          }}
        >
          {note.content}
        </div>
      ))}
    </div>
  );
};

export default VideoLaunch;
