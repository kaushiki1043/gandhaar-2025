import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us-container">
      <p className="about-us-title">About Us</p>
      <h5>Gandhaar :&nbsp; A grand celebration of Culture and Talent</h5>
      <div id="monitor-text-wrapper">
        <div id="monitor">
          <div id="monitorscreen">
            <iframe
              src="https://www.youtube.com/embed/9P153-soZH0"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div id="text">
          <p>
            Gandhaar, the grand cultural fest of Cummins College of Engineering
            for Women, is more than just an event—it’s an emotion, a 4-day long
            celebration of talent, creativity, and unbridled enthusiasm. The
            fest boasts an array of captivating competitions like group singing,
            dance, masterchef cooking, painting, mehendi, doodling, departmental
            antakshari, treasure hunt, Cummins got talent, and many more. With
            vibrant intercollegiate contests like dance battles and street play
            performances, Gandhaar transforms the campus into a buzzing hub of
            artistic brilliance. Workshops offer students the chance to engage
            and boost their creativity. Adding to the excitement, Gandhaar’s
            star-studded nights feature mesmerizing live performances by
            renowned artists, an electrifying DJ night to dance your heart out,
            the most anticipated Faculty Dance Performance, and a Gandhaar
            dinner—a feast that brings everyone together to celebrate in style.
            The campus transforms into a vibrant haven during Gandhaar, with its
            lively atmosphere, colorful decorations, and buzzing energy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
