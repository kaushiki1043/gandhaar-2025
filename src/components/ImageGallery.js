import React, { useState, useRef } from "react";
import "../style/ImageGallery.css";
import image1 from "../compressed-image-gallery/image1.jpg";
import image2 from "../compressed-image-gallery/image2.jpg";
import image3 from "../compressed-image-gallery/image3.jpg";
import image4 from "../compressed-image-gallery/image4.jpg";
import image5 from "../compressed-image-gallery/image5.jpg";
import image6 from "../compressed-image-gallery/image6.jpg";
import image7 from "../compressed-image-gallery/image7.jpg";
import image8 from "../compressed-image-gallery/image8.jpg";
import image9 from "../compressed-image-gallery/image9.jpg";
import image10 from "../compressed-image-gallery/image10.jpg";
import image11 from "../compressed-image-gallery/image11.jpg";
import image12 from "../compressed-image-gallery/image12.jpg";
import image13 from "../compressed-image-gallery/image13.jpg";
import image14 from "../compressed-image-gallery/image14.jpg";
import image15 from "../compressed-image-gallery/image15.jpg";
import image16 from "../compressed-image-gallery/image16.jpg";
import image17 from "../compressed-image-gallery/image17.jpg";
import image18 from "../compressed-image-gallery/image18.jpg";
import image19 from "../compressed-image-gallery/image19.jpg";
import image20 from "../compressed-image-gallery/image20.jpg";
import image21 from "../compressed-image-gallery/image21.jpg";
import image22 from "../compressed-image-gallery/image22.jpg";
import image23 from "../compressed-image-gallery/image23.jpg";
import image24 from "../compressed-image-gallery/image24.jpg";
import image25 from "../compressed-image-gallery/image25.jpg";
import image26 from "../compressed-image-gallery/image26.jpg";
import image27 from "../compressed-image-gallery/image27.jpg";
import image28 from "../compressed-image-gallery/image28.jpg";
import image29 from "../compressed-image-gallery/image29.jpg";
import image30 from "../compressed-image-gallery/image30.jpg";
import image31 from "../compressed-image-gallery/image31.jpg";
import image32 from "../compressed-image-gallery/image32.jpg";
import image33 from "../compressed-image-gallery/image33.jpg";
import image34 from "../compressed-image-gallery/image34.jpg";
import image35 from "../compressed-image-gallery/image35.jpg";
import image36 from "../compressed-image-gallery/image36.jpg";
import image37 from "../compressed-image-gallery/image37.jpg";
import image38 from "../compressed-image-gallery/image38.jpg";

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image8, alt: "Image 8" },
  { src: image9, alt: "Image 9" },
  { src: image10, alt: "Image 10" },
  { src: image11, alt: "Image 11" },
  { src: image12, alt: "Image 12" },
  { src: image13, alt: "Image 13" },
  { src: image14, alt: "Image 14" },
  { src: image15, alt: "Image 15" },
  { src: image16, alt: "Image 16" },
  { src: image17, alt: "Image 17" },
  { src: image18, alt: "Image 18" },
  { src: image19, alt: "Image 19" },
  { src: image20, alt: "Image 20" },
  { src: image21, alt: "Image 21" },
  { src: image22, alt: "Image 22" },
  { src: image23, alt: "Image 23" },
  { src: image24, alt: "Image 24" },
  { src: image25, alt: "Image 25" },
  { src: image26, alt: "Image 26" },
  { src: image27, alt: "Image 27" },
  { src: image28, alt: "Image 28" },
  { src: image29, alt: "Image 29" },
  { src: image30, alt: "Image 30" },
  { src: image31, alt: "Image 31" },
  { src: image32, alt: "Image 32" },
  { src: image33, alt: "Image 33" },
  { src: image34, alt: "Image 34" },
  { src: image35, alt: "Image 35" },
  { src: image36, alt: "Image 36" },
  { src: image37, alt: "Image 37" },
  { src: image38, alt: "Image 38" },
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const imageGridRef = useRef(null);

  const openImage = (index) => {
    setSelectedIndex(index);

    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "paused";
    }
  };

  const closeImage = () => {
    setSelectedIndex(null);

    if (imageGridRef.current) {
      imageGridRef.current.style.animationPlayState = "running";
    }
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div className="gallery-title">Image Gallery</div>
      <div className="gallery-container">
        <div className="image-grid" ref={imageGridRef}>
          {[...images].map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => openImage(index)}
              />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="image-modal" onClick={closeImage}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeImage}>
                &times;
              </span>
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="modal-image"
              />
              <span className="arrow left" onClick={showPrevImage}>
                &#10094;
              </span>
              <span className="arrow right" onClick={showNextImage}>
                &#10095;
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
