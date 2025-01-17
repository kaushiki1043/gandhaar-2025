import React from "react";
import "../style/EventSource.css";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import { useNavigate } from "react-router-dom";

// Import images from the posters folder
import image1 from "../posters/1.png";
import image2 from "../posters/2.png";
import image3 from "../posters/3.png";
import image4 from "../posters/4.jpg";
import image5 from "../posters/5.png";
import image6 from "../posters/Artiscope.PNG";
import image7 from "../posters/Digital stage.PNG";
import image8 from "../posters/haute route.png";
import image9 from "../posters/theatre.png";
import image10 from "../posters/Skills lab.PNG";
import image11 from "../posters/Joyland.PNG";

// Update items array with local images
const items = [
  { image: image1, alt: "GROOVE ARENA" },
  { image: image2, alt: "JAMSPHERE" },
  { image: image3, alt: "GATHERING HUB" },
  { image: image4, alt: "WORDSMITH’S CORNER" },
  { image: image5, alt: "SAVORY SYMPHONY" },
  { image: image6, alt: "ARTISCOPE" },
  { image: image7, alt: "THE DIGITAL STAGE" },
  { image: image8, alt: "HAUTE ROUTE" },
  { image: image9, alt: "THEATRICAL TAPESTRY" },
  { image: image10, alt: "SKILL LAB" },
  { image: image11, category: "JOYLAND" },
];

function EventSource() {
  const navigate = useNavigate();

  return (
    <div className="event-source">
      <h2 className="event-source-title">Event Categories</h2>

      <Carousel
        items={items.map(({ image, category }, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container
                borderRadius: "8px", // Optional: Rounded corners for better visuals
                display: "block", // Prevents spacing issues
              }}
            />
          </div>
        ))}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
        className="carousel-container"
      />
      <button
        className="event-button"
        onClick={() => navigate("/event-details")}
      >
        View All Events
      </button>
    </div>
  );
}

export default EventSource;
