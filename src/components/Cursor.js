// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import "../style/Cursor.css";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const onMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const $bigBall = document.querySelector(".cursor__ball--big");
//     const $smallBall = document.querySelector(".cursor__ball--small");

//     if ($bigBall && $smallBall) {
//       gsap.to($bigBall, {
//         x: position.x - 15,
//         y: position.y - 15,
//         duration: 0.4,
//       });
//       gsap.to($smallBall, {
//         x: position.x - 5,
//         y: position.y - 5,
//         duration: 0.1,
//       });
//     }
//   }, [position]);

//   useEffect(() => {
//     const $bigBall = document.querySelector(".cursor__ball--big");
//     if ($bigBall) {
//       gsap.to($bigBall, {
//         scale: hovered ? 4 : 1,
//         duration: 0.3,
//       });
//     }
//   }, [hovered]);

//   return (
//     <div className="cursor">
//       <div className="cursor__ball cursor__ball--big"></div>
//       <div className="cursor__ball cursor__ball--small"></div>
//     </div>
//   );
// };

// export default Cursor;
