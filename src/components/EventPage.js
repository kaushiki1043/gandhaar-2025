import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/All-Events.css"; // Import the CSS file for styles
// Header Component
const Header = ({ title, subtitle, image }) => (
  <header className="event-header">
    <button
      onClick={() => window.history.back()} // Goes back to the previous page
      className="back-button"
    >
      &larr;
    </button>
    <div className="title-container">
      <img
        src={image} // Dynamically load the event image
        alt="Left Decoration"
        className="title-image"
      />
      <div className="text-container">
        <h1 className="event-title">{title}</h1>
        <p className="event-subtitle">{subtitle}</p>
      </div>
      <img
        src={image} // Dynamically load the event image
        alt="Right Decoration"
        className="title-image"
      />
    </div>
  </header>
);

// Box Component for displaying content
const Box = ({ title, content }) => (
  <div className="box">
    <div className="content">
      <h2>{title}</h2>
      {typeof content === "string" ? <p>{content}</p> : content}
    </div>
  </div>
);

// RulesBox Component for displaying rules with headings and sub-points
const RulesBox = ({ title, rules }) => (
  <div className="box full-height">
    <div className="content">
      <h2>{title}</h2>
      {rules.map((section, index) => (
        <div key={index} className="rules-section">
          <h3 className="rules-heading">{section.heading}</h3>
          {section.subheading && (
            <h4 className="rules-subheading">{section.subheading}</h4>
          )}
          <ul className="rules-list">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// EventPage Component
const EventPage = ({ event }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registration");
  };
  const { title, subtitle, image, details, structure, rules, contacts } = event;

  // Contact Information
  const contactContent = (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name}: {contact.phone}
        </li>
      ))}
    </ul>
  );

  // Event Structure Content
  const eventStructureContent = (
    <ul>
      {structure.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <Header title={title} subtitle={subtitle} image={image} />{" "}
      <div className="container">
        <div className="left">
          <Link to={event.registerLink}>
            <button className="custom-btn btn-14">
              <span>REGISTER</span>
            </button>
          </Link>

          <Box title="Event Structure" content={eventStructureContent} />
          <Box title="Event Details" content={details} />
          <Box title="Contact Coordinators" content={contactContent} />
        </div>

        <RulesBox title="Rules" rules={rules} />
      </div>
    </div>
  );
};

export default EventPage;
