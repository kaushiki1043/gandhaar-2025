import React, { useEffect, useState } from "react";
import "../style/Home.css";
// import Launch from "./Launch";
import Header from "./Header";
import Navigation from "./Navigation";
import Countdown from "./Countdown";
import PreGandhaarThemes from "./PreGandhaarThemes";
import GandhaarThemes from "./GandhaarThemes";
import StarLineUp from "./StarLineUp";
import Schedule from "./Schedule";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";
import CulturalFestMindMap from "./CulturalFestMindMap";
import EventSource from "./EventSource";
import Bubbles from "./Bubbles";
import Team from "./Team";
import DevTeam from "./DevTeam";
import AboutUs from "./AboutUs";

function Home() {
  const targetDate = "2025-01-30T23:59:59";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div>
      <div id="home">
        {" "}
        <Header toggleDrawer={toggleDrawer} />
      </div>
      <div>
        {" "}
        <Navigation
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          scrollThreshold={200}
        />{" "}
      </div>
      <div></div>
      <div id="countdown">
        {" "}
        <Countdown targetDate={targetDate} />{" "}
      </div>

      <div id="pre-themes">
        <CulturalFestMindMap />
      </div>
      <div id="themes">
        <GandhaarThemes />
      </div>
      <div id="events">
        <EventSource />
      </div>

      <div id="star-lineup">
        <StarLineUp />
      </div>
      <div id="schedule">
        <Schedule />
      </div>

      <div id="about-us">
        <AboutUs />
      </div>

      <div id="gallery">
        <ImageGallery />
      </div>

      <div id="team">
        <Team />
        <DevTeam />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
