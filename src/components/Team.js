import React from "react";
import panel_images from "./panel_images";
import "../style/Team.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Team = () => {
  return (
    <div className="background-container">
      <h1 className="team-title">Cultural Panel</h1>

      <div className="team-container">
        <div className="panel-grid">
          {Object.values(panel_images).map((panel, index) => (
            <div
              key={index}
              className={`panel-card ${index === 0 ? "first-panel" : ""}`}
            >
              <div className="panel-image-container">
                <div className="image-container">
                  <img
                    src={panel.image}
                    alt={panel.fullName}
                    className="panel-image"
                  />
                </div>
              </div>
              <div className="panel-info">
                <h3>{panel.fullName}</h3>
                <p>{panel.year}</p>
                <div className="social-icons">
                  <a
                    href={panel.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="icon" />
                  </a>
                  <a
                    href={panel.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="icon" />
                  </a>
                  <a
                    href={`mailto:${panel.emailId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailOutlineIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
