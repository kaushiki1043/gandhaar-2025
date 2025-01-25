import React, { useState } from "react";
import "../style/Schedule.css";
import event_details from "./event_details";

const daySchedules = {
  Day1: [
    {
      id: 1,
      text: "INAUGURATION",
      Ename: "INAUGURATION",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 17,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 2,
      text: "DJEMBE WORKSHOP",
      Ename: "DJEMBE WORKSHOP",
      startRow: 5,
      endRow: 9,
      startCol: 2,
      endCol: 5,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "STAGE 2",
      href: event_details["Djembe"].detailsUrl,
    },
    {
      id: 3,
      text: "INTRA CLG GROUP DANCE",
      Ename: "JHOOM JUNCTION",
      startRow: 15,
      endRow: 25,
      startCol: 2,
      endCol: 17,
      start: "5:00 PM",
      end: "10:00 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "SAMSTHA GROUND",
      href: event_details["Jhoom Junction"].detailsUrl,
    },

    {
      id: 4,
      text: "SKETCHING",
      Ename: "SKETCH SPHERE",
      startRow: 6,
      endRow: 9,
      startCol: 8,
      endCol: 11,
      start: "12:30 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #ff9966, #ff5e62)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Sketch Sphere"].detailsUrl,
    },
    {
      id: 5,
      text: "TSHIRT/ SNEAKERS DESIGNING",
      Ename: "KICKS & DYES",
      startRow: 6,
      endRow: 10,
      startCol: 11,
      endCol: 14,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "INSTRUMENTATION QUADRANGLE",
      href: event_details["Kicks & Dyes Showdown"].detailsUrl,
    },
    {
      id: 6,
      text: "SPELLING BEE",
      Ename: "SPELL BOUND",
      startRow: 6,
      endRow: 10,
      startCol: 14,
      endCol: 17,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "KB JOSHI HALL",
      href: event_details["Spellbound"].detailsUrl,
    },
    {
      id: 7,
      text: "DEPARTMENT ANTAKSHARI FACULTY",
      Ename: "THE GREAT FACULTY SING-OFF",
      startRow: 6,
      endRow: 10,
      startCol: 5,
      endCol: 8,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 8,
      text: "DEBATE COMPETITION",
      Ename: "GOONJ 3.0",
      startRow: 10,
      endRow: 14,
      startCol: 8,
      endCol: 10,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "STAGE 2",
      href: event_details["Goonj 3.0"].detailsUrl,
    },
    {
      id: 9,
      text: "PAINTING COMPETITION",
      Ename: "COLOR COMBAT",
      startRow: 10,
      endRow: 14,
      startCol: 10,
      endCol: 12,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Color Combat"].detailsUrl,
    },
    {
      id: 10,
      text: "DUMB CHARADES",
      Ename: "SHANTIT KRANTI",
      startRow: 10,
      endRow: 14,
      startCol: 12,
      endCol: 15,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["Shantit Kranti"].detailsUrl,
    },
    {
      id: 11,
      text: "MEHENDI",
      Ename: "HANDS ON HENNA",
      startRow: 10,
      endRow: 14,
      startCol: 15,
      endCol: 17,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #72c237, #b3e673)",
      location: "MECHANICAL CIRCLE",
      href: event_details["Hands On Henna"].detailsUrl,
    },

    // linear-gradient(to right, #12c2e9, #c471ed),"linear-gradient(to right, #fc466b, #3f5efb)
  ],

  Day2: [
    {
      id: 1,
      text: "OCTOPUS RACE",
      Ename: "OCTOPUS RACE",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 17,
      start: "8:00 AM",
      end: "10:00 AM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "SAMSTHA GROUND",
      href: event_details["Octopus Race"].detailsUrl,
    },
    {
      id: 2,
      text: "CONE RUSH",
      Ename: "CONE RUSH",
      startRow: 5,
      endRow: 7,
      startCol: 14,
      endCol: 17,
      start: "10:00 AM",
      end: "11:00 AM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "SAMSTHA GROUND",
      href: event_details["Cone Rush"].detailsUrl,
    },
    {
      id: 3,
      text: "INTER COLLEGE DANCE",
      Ename: "STEP IT UP",
      startRow: 5,
      endRow: 10,
      startCol: 5,
      endCol: 8,
      start: "10:00 AM",
      end: "12:30 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 4,
      text: "SWARASHREE BAND PERFORMANCE",
      Ename: "CAMPUS BEATS 2.0",
      startRow: 5,
      endRow: 8,
      startCol: 8,
      endCol: 11,
      start: "10:00 AM",
      end: "11:30 AM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "STAGE 2",
    },
    {
      id: 5,
      text: "PORTRAIT COMPETITION",
      Ename: "FACES IN FOCUS",
      startRow: 5,
      endRow: 9,
      startCol: 11,
      endCol: 14,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Faces In Focus"].detailsUrl,
    },
    {
      id: 6,
      text: "DEPARTMENT ANTAKSHARI STUDENT",
      Ename: "SURON KE SIKANDER",
      startRow: 5,
      endRow: 9,
      startCol: 2,
      endCol: 5,
      start: "10:00 AM",
      end: "12:00 PM",
      background: "linear-gradient(to right, #12c2e9, #c471ed)",
      location: "KB JOSHI",
      href: event_details["Suron Ke Sikandar"].detailsUrl,
    },
    {
      id: 7,
      text: "CUMMINS GOT LATENT",
      Ename: "CUMMINS GOT LATENT",
      startRow: 9,
      endRow: 12,
      startCol: 2,
      endCol: 5,
      start: "12:00 PM",
      end: "1:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "STAGE 2",
      href: event_details["Cummins Got Latent"].detailsUrl,
    },
    {
      id: 8,
      text: "DOODLE COMPETITION",
      Ename: "DOODLE EXPRESS",
      startRow: 10,
      endRow: 14,
      startCol: 5,
      endCol: 8,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #a8ffb4, #f0e130)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Doodle Express"].detailsUrl,
    },
    {
      id: 9,
      text: "TEXTURE MOON WORKSHOP",
      Ename: "TEXTURE MOON WORKSHOP",
      startRow: 10,
      endRow: 14,
      startCol: 8,
      endCol: 11,
      start: "12:30 PM",
      end: "2:30 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MECHANICAL BUILDING",
      href: event_details["Texture Moon Painting"].detailsUrl,
    },
    {
      id: 10,
      text: "UKULELE WORKSOP",
      Ename: "UKULELE WORKSOP",
      startRow: 10,
      endRow: 18,
      startCol: 14,
      endCol: 17,
      start: "12:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "IT BUILDING",
      href: event_details["Ukulele Unplugged"].detailsUrl,
    },
    {
      id: 11,
      text: "TRASHION",
      Ename: "ECO VOGUE",
      startRow: 11,
      endRow: 15,
      startCol: 11,
      endCol: 14,
      start: "1:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["Eco Vogue"].detailsUrl,
    },
    {
      id: 12,
      text: "STREET DANCE",
      Ename: "THE STREET BRAWL",
      startRow: 13,
      endRow: 17,
      startCol: 2,
      endCol: 5,
      start: "2:00 PM",
      end: "4:00 PM",
      background: "linear-gradient(to right, #ff7eb3, #ffb347",
      location: "STAGE 2",
      href: event_details["The Street Brawl"].detailsUrl,
    },
    {
      id: 13,
      text: "KALAWANT NAATAK",
      Ename: "KALAWANT NAATAK",
      startRow: 16,
      endRow: 18,
      startCol: 9,
      endCol: 14,
      start: "3:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
      location: "ICHALKARANGI HALL",
    },
    {
      id: 14,
      text: "STAR NIGHT 1",
      Ename: "STAR NIGHT 1",
      startRow: 20,
      endRow: 21,
      startCol: 2,
      endCol: 17,
      start: "5:30 PM",
      end: "6:00 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "SAMSTHA GROUND",
    },
    {
      id: 15,
      text: "SHAAM SHAANDAAR",
      Ename: "SHAAM SHAANDAAR",
      startRow: 21,
      endRow: 22,
      startCol: 2,
      endCol: 17,
      start: "6:00 PM",
      end: "6:45 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "SAMSTHA GROUND",
    },
    {
      id: 16,
      text: "BTECH FASHION SHOW",
      Ename: "HAUTE AURA",
      startRow: 22,
      endRow: 29,
      startCol: 2,
      endCol: 17,
      start: "6:45 PM",
      end: "10:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "SAMSTHA GROUND",
      href: event_details["HauteAura"].detailsUrl,
    },
  ],
  Day3: [
    {
      id: 1,
      text: "UP DOWN RACE",
      Ename: "UP DOWN RACE",
      startRow: 1,
      endRow: 5,
      startCol: 2,
      endCol: 13,
      start: "8:00 AM",
      end: "10:00 AM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "SAMSTHA GROUND",
      href: event_details["Up Down Race"].detailsUrl,
    },
    {
      id: 2,
      text: "DODGEBALL IN CIRCLE",
      Ename: "DODGEBALL IN CIRCLE",
      startRow: 4,
      endRow: 5,
      startCol: 13,
      endCol: 18,
      start: "9:30 AM",
      end: "10:00 AM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "SAMSTHA GROUND",
      href: event_details["Dodgeball In Circle"].detailsUrl,
    },
    {
      id: 3,
      text: "GROUP SINGING",
      Ename: "SARGAM SYMPHONY",
      startRow: 5,
      endRow: 12,
      startCol: 4,
      endCol: 6,
      start: "10:00 AM",
      end: "1:30 PM",
      background: "linear-gradient(to right, #ff00b3, #00b3ff)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["Sargam Symphony"].detailsUrl,
    },
    {
      id: 4,
      text: "SOLO DANCE",
      Ename: "SOLO SYNERGY",
      startRow: 7,
      endRow: 13,
      startCol: 2,
      endCol: 4,
      start: "11:00 AM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #13547a, #80d0c7)",
      location: "STAGE 2",
      href: event_details["Solo Synergy"].detailsUrl,
    },
    {
      id: 5,
      text: "MAKEUP COMPETITION",
      Ename: "COSMETIC CLASH",
      startRow: 7,
      endRow: 11,
      startCol: 6,
      endCol: 8,
      start: "11:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "MECHANICAL CIRCLE",
      href: event_details["Cosmetic Clash"].detailsUrl,
    },
    {
      id: 6,
      text: "KALAKAAR KATTA",
      Ename: "KALAKAAR KATTA",
      startRow: 7,
      endRow: 19,
      startCol: 10,
      endCol: 12,
      start: "11:00 AM",
      end: "5:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "INSTRUMENTATION QUADRANGLE",
      href: event_details["Kalakar Katta"].detailsUrl,
    },
    {
      id: 7,
      text: "ESCAPE ROOM",
      Ename: "ESCAPE ROOM",
      startRow: 7,
      endRow: 11,
      startCol: 8,
      endCol: 10,
      start: "11:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "MECHANICAL BUILDING",
      href: event_details["Escape Room"].detailsUrl,
    },
    {
      id: 8,
      text: "MASTERCHEF COMPETITION",
      Ename: "TASTE WARS",
      startRow: 5,
      endRow: 13,
      startCol: 14,
      endCol: 16,
      start: "10:00 AM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #a8ffb4, #f0e130)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Taste Wars"].detailsUrl,
    },
    {
      id: 9,
      text: "FLUID ART WORKSHOP",
      Ename: "FLUID ART WORKSHOP",
      startRow: 9,
      endRow: 13,
      startCol: 12,
      endCol: 14,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MECHANICAL BUILDING",
      href: event_details["Fluid Art Frenzy"].detailsUrl,
    },
    {
      id: 10,
      text: "BEAUTY PEAGENT",
      Ename: "MISS CUMMINS - BEAUTY CONTENST",
      startRow: 13,
      endRow: 18,
      startCol: 2,
      endCol: 4,
      start: "2:00 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #00b4db, #0083b0)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["Miss Cummins-Beauty Contest"].detailsUrl,
    },
    {
      id: 11,
      text: "QUIZ COMPETITION",
      Ename: "LIGHTS QUIZ ACTION",
      startRow: 13,
      endRow: 17,
      startCol: 4,
      endCol: 6,
      start: "2:00 PM",
      end: "4:00 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "KB JOSHI AUDITORIUM",
      href: event_details["Lights, Quiz, Action!"].detailsUrl,
    },
    {
      id: 12,
      text: "ART RELAY",
      Ename: "ART-A-THON",
      startRow: 14,
      endRow: 18,
      startCol: 6,
      endCol: 10,
      start: "2:30 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #ff7eb3, #ffb347",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Art-a-thon"].detailsUrl,
    },
    {
      id: 14,
      text: "NARRATIVE STORY,STANDUP,MONOLOGUE",
      Ename: "MIC IN THE OPEN",
      startRow: 15,
      endRow: 19,
      startCol: 12,
      endCol: 18,
      start: "3:00 PM",
      end: "5:00 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "STAGE 2",
      href: event_details["Mic In The Open"].detailsUrl,
    },
    {
      id: 15,
      text: "BAND PERFORMANCE",
      Ename: "STAR NIGHT 2",
      startRow: 21,
      endRow: 24,
      startCol: 2,
      endCol: 18,
      start: "6:00 PM",
      end: "7:30 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "SAMSTHA GROUND",
    },
    {
      id: 16,
      text: "DJ NIGHT ",
      Ename: "DJ NIGHT",
      startRow: 24,
      endRow: 27,
      startCol: 2,
      endCol: 18,
      start: "7:30 PM",
      end: "9:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "SAMSTHA GROUND",
    },
    {
      id: 17,
      text: "UKULELE WORKSOP ",
      Ename: "UKULELE WORKSOP",
      startRow: 5,
      endRow: 13,
      startCol: 16,
      endCol: 18,
      start: "10:00 AM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "IT BUILDING",
      href: event_details["Ukulele Unplugged"].detailsUrl,
    },
  ],
  Day4: [
    {
      id: 1,
      text: "CLASSICAL DANCE",
      Ename: "नृत्यांजलि ",
      startRow: 1,
      endRow: 7,
      startCol: 2,
      endCol: 5,
      start: "10:00 AM",
      end: "1:00 PM",
      background: "linear-gradient(to right, #4568dc, #b06ab3)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["Nrutyanjali"].detailsUrl,
    },
    {
      id: 2,
      text: "TREASURE HUNT",
      Ename: "TALAASH",
      startRow: 2,
      endRow: 6,
      startCol: 5,
      endCol: 8,
      start: "10:30 AM",
      end: "12:30 PM",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
      location: "ALL CAMPUS",
      href: event_details["Talaash"].detailsUrl,
    },
    {
      id: 3,
      text: "CLASS DRAMA",
      Ename: "THE DRAMA PREMIER LEAGUE",
      startRow: 7,
      endRow: 14,
      startCol: 2,
      endCol: 5,
      start: "1:00 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "MAIN BUILDING QUADRANGLE",
      href: event_details["The Drama Premiere League"].detailsUrl,
    },
    {
      id: 4,
      text: "INTER COLLEGE NUKKAD NATAK",
      Ename: "NAZARIYA",
      startRow: 5,
      endRow: 13,
      startCol: 8,
      endCol: 11,
      start: "12:00 PM",
      end: "4:00 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "STAGE 2",
      // href: event_details["Nazariya"].detailsUrl,
    },
    {
      id: 5,
      text: "RANGOLI COMPETITION",
      Ename: "RANGOLI-THE-VIBES",
      startRow: 5,
      endRow: 11,
      startCol: 11,
      endCol: 14,
      start: "12:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      location: "BETWEEN MAIN & IT BUILDING",
      href: event_details["Rangoli-the-vibes"].detailsUrl,
    },
    {
      id: 6,
      text: "PUNCH NEEDLE WORKSHOP",
      Ename: "PUNCH NEEDLE WORKSHOP",
      startRow: 5,
      endRow: 9,
      startCol: 14,
      endCol: 17,
      start: "12:00 PM",
      end: "2:00 PM",
      background: "linear-gradient(to right, #85e085, #80d4ff)",
      location: "INSTRUMENTATION QUADRANGLE",
      href: event_details["Punch Needle"].detailsUrl,
    },
    {
      id: 7,
      text: "BEST OUT OF WASTE",
      Ename: "BINCREDIBLE",
      startRow: 7,
      endRow: 11,
      startCol: 5,
      endCol: 8,
      start: "1:00 PM",
      end: "3:00 PM",
      background: "linear-gradient(to right, #f7b731, #e74c3c)",
      location: "MECHANICAL CIRCLE",
      href: event_details["Bincredible"].detailsUrl,
    },
    {
      id: 8,
      text: "DHOL MIRAVNUK",
      Ename: "CUMMINS गर्जना",
      startRow: 13,
      endRow: 14,
      startCol: 11,
      endCol: 17,
      start: "4:00 PM",
      end: "4:30 PM",
      background: "linear-gradient(to right, #ff0080, #40e0d0)",
      location: "ALL CAMPUS",
    },
    {
      id: 9,
      text: "PRIZE DISTRIBUTION",
      Ename: "PRIZE DISTRIBUTION",
      startRow: 16,
      endRow: 20,
      startCol: 2,
      endCol: 17,
      start: "5:30 PM",
      end: "7:30 PM",
      background: "linear-gradient(to right, #00f260, #0575e6)",
      location: "MAIN BUILDING QUADRANGLE",
    },
    {
      id: 10,
      text: "GANDHAAR DINNER",
      Ename: "GANDHAAR FEAST",
      startRow: 20,
      endRow: 24,
      startCol: 2,
      endCol: 17,
      start: "7:30 PM",
      end: "9:30 PM",
      background: "linear-gradient(to right,#ff6fd8, #3813c2)",
      location: "SAMSTHA GROUND",
    },
  ],
};

const timesByDay = {
  Day1: [
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
  ],
  Day2: [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
  ],
  Day3: [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
  Day4: [
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleEventClick = (event, eventElement) => {
    const rect = eventElement.getBoundingClientRect();
    const wrapperRect = document
      .querySelector(".schedule-wrapper")
      .getBoundingClientRect();

    setModalData(event);
    setModalPosition({
      top: rect.top - wrapperRect.top + rect.height / 2,
      left: rect.left - wrapperRect.left + rect.width / 2,
    });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const events = daySchedules[selectedDay];
  const times = timesByDay[selectedDay];

  return (
    <div>
      <h1 className="schedule-title">Schedule</h1>
      <div className="schedule-wrapper">
        <div className="day-buttons">
          {Object.keys(daySchedules).map((day) => (
            <button
              key={day}
              className={`day-button ${selectedDay === day ? "active" : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div
          className={`schedule-container ${
            selectedDay === "Day3" ? "day-3" : ""
          }`}
        >
          {times.map((time, index) => (
            <div
              key={index}
              className="time-slot-container"
              style={{ gridRow: index * 2 + 1 }}
            >
              <div className="time-label">{time}</div>
            </div>
          ))}

          {events.map((event) => (
            <div
              key={event.id}
              className="event"
              style={{
                gridColumn: `${event.startCol} / ${event.endCol}`,
                gridRow: `${event.startRow} / ${event.endRow}`,
                background: event.background,
              }}
              onClick={(e) => handleEventClick(event, e.currentTarget)}
            >
              <div className="start-time">{event.start}</div>

              <div
                className={`event-Ename ${
                  (selectedDay === "Day3" && event.id === 2) ||
                  (selectedDay === "Day4" && event.id === 8) ||
                  (selectedDay === "Day2" && event.id === 2) ||
                  (selectedDay === "Day2" && event.id === 14) ||
                  (selectedDay === "Day2" && event.id === 15)
                    ? "special-event"
                    : ""
                }`}
              >
                {event.Ename}
              </div>

              <div className="end-time">{event.end}</div>
            </div>
          ))}
        </div>

        {modalVisible && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal"
              style={{
                position: "absolute",
                // top: modalPosition.top,
                // left: modalPosition.left,
                // transform: "translate(-50%, -50%)",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
            >
              <h3>{modalData.Ename}</h3>
              <h2>{modalData.text}</h2>
              <p>
                <strong>Start:</strong> {modalData.start}
              </p>
              <p>
                <strong>End:</strong> {modalData.end}
              </p>
              <p>
                <strong>Location:</strong> {modalData.location}
              </p>

              {modalData.href ? (
                <p>
                  <strong>Event Details: </strong>
                  <a href={modalData.href} className="details-link">
                    More Details
                  </a>
                </p>
              ) : (
                <p></p>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
