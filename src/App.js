import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllEvents from "./components/AllEvents";
import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import StarLineUp from "./components/StarLineUp";
import VideoLaunch from "./components/VideoLaunch.js";
import RegistrationPage from "./components/RegistrationPage";
import Intercollege from "./components/Intercollege.js";
import Launchpage from "./components/Srushti.js";
import Soon from "./components/Soon.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/star-lineup" element={<StarLineUp />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/star-lineup" element={<StarLineUp />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/videolaunch" element={<VideoLaunch />} />
          <Route path="/event/:eventKey" element={<AllEvents />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/intercollege" element={<Intercollege />} />

          <Route path="/" element={<Launchpage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/miss-freshers"
            element={<AllEvents eventKey="missFreshers" />}
          />
          <Route
            path="/dance-battle"
            element={<AllEvents eventKey="danceBattle" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
