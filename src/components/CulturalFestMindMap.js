import React, { useState } from "react";
// import orangeStickyNote from "../theme_images/orangeStickyNote.jpg";
// import craft from "../theme_images/craft.webp";
import "../style/CulturalFestMindMap.css";
//import Bandhani from "../theme_images/banaras.jpg";
import Bantai from "../theme_images/tapori_2.jpeg";
// import Candy from "../theme_images/Candy_1.jpeg";
import old_money from "../theme_images/old_money_2.jpeg";
import Day_1 from "../images/Day_1_1.jpeg";
import Day_2 from "../images/Day_2.jpeg";
import Day_3 from "../images/Day_3.jpeg";
import Day_4 from "../images/Day_4.jpeg";
import Candy from "../theme_images/candy_2.jpeg";
import Bandhani from "../theme_images/Indian_craft.jpeg";
const themes = [
  {
    id: 1,
    name: "Indian Craft Couture",
    img: Day_1, // Image for the pin
    polaroidImg: Bandhani, // Image for the Polaroid
    description:
      "Celebrate traditional craftsmanship with outfits showcasing Indian embroideries and prints, complemented by regal headgear like Rajasthani pagdis, Puneri pagdis, Phetas, and Pahadi caps to complete the look!",
    Date: "23rd January 2025",
    top: "18%",
    left: "22%",
  },
  {
    id: 2,
    name: "Bantai Banters",
    img: Day_2, // Image for the pin
    polaroidImg: Bantai, // Image for the Polaroid
    description:
      " Channel your inner Bollywood tapori with loud, over-the-top outfits—think bright tops, knotted shirts, funky sunglasses, chunky chains, and bandanas for the ultimate street-smart vibe!",
    Date: "24th January 2025",
    top: "35%",
    left: "70%",
  },
  {
    id: 3,
    name: "Sweetopia",
    img: Day_3, // Image for the pin
    polaroidImg: Candy, // Image for the Polaroid
    description:
      "Transform into your favorite sweet treat with vibrant, whimsical outfits inspired by the colors, textures, and charm of iconic candies and chocolates!",
    Date: " 27th January 2025",
    top: "55%",
    left: "30%",
  },
  {
    id: 4,
    name: "Old Money",
    img: Day_4, // Image for the pin
    polaroidImg: old_money, // Image for the Polaroid
    description:
      "Embrace timeless elegance with tailored outfits in neutral tones, pearls, blazers, and minimalistic yet statement jewelry for a sophisticated, understated look.",
    Date: "28th January 2025",
    // top: "40%",
    top: "80%",
    left: "60%",
  },
];
const CulturalFestMindMap = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]); // Default theme selected

  return (
    <div>
      <h1 className="pre-heading">Pre-Gandhaar Themes</h1>
      <div className="mindmap-container">
        <div className="mindmap-background">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onClick={() => setSelectedTheme(theme)}
              className="theme-pin"
              style={{
                top: theme.top,
                left: theme.left,
              }}
            >
              <img src={theme.img} alt={theme.name} />
            </div>
          ))}

          <svg className="zigzag-lines" width="100%" height="100%">
            {themes.map((theme) => {
              const x1 = `calc(${theme.left} + 2%)`; // Dynamic pin start position
              const y1 = `calc(${theme.top} + 2%)`;
              const x2 = "85%"; // Approximate Polaroid position
              const y2 = "85%";

              return (
                <line
                  key={theme.id}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#AE445A"
                  strokeWidth="3"
                />
              );
            })}
          </svg>
        </div>

        <div className="polaroid-container">
          <div className="polaroid polaroid-image">
            <img
              src={selectedTheme.polaroidImg} // Use the Polaroid-specific image
              alt={selectedTheme.name}
              style={{ width: "100%" }}
            />
          </div>

          <div className="polaroid polaroid-description">
            <h4>{selectedTheme.name}</h4>
            <p>{selectedTheme.description}</p>
            <p>Date: {selectedTheme.Date}</p>
                      
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalFestMindMap;
