// import React from "react";
// import "../style/PreGandhaarThemes.css";

// function PreGandhaarThemes() {
//   return <div>PreGandhaarThemes</div>;
// }

// export default PreGandhaarThemes;
import React, { useState, useEffect } from "react";
import "../style/PreGandhaarThemes.css";
import broadwayballad from "../images/broadwayballad.webp";
import streetbeats from "../images/streetbeats.webp";
import chartpopers from "../images/chartpopers.webp";
import allankarallure from "../images/raagreverie.webp";
// In your index.js or App.js file

function PreGandhaarThemes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const itemList = [
    {
      id: 0,
      background: "#4e131c",
      day: "Day 1",
      content: "Broadway Ballad",
      description: "Drama, dreams, and dazzling melodies!",
      imgSrc: broadwayballad,
    },
    {
      id: 1,
      background: "#2D5643",
      day: "Day 2",
      content: "StreetBeat",
      description: "Feel the rhythm of the streets!",
      imgSrc: streetbeats,
    },
    {
      id: 2,
      background: "#E7A043",
      day: "Day 3",
      content: "Chart POP",
      description: "Pop hits, loud beats, endless vibes!",
      imgSrc: chartpopers,
    },
    {
      id: 3,
      background: "#E7A043",
      day: "Day 4",
      content: "Allankar Allure",
      description: "Classical charm, timeless allure!",
      imgSrc: allankarallure,
    },
  ];

  const count = itemList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex >= count - 1 ? 0 : prevIndex + 1));
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? count - 1 : prevIndex - 1));
    setRotation((prevRotation) => (prevRotation - 90) % 360);
  };

  return (
    <div className="carousel">
      <div className="list">
        {itemList.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === activeIndex ? "active" : ""} ${
              index !== activeIndex ? "hidden" : ""
            } ${item.content.toLowerCase().replace(" ", "-")}`}
            style={{ "--background": item.background }}
          >
            <div className="day">{item.day}</div>
            <div className="content">{item.content}</div>
            <div className="description">{item.description}</div>
            <img src={item.imgSrc} className="fruit" alt={item.content} />
          </div>
        ))}
      </div>
      <div className="leaves"></div>
      <div className="background"></div>
      <div
        className="mockup"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
      ></div>
      <div className="shadow"></div>

    </div>
  );
}

export default PreGandhaarThemes;
