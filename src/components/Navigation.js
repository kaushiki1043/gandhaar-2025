// import React, { useEffect, useState } from "react";
// import "../style/Navigation.css";
// import { Link } from "react-scroll";

// const Navigation = ({ isDrawerOpen, toggleDrawer, scrollThreshold = null }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
//   const [isVisible, setIsVisible] = useState(scrollThreshold === null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 968);
//     };

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollThreshold !== null) {
//         setIsSticky(scrollPosition > scrollThreshold);
//         setIsVisible(scrollPosition > scrollThreshold);
//       } else {
//         setIsVisible(true);
//         setIsSticky(true);
//       }
//     };

//     const handleClickOutside = (event) => {
//       const drawer = document.querySelector(".drawer");
//       if (isDrawerOpen && drawer && !drawer.contains(event.target)) {
//         toggleDrawer();
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [scrollThreshold, isDrawerOpen, toggleDrawer]);

//   return (
//     <>
//       {isVisible && !isDrawerOpen && (
//         <div
//           className={`navcontainer ${isSticky ? "sticky" : ""}`}
//           style={{ display: "flex" }}
//         >
//           <ul className="navmenu">
//             <li className="navitem">
//               <Link className="navlink" to="home" smooth={true} duration={500}>
//                 Home
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="events"
//                 smooth={true}
//                 duration={500}
//               >
//                 Events
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="schedule"
//                 smooth={true}
//                 duration={500}
//               >
//                 Schedule
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="pre-themes"
//                 smooth={true}
//                 duration={500}
//               >
//                 Themes
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="star-lineup"
//                 smooth={true}
//                 duration={500}
//               >
//                 Star Line-up
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link className="navlink" to="team" smooth={true} duration={500}>
//                 Team
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="gallery"
//                 smooth={true}
//                 duration={500}
//               >
//                 Gallery
//               </Link>
//             </li>
//             <li className="navitem">
//               <Link
//                 className="navlink"
//                 to="about-us"
//                 smooth={true}
//                 duration={500}
//               >
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//       {isMobile && (
//         <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
//           <ul className="drawermenu">
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>🏠</span> Home
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="events"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>🎉</span> Events
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="schedule"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>📅</span> Schedule
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="pre-themes"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>🎨</span> Theme
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="star-lineup"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>✨</span> Star Line-Up
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="gallery"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>🖼️</span> Gallery
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="team"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>👥</span> Team
//               </Link>
//             </li>
//             <li className="draweritem">
//               <Link
//                 className="drawerlink"
//                 to="about-us"
//                 smooth={true}
//                 duration={500}
//                 onClick={toggleDrawer}
//               >
//                 <span>ℹ️</span> About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navigation;

import React, { useEffect, useState } from "react";
import "../style/Navigation.css";
import { Link } from "react-scroll";

const Navigation = ({ isDrawerOpen, toggleDrawer, scrollThreshold = null }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [isVisible, setIsVisible] = useState(scrollThreshold === null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollThreshold !== null) {
        setIsSticky(scrollPosition > scrollThreshold);
        setIsVisible(scrollPosition > scrollThreshold);
      } else {
        setIsVisible(true);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <>
      {isVisible && !isDrawerOpen && (
        <div
          className={`navcontainer ${isSticky ? "sticky" : ""}`}
          style={{ display: "flex" }}
        >
          <ul className="navmenu">
            <li className="navitem">
              <Link className="navlink" to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="events"
                smooth={true}
                duration={500}
              >
                Events
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="schedule"
                smooth={true}
                duration={500}
              >
                Schedule
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="pre-themes"
                smooth={true}
                duration={500}
              >
                Themes
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="star-lineup"
                smooth={true}
                duration={500}
              >
                Star Line-up
              </Link>
            </li>
            <li className="navitem">
              <Link className="navlink" to="team" smooth={true} duration={500}>
                Team
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="gallery"
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className="navitem">
              <Link
                className="navlink"
                to="about-us"
                smooth={true}
                duration={500}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isMobile && (
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          {/* Close Button */}
          <button className="close-drawer-btn" onClick={toggleDrawer}>
            &times;
          </button>

          <ul className="drawermenu">
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>🏠</span> Home
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="events"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>🎉</span> Events
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="schedule"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>📅</span> Schedule
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="pre-themes"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>🎨</span> Theme
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="star-lineup"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>✨</span> Star Line-Up
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="gallery"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>🖼️</span> Gallery
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="team"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>👥</span> Team
              </Link>
            </li>
            <li className="draweritem">
              <Link
                className="drawerlink"
                to="about-us"
                smooth={true}
                duration={500}
                onClick={toggleDrawer}
              >
                <span>ℹ️</span> About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
