import React, { useState, useEffect } from "react";
import "../style/EventDetails.css";
import event_details from "./event_details";
import Header from "./Header";
import { useLocation } from "react-router-dom";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import LaunchIcon from "@mui/icons-material/Launch";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Bubbles from "./Bubbles";

const EventDetails = () => {
  const location = useLocation();
  const { category } = location.state || {}; // Get category from state, if available

  const [drawerOpen, setDrawerOpen] = useState(null); // For bottom drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleDrawer1 = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const toggleDrawer = (key) => {
    setDrawerOpen(drawerOpen === key ? null : key);
  };

  const [filters, setFilters] = useState({
    day: "All",
    location: "All",
    category: "All",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value === "All" ? "All" : value,
    }));
  };

  const handleSpecificFilterChange = (key, value) => {
    setFilters((prevFilters) => {
      const isAllSelected = prevFilters[key] === "All";
      return {
        ...prevFilters,
        [key]: isAllSelected
          ? value
          : value === prevFilters[key]
          ? "All"
          : value,
      };
    });
  };

  const filteredEvents = Object.entries(event_details).filter(([_, event]) => {
    return (
      (filters.day === "All" || event.day === filters.day) &&
      (filters.location === "All" || event.location === filters.location) &&
      (filters.category === "All" || event.category === filters.category)
    );
  });

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <div className="sidebar">
          <h3>
            <FilterListIcon style={{ fontSize: "40px", marginRight: "5px" }} />
            Filters
          </h3>

          <div>
            <h4>Day</h4>
            <div>
              {["All", "Jan 29", "Jan 30", "Jan 31", "Feb 1"].map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    checked={filters.day === day}
                    onChange={() =>
                      day === "All"
                        ? handleFilterChange("day", day)
                        : handleSpecificFilterChange("day", day)
                    }
                  />
                  <label>{day}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Location</h4>
            <div>
              {[
                "All",
                "Main Quad",
                "Stage 2",
                "Between Main & IT Bldg",
                "Mech Circle",
                "Instru Quad",
                "KB Joshi",
                "Samstha Ground",
                "IT/Mech Bldg",
                "Whole Campus",
                "Instru Garden/Mech Circle",
                "IT Bulg",
                "Online",
              ].map((location) => (
                <div key={location}>
                  <input
                    type="checkbox"
                    checked={filters.location === location}
                    onChange={() =>
                      location === "All"
                        ? handleFilterChange("location", location)
                        : handleSpecificFilterChange("location", location)
                    }
                  />
                  <label>{location}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Category</h4>
            <div>
              {[
                "All",
                "Groove Arena",
                "Jamsphere",
                "Gathering Hub",
                "Wordsmith’s Corner",
                "Haute Route",
                "Savoury Symphony",
                "Artiscope",
                "Theatrical Tapestry",
                "Skill Lab",
                "The Digital Stage",
                "Joyland",
              ].map((category) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    checked={filters.category === category}
                    onChange={() =>
                      category === "All"
                        ? handleFilterChange("category", category)
                        : handleSpecificFilterChange("category", category)
                    }
                  />
                  <label>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content">
          <Bubbles />
          <button
            onClick={() => window.history.back()} // Goes back to the previous page
            className="event-back-button"
          >
            &larr;
          </button>

          <h2 className="event-container-title">Event List</h2>
          {filteredEvents.length === 0 ? (
            <p>No events match the selected filters.</p>
          ) : (
            <div className="event-grid">
              {filteredEvents.map(([key, event]) => (
                <div className="event-details-card" key={key}>
                  <div className="event-details-image">
                    <img src={event.imageUrl} alt={`${key} image`} />
                  </div>
                  <h3>{key}</h3>
                  <div className="event-tags-container">
                    <div className="event-tag">
                      <CalendarMonthIcon style={{ marginRight: "5px" }} />
                      {event.day}
                    </div>
                    <div className="event-tag">
                      <WatchLaterIcon style={{ marginRight: "5px" }} />
                      {`${event.start} - ${event.end}`}
                    </div>
                    <div className="event-tag">
                      <LocationOnIcon style={{ marginRight: "5px" }} />
                      {event.location}
                    </div>
                    <div className="event-tag">
                      <CategoryIcon style={{ marginRight: "5px" }} />
                      {event.category}
                    </div>
                    <div className="event-tag">
                      <GroupsIcon style={{ marginRight: "5px" }} />
                      {`Team Size: ${event.teamSize}`}
                    </div>
                    <div className="event-tag">
                      <GroupsIcon style={{ marginRight: "5px" }} />
                      {`Participation: ${event.Participation}`}
                    </div>
                  </div>

                  <a
                    href={event.detailsUrl}
                    rel="noopener noreferrer"
                    className="event-register-button"
                  >
                    View Event Details
                    <LaunchIcon style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bottom-drawer">
          {["day", "category"].map((key) => (
            <div
              key={key}
              className={`drawer-item ${drawerOpen === key ? "open" : ""}`}
            >
              <button
                className="drawer-toggle"
                onClick={() => toggleDrawer(key)}
              >
                {key === "day" && (
                  <CalendarMonthIcon style={{ marginRight: "5px" }} />
                )}

                {key === "category" && (
                  <CategoryIcon style={{ marginRight: "5px" }} />
                )}
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>

              <div className="drawer-content">
                {drawerOpen === "day" &&
                  ["All", "Jan 29", "Jan 30", "Jan 31", "Feb 1"].map((day) => (
                    <div key={day}>
                      <input
                        type="checkbox"
                        checked={filters.day === day}
                        onChange={() =>
                          day === "All"
                            ? handleFilterChange("day", day)
                            : handleSpecificFilterChange("day", day)
                        }
                      />
                      <label>{day}</label>
                    </div>
                  ))}

                {drawerOpen === "category" &&
                  [
                    "All",
                    "Groove Arena",
                    "Jamsphere",
                    "Gathering Hub",
                    "Wordsmith’s Corner",
                    "Haute Route",
                    "Savoury Symphony",
                    "Artiscope",
                    "Theatrical Tapestry",
                    "Skill Lab",
                    "The Digital Stage",
                    "Joyland",
                  ].map((category) => (
                    <div key={category}>
                      <input
                        type="checkbox"
                        checked={filters.category === category}
                        onChange={() =>
                          category === "All"
                            ? handleFilterChange("category", category)
                            : handleSpecificFilterChange("category", category)
                        }
                      />
                      <label>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
