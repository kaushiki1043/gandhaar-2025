// import React, { useState } from "react";
// import "./LaunchPage.css";

// const LaunchPage = () => {
//   const [showNotes, setShowNotes] = useState(false);

//   const handleMouseEnter = () => {
//     setShowNotes(true);
//   };

//   const handleMouseLeave = () => {
//     setShowNotes(false);
//   };

//   const handleEnter = () => {
//     // Navigate to the main website page, e.g., using React Router
//     window.location.href = "/home"; // Replace with your desired URL or route
//   };

//   return (
//     <div className="launch-page">
//       <div className="mascot-container">
//         <img
//           src="\images\macaw-mascot.webp" // Replace with the actual image path
//           alt="Macaw Mascot"
//           className="mascot-image"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         />
//         {showNotes && (
//           <div className="muzieknootjes">
//             <div className="noot-1">&#9835; &#9833;</div>
//             <div className="noot-2">&#9833;</div>
//             <div className="noot-3">&#9839; &#9834;</div>
//             <div className="noot-4">&#9834;</div>
//           </div>
//         )}
//         <h1 className="launch-title">Welcome to Our Website!</h1>
//       </div>
//       <button className="enter-button" onClick={handleEnter}>
//         Enter Website
//       </button>
//     </div>
//   );
// };

// export default LaunchPage;

import React, { useState, useEffect } from "react";
import "./LaunchPage.css";

const LaunchPage = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleMouseEnter = () => {
    setShowNotes(true);
  };

  const handleMouseLeave = () => {
    setShowNotes(false);
  };

  const handleEnter = () => {
    window.location.href = "/home"; // Replace with your desired URL or route
  };

  useEffect(() => {
    // Generate an array of musical notes with random positions and animations
    const generateNotes = () => {
      const noteElements = [];
      for (let i = 0; i < 20; i++) {
        const left = Math.random() * 100; // Random position (0-100%)
        const top = Math.random() * 100;
        const delay = Math.random() * 3; // Random animation delay (0-3s)
        const size = Math.random() * 20 + 15; // Random font size (15px-35px)

        noteElements.push(
          <div
            key={i}
            className="note"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              fontSize: `${size}px`,
            }}
          >
            {Math.random() > 0.66 ? "♩" : Math.random() > 0.33 ? "🎵" : "♪"}
          </div>
        );
      }
      return noteElements;
    };

    setNotes(generateNotes());
  }, []);

  return (
    <div className="launch-page">
      <div className="musical-notes">{notes}</div>
      <div className="mascot-container">
        <img
          src="\images\macaw-mascot.webp" // Replace with the actual image path
          alt="Macaw Mascot"
          className="mascot-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <h1 className="launch-title">Gandhaar 2025</h1>
      </div>
      <div className="buttons">
        <svg width="0" height="0">
          <defs>
            <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <button className="blob-btn" onClick={handleEnter}>
          <span className="blob-btn__inner"></span>
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
          Are you ready? lesss go
        </button>
      </div>
    </div>
  );
};

export default LaunchPage;
