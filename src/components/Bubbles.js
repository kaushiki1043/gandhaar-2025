import React, { useEffect, useState } from "react";
import "../style/Bubbles.css"; // Assuming the CSS is in a separate file named Bubble.css

const Bubbles = () => {
  const [isBubblesActive, setIsBubblesActive] = useState(true);

  useEffect(() => {
    // Function to generate the bubbles
    const generateBubbles = () => {
      const $bubbles = document.querySelector(".bubbles");
      if (!$bubbles) return;

      const min_bubble_count = 7;
      const max_bubble_count = 10;
      const min_bubble_size = 30;
      const max_bubble_size = 100;

      // Clear existing bubbles to prevent duplication
      $bubbles.innerHTML = "";

      // Calculate random bubble count
      const bubbleCount =
        min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

      // Create the bubbles
      for (let i = 0; i < bubbleCount; i++) {
        const bubbleContainer = document.createElement("div");
        bubbleContainer.classList.add("bubble-container");

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        bubbleContainer.appendChild(bubble);
        $bubbles.appendChild(bubbleContainer);

        // Randomize styles
        const pos_rand = Math.floor(Math.random() * 101);
        const size_rand =
          min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
        const delay_rand = Math.floor(Math.random() * 16);
        // const speed_rand = 3 + Math.floor(Math.random() * 9);
        const speed_rand = 5 + Math.floor(Math.random() * 15); // Adjust this range
        const blur_rand = Math.floor(Math.random() * 3);

        bubbleContainer.style.left = `${pos_rand}%`;
        bubbleContainer.style.animationDuration = `${speed_rand}s`;
        bubbleContainer.style.animationDelay = `${delay_rand}s`;
        bubbleContainer.style.filter = `blur(${blur_rand}px)`;

        bubble.style.width = `${size_rand}px`;
        bubble.style.height = `${size_rand}px`;
      }
    };

    if (isBubblesActive) {
      generateBubbles();
    }
  }, [isBubblesActive]);

  const toggleBubbles = () => {
    setIsBubblesActive((prevState) => !prevState);
  };

  return (
    <div>
      <div className="bubbles"></div>
    </div>
  );
};

export default Bubbles;
