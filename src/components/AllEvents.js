import React from "react";
import { useParams } from "react-router-dom";
import EventPage from "./EventPage";

// Event Details
const events = {
  interClassDance: {
    image: require("../images/dance.png"),
    title: "Jhoom Junction",
    subtitle: "Inter-Class Dance",
    details:
      "Showcase your class's talent and unity in the 'Jhoom Junction' Inter-Class Group Dance Event! With passion and competitive spirit, let your team light up the stage, blending creativity and energy into a performance that celebrates both rivalry and togetherness. Dance your heart out and make your class proud!",
    structure: [
      "Team size: 12-19 (12-16 performers + 3 volunteers)",
      "Participation: 1 team from each class",
      "Venue: Samstha Ground",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 5:00 PM - 10:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completing registration, no alterations to the details will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each team will have 5 minutes (4 minutes for the performance and 1 minute for stage clearance).",
          "The rehearsal schedule and deadlines for soundtrack submission will be shared by the coordinators, and teams must comply with these instructions.",
          "Participants must strictly adhere to the time slots allotted for practice and performance, as missed slots will not be rescheduled.",
        ],
      },
      {
        heading: "Soundtracks and Songs",
        points: [
          "Teams can select songs, themes, and dance styles of their choice.",
          "Themes are optional but will help in earning additional points.",
          "A song may only be repeated twice during the event.",
          "The theme of the dance cannot be repeated. Registration of songs and themes will be on a first-come, first-serve basis.",
          "All songs submitted by the team must be included in the final soundtrack.",
        ],
      },
      {
        heading: "Costumes and Props",
        points: [
          "Revealing costumes will not be allowed.",
          "Costumes must be verified with the coordinators upon request.",
          "Simple props that can be carried on and off the stage easily are permitted.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Theme",
          "Dancing skills",
          "Originality of ideas",
          "Use of props, costumes, and choreography",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must maintain decency in their performance and refrain from making racial, religious, or offensive remarks.",
          "The participants will have to follow strict punctuality related to the time slots allotted for practice and the main performance. Once missed, time will not be rescheduled.",
          "Any delay or non-compliance with the rules will result in disqualification.",
          "Decisions taken by the judges and event coordinators will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Rucha Joshi", phone: "9604282378" },
      { name: "Shruti Kothavade", phone: "8767824195" },
      { name: "Paridha Bhoite", phone: "9321649591" },
    ],
    registerLink: "https://forms.gle/px2vtA38sKyo3pPX9",
  },
  soloDance: {
    image: require("../images/dance.png"),
    title: "Solo Synergy",
    subtitle: "Solo Dance",
    details:
      " Step into the spotlight and let your passion take center stage in our Solo Dance Event! This is your chance to express your individuality, showcase your creativity, and captivate the audience with your unique moves. Dance to the rhythm of your story and own the stage in a celebration of talent, energy, and self-expression. Get ready to dazzle and make it a performance to remember – it's your moment to shine!",
    structure: [
      "Team size: 1 participant",
      "Participation: 1 participant per class",
      "Venue: Stage 2",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each team is allotted 3 minutes for the performance, with an additional 1 minute for stage setup and clearance.",
          "Exceeding the time limit will result in a deduction of points.",
          "Non-classical dance styles, including Bollywood, Hip-hop, Contemporary, Jazz, Freestyle, and similar genres, are allowed.",
          "Classical dance forms like Bharatanatyam or Kathak are not permitted; refer to the classical dance competition for those guidelines.",
        ],
      },
      {
        heading: "Soundtracks and Songs",
        points: [
          "The performance soundtrack must be submitted on time, as instructed by the coordinators.",
          "No changes to the soundtrack will be allowed after submission.",
        ],
      },
      {
        heading: "Costumes and Props",
        points: [
          "Only simple props that can be carried onto and off the stage just before the performance are permitted.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Dancing skills.",
          "Originality of ideas.",
          "Use of props, costumes and choreography.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must maintain decency and refrain from making racial, religious, or offensive remarks.",
          "Any delays caused by participants or failure to comply with the rules will lead to disqualification.",
          "The sequence of performances set by the coordinators will be final, and no requests to alter the order will be entertained.",
          "The judges’ decisions will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Sakshi Bansode", phone: "8600591667" },
      { name: "Komal", phone: "9022696146" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScLqiMEY-Yv-1t9p6XyoTXccdTl7ehM6E4b_HfD6U8-yH4Xyg/viewform?usp=sf_link",
  },
  classicalDance: {
    image: require("../images/dance.png"),
    title: "नृत्यांजलि",
    subtitle: "Classical Dance",
    details:
      "Embark on a graceful journey through the artistry of classical dance. Channel the elegance of tradition and weave your own story through every intricate move.Join us for a mesmerising exploration of cultural richness and timeless expressions – let your classical dance speak volumes on our stage!",
    structure: [
      "Team size: 1-5 members",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 10:00 AM - 1:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, no alterations will be accommodated under any circumstances.",
          "During the application process, it is compulsory to mention the level/exams of the chosen dance form.",
          "Participants will only be shortlisted if they have qualified for any exams in their chosen dance form.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Participants can perform a fusion of two dance forms in a single performance.",
          "To maintain authenticity, semi-classical elements are not allowed.",
          "Each performance is allotted 3 minutes, with an additional 1 minute for stage setup and clearance.",
          "Points will be deducted for exceeding the time limit.",
          "Participants should wear traditional costumes authentic to their chosen dance form.",
        ],
      },
      {
        heading: "Soundtrack and Music",
        points: [
          "All songs are acceptable, provided they meet decency standards.",
          "The use of classical music that complements the chosen dance style is highly recommended.",
          "The soundtrack must be submitted on time as instructed by the coordinators.",
          "No changes to the soundtrack will be allowed after submission.",
        ],
      },
      {
        heading: "Props",
        points: [
          "Only simple props that can be carried on and off the stage just before the performance are permitted.",
          "Props need to be approved by the coordinators beforehand.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "The sequence of performances set by the coordinators will be final, and requests to alter the order will not be entertained.",
          "The judges’ decisions will be final and binding.",
          "Participants must observe decency and refrain from making racial, religious, or offensive remarks.",
          "Any delays caused by participants or failure to comply with the rules will lead to disqualification.",
        ],
      },
    ],
    contacts: [
      { name: "Purva Sarda", phone: "9021750026" },
      { name: "Gayatri More", phone: "9561937665" },
      { name: "Bhargavi Girisagar", phone: "9373602852" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_1-cY9oWbhSTy3KZvUnqkHpim9ThaBwihNLnaWoeyzv7Ahw/viewform?usp=sf_link",
  },
  streetdance: {
    image: require("../images/dance.png"),
    title: "The Street Brawl",
    subtitle: "Street Dance",
    details:
      " Get ready for an electrifying showdown as 37 dynamic dancers face off in a high-energy battle of rhythm, style, and raw talent. Watch as creativity and passion collide in a series of exhilarating rounds, leading to the ultimate face-off for dance supremacy. Who will rise as the champion of the floor? Join us to witness the intensity, drama, and unmatched energy of the Dance Battle!",
    structure: [
      "Team size: 1 participant",
      "Participation: 1 participant per class",
      "Venue: Stage 2",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 2:00 PM - 4:00 PM",
    ],
    structureNote: [
      "Round 1: 36 are paired, and 1 gets a bye. 18 winners + 1 bye = 19 advance.",
      "Round 2: 18 are paired, and 1 gets a bye. 9 winners + 1 bye = 10 advance.",
      "Round 3: 10 are grouped into 2 groups of 3 and 1 group of 4. 3 winners advance.",
      "Final Round: The 3 winners face off to decide the champion.",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Rounds",
        points: [
          "Round 1: 36 participants are paired, and 1 gets a bye. 18 winners + 1 bye = 19 advance.",
          "Round 2: 18 are paired, and 1 gets a bye. 9 winners + 1 bye = 10 advance.",
          "Round 3: 10 participants are grouped into 2 groups of 3 and 1 group of 4. 3 winners advance.",
          "Final Round: The 3 winners face off to decide the champion.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Opponents for each round will be decided on the spot during the event.",
          "The organisers will randomly select and play music for participants to perform to in all rounds.",
          "Each face-off will last 2 minutes, and adherence to the time limit is crucial.",
          "Classical and Folk dances are not permitted. (Refer to the classical dance competition rules for details.)",
          "Simple props that can be carried on and off the stage just before the performance are permitted.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Technique and skill.",
          "Synchronisation.",
          "Creativity and originality.",
          "Stage presence and showmanship.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must observe decency and refrain from making racial, religious, or offensive remarks.",
          "Disrespectful behaviour, including inappropriate gestures or actions, will result in disqualification. However, playful jesting and mild teasing are permitted.",
          "The decisions of the judges and organisers will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Aarohii Hanji", phone: "9765154647" },
      { name: "Samruddhi Patil", phone: "9765154647" },
    ],
    registerLink: "https://forms.gle/65Sx4E94wCMBruvC6",
  },

  groupSinging: {
    image: require("../images/music.png"),
    title: "Sargam Symphony",
    subtitle: "Group Singing",
    details:
      "Unite your voices and let the music soar in this dynamic group singing competition! Perform your favorite songs in English, Hindi, or Marathi, all within a five-minute showcase of creativity, harmony, and stage charisma. Celebrate the power of teamwork and the joy of music as you captivate the audience with your unique blend of rhythm and melody. It's time to harmonize, innovate, and shine together on stage!",
    structure: [
      "Team Size: 2 (minimum) / 5 (maximum)",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 10:00 AM - 1:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "The performance must last 5 minutes (3 minutes for performance + 2 minutes for stage clearing).",
          "Exceeding the time limit will result in the reduction of points.",
          "Participants should be ready with their instruments or songs before their performance and should not take too much time to assemble on the stage.",
          "Vocal beats in raps are allowed, and mixing of Bollywood + Hollywood songs is permitted.",
          "Remix versions of old songs can also be used.",
        ],
      },
      {
        heading: "Song Selection and Requirements",
        points: [
          "Songs must be registered before the event as instructed by the coordinators.",
          "No repetition of songs will be allowed. Song priority will be on a first-come, first-serve basis.",
          "The selection of songs is up to the participants, with the condition that the songs must be in English, Hindi, or Marathi.",
          "Innovative compositions are most welcomed.",
          "If any personal instrument is used, it should be informed before the event.",
          "If a particular setup is required for a performance, notify the event coordinators well in advance.",
          "Karaoke should be submitted as per the instructions from the coordinators.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Creativity.",
          "Team Dynamics and Showmanship.",
          "Vocal, Pitching, Rhythm, and Diction.",
          "Costume.",
          "Overall Impression, Impact, and Stage Presence.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must observe decency and refrain from using profanity.",
          "The decision taken by the coordinators and judges will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Sneha Ranade", phone: "9172457943" },
      { name: "Rujuta Kulkarni", phone: "8983083422" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfebzRnB9w_cc7Gf5hI1GoQ3gleGxmOJJzdoxk67JgApUNZ6Q/viewform?usp=sf_link",
  },
  departmentAntakshariStudents: {
    image: require("../images/open.png"),
    title: "Suron ke Sikandar",
    subtitle: "Department Antakshari-Students",
    details:
      "Department Antakshari challenges teams to showcase their musical prowess through three exciting rounds. From song lyric decrypting to singing challenges, culminating in the ultimate Antakshari face-off. May the most melodious team emerge victorious!",
    structure: [
      "Participation: 1 team per department (1 student per year)",
      "Team Size: 4",
      "Venue: KB Joshi Auditorium",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 10:00 AM - 12:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it is considered final, and no alterations will be accommodated.",
        ],
      },
      {
        heading: "Rounds",
        subheading: "Round 1: Song Lyric Decryptor",
        points: [
          "Objective: Teams must guess the correct Hindi song based on lyrics written in English on a chit.",
          "Time Limit: 45 seconds to think of the song.",
          "Chits: Each team gets 2 chits.",
          "Scoring: 5 points for each correct song.",
          "Elimination: No eliminations in this round.",
        ],
      },
      {
        subheading: "Round 2: Song Search Showdown",
        points: [
          "Objective: Teams must sing songs that include a word written on a chit.",
          "Time Limit: 90 seconds to think of songs.",
          "Chits: Each team gets 1 chit.",
          "Scoring: 5 points for each song sung (at least 1 verse).",
          "Elimination: No eliminations in this round.",
        ],
      },
      {
        subheading: "Round 3: Ultimate Antakshari (Final Round)",
        points: [
          "Objective: Teams take turns singing songs in a traditional Antakshari format.",
          "Time Limit: 20 seconds to think of a song.",
          "Turns: 3 turns for each team.",
          "Scoring: 10 points for each correct song.",
          "No song can be repeated.",
          "At least 1 verse of the song must be sung.",
          "Elimination: No eliminations in this round.",
        ],
      },
      {
        heading: "Lifelines",

        subheading: "Sangeet Sathi:",
        points: [
          "Round 1: Teams can take help from the audience to guess the song.",
          "Round 2: The audience can suggest only one song to the team.",
        ],
      },
      {
        subheading: "Sangeet Shuffle",
        points: [" Teams can pick other chits."],
      },
      {
        heading: "Lifeline Rules",
        points: [
          "Lifelines are available only in Rounds 1 and 2.",
          "Only one lifeline can be used per round.",
          "Each lifeline can only be used once during the entire competition.",
          "Using a lifeline results in a 2-point deduction.",
        ],
      },
      {
        heading: "Eliminations",
        points: [
          "There will be no eliminations in any rounds.",
          "The winner will be declared based on the overall scores from all 3 rounds.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Use of phones or the internet during the event is strictly prohibited.",
          "Taking unauthorized help from the audience will result in a deduction of points.",
          "The decision of the judges and coordinators is final and binding and must be accepted gracefully.",
        ],
      },
    ],

    contacts: [
      { name: "Sakshi Deshmukh", phone: "7055929394" },
      { name: "Shruti Srinivasan", phone: "8208996654" },
    ],
    registerLink: "https://forms.gle/3hd3Rsw9Jw1W4gF56",
  },
  departmentAntakshariFaculty: {
    image: require("../images/open.png"),
    title: "The Great Faculty Sing-Off",
    subtitle: "Department Antakshari-Faculty",
    details:
      "Department Antakshari challenges teams to showcase their musical prowess through three exciting rounds. From song lyric decrypting to singing challenges, culminating in the ultimate Antakshari face-off. May the most melodious team emerge victorious!",
    structure: [
      "Participation: 1 team per department ",
      "Team Size: -",
      "Venue: Main Building Quadrangle",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "There will be 5 teams, each representing a department.",
          "Each team must pick a team captain who will coordinate during the rounds.",
          "Everyone in the team should participate.",
          "Teams are encouraged to sing, clap, and cheer for their team members.",
          "All team members should sing with confidence and enjoy the moment.",
        ],
      },
      {
        heading: "Rounds",
        subheading: "Round 1: Traditional Round (Phonetics-Based)",
        points: [
          "The first team starts by singing any song.",
          "The next team must sing a song starting with the phonetic sound of the last word in the previous song.",
          "Example: If the song ends with 'Chalte' (ते), the next song must start with 'त' (e.g., 'तुम ही हो').",
          "Allowed Songs: Bollywood (old or new) and Marathi songs.",
        ],
      },
      {
        subheading: "Round 2: Bollywood Quiz Round",
        points: [
          "A short snippet (5-10 seconds) of a Bollywood song will be played.",
          "Teams must guess the name of the song and then sing it.",
          "Example: If the opening beats of 'Dil Dhadakne Do' are played, the team must identify and sing the song.",
          "Allowed Songs: Bollywood hits only.",
        ],
      },
      {
        subheading: "Round 3: Emotion Round",
        points: [
          "An emotion (e.g., love, joy, sadness) will be announced.",
          "Teams must sing songs that represent the given emotion.",
          "Example: If the emotion is 'joy,' a team can sing 'Zindagi Ek Safar Hai Suhana.'",
          "Allowed Songs: Bollywood (old or new) and Marathi songs.",
        ],
      },
      {
        subheading: "Round 4: Song Relay Round",
        points: [
          "The first team sings a song.",
          "The next team must continue with a song that starts with the last word of the previous song.",
          "Example: If the song is 'Dil Hai Ke Manta Nahi' (last word = 'Nahi'), the next team can sing 'Nahin Nahin Abhi Nahi.'",
          "Allowed Songs: Songs from any genre.",
        ],
      },
      {
        subheading: "Round 5: Word-Based Round",
        points: [
          "A word will be provided to the team.",
          "Each team must sing five songs that include that word in the title or lyrics.",
          "Example: If the word is 'Dil,' teams can sing songs like 'Dil Dhadakne Do,' 'Dil Se,' or 'Dil Hai Ke Manta Nahi.'",
          "Allowed Songs: Bollywood (old or new) and Marathi songs.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each team will have 1 minute to sing their song.",
          "If a team takes too long or is unsure, they can pass the turn to the next team.",
        ],
      },
      {
        heading: "Song Selection",
        points: [
          "Teams can choose Bollywood (old or new) or Marathi songs.",
          "The focus is on enjoying the moment and showcasing creativity.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Points will be awarded based on Enthusiasm, Creativity, and Accuracy of the songs.",
          "The spirit of participation matters more than perfect lyrics or singing.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Cheer for every team and maintain a friendly and respectful atmosphere.",
          "The focus is on having fun, celebrating music, and fostering camaraderie.",
          "The decision of the judges and coordinators is final and binding and must be accepted gracefully.",
        ],
      },
    ],

    contacts: [
      { name: "Tejaswini Patkar", phone: "9730044087" },
      { name: "Mrudula Dafne", phone: "7447835329" },
    ],
    registerLink: "/registration",
  },
  CumminsGotLatent: {
    image: require("../images/open.png"),
    title: "Cummins Got Latent",
    subtitle: "",
    details:
      "Cummins's Got Latent is an electrifying talent showdown where students from each class unleash their creativity and unique skills! Whether it’s performing arts, literary brilliance, or extraordinary talents like magic or beatboxing, this is your time to shine. The catch? Predict your score before stepping on stage! Perform within 2 minutes, wow the judges, and if your prediction matches their average score, you take the crown. It’s a thrilling mix of talent, strategy, and confidence – so get ready to dazzle! ",
    structure: [
      "Team Size: 1",
      "Participation: 1 student per class",
      "Venue: Stage 2",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 12:00  - 1:30 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Once registration is completed, it will be considered final, and no changes or alterations will be allowed under any circumstances.",
          "Each class can nominate 1 participant to perform in the competition.",
          "Participants must select a category from the approved list of talents.",
        ],
      },
      {
        heading: "Categories of Talent",
        points: [
          "Performing Arts: Stand-Up Comedy, Singing, Dancing and Drama (Solo/Group)",
          "Literary Arts: Poetry (Spoken Word or Recital) and Storytelling",
          "Miscellaneous: Magic Tricks, Beatboxing and any unique or unconventional talent",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each performance must not exceed 2 minutes.",
          "The performance will be stopped if it exceeds 2 minutes.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Before their performance, participants must predict their own score out of 10.",
          "Judges will cross-question the participants after their performance and provide scores.",
          "The average score from all judges will be calculated.",
          "The participant whose predicted score matches the judges’ average score will be declared the winner.",
          "If no participant's prediction matches the average, no winner will be declared.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Use of offensive content, including inappropriate language or behavior, will result in either a 1-point deduction or disqualification, depending on the severity of the offense.",
          "The decision of coordinators and judges will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Rujuta Kulkarni", phone: "8983083422" },
      { name: "Mrudula Dafne", phone: "7447835329" },
    ],
    registerLink: "https://forms.gle/iwu3g1Y3McUEkAX4A",
  },
  DumbCharades: {
    image: require("../images/open.png"),
    title: "Shantit Kranti",
    subtitle: "Dumb Charades Competition",
    details:
      "Get ready to unleash your inner actor and test your wit in 'Shantit Kranti,' an exciting interdepartmental Dumb Charades competition! Expect laughter, teamwork, and maybe a little bit of friendly rivalry as you compete to guess movie titles, song hooks, and more. Toh aao dekhe kis department mei kitna hai dum!",
    structure: [
      "Team Size: 6 Members(Minimum 4,Maximum 6)",
      "Participation: 1 team per department (1 student per year) ",
      "Venue: Main Building Quadrangle",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Once registration is completed, it will be considered final, and no changes or alterations will be allowed under any circumstances.",
          "Each team member is allowed to enact only once during the competition.",
          "However, all team members can guess any number of times during their turn.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "The time limit will vary for each round and will be announced at the beginning of the event.",
          "Only gestures are allowed for enacting.",
          "The use of props, sounds, or words is strictly prohibited.",
          "Teams can make multiple guesses within the allotted time during their turn.",
          "The first correct answer will be considered.",
          "If a team fails to guess the answer, the question will be passed to the next team.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "The team with the highest points at the end of all rounds will be declared the winner.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Disturbing other teams during their turns is strictly prohibited and may lead to penalties.",
          "Any form of cheating or unfair play will result in penalties or disqualification.",
          "Decisions made by the event coordinators regarding disputes or rule clarifications will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Sachi Shah", phone: "9175034745" },
      { name: "Ishita Patil", phone: "8237551931" },
    ],
    registerLink: "https://forms.gle/qKyGrGEiiNAqaFfeA",
  },
  KalakaarKatta: {
    image: require("../images/open.png"),
    title: "Kalakaar Katta",
    subtitle: "Art and Music Extravaganza",
    details:
      "Kalakaar Katta is a creative extravaganza blending art, music, and fun! Dive into a stunning art display and groove to the beats of an epic jamming session with live performances and open mic opportunities. Join us to immerse yourself in art, music, and the spirit of Gandhaar!",
    structure: [
      "Team Size: -",
      "Participation: Open to all departments",
      "Venue: Instrumentation Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 5:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Deadline for Artwork Submission",
        points: [
          "Participants must submit their artwork within the given deadline.",
        ],
      },
      {
        heading: "Shortlisting of Art Pieces",
        points: [
          "Art pieces will be shortlisted prior to display to ensure a well-organized and uncluttered presentation.",
        ],
      },
      {
        heading: "Collection of Art Pieces",
        points: [
          "The collection process for your art piece will be communicated through email.",
        ],
      },
    ],
    contacts: [
      { name: "Ishita Patil", phone: "8237551931" },
      { name: "Tanisha Joshi", phone: "7796760971" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/1Kh30UtSNhG59PAP5Z4I03ODdyvGqyTA2BAX8wMRAJ2s",
  },
  EscapeRoom: {
    image: require("../images/open.png"),
    title: "Escape Room",
    subtitle: "Thrilling Team Challenge",
    details:
      "Participants will be locked inside a building, teaming up in groups of four to tackle a series of thrilling challenges spread across mysterious locations. Each challenge completed unveils a clue to the next destination and a crucial digit for the ultimate password. The race is on to collect all the digits, return to the starting point within the 2-hour time limit, and crack the code to unlock the phone.",
    structure: [
      "Team Size: 4",
      "Participation: 1 team from each class (only first 20 teams: first come- first serve)",
      "Venue: Entire IT/Mech Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 1:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Participants must form teams of four. No substitutions are allowed once the game starts.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "The entire game must be completed within the 2-hour time limit.",
          "Teams must solve each challenge at a location to receive the clue for the next destination and a digit for the final password.",
          "Skipping challenges or locations is strictly prohibited.",
          "Given challenges need to be completed properly within the instructed time.",
          "The first team to successfully unlock the phone with the correct password within the time limit will be declared the winner.",
        ],
      },

      {
        heading: "Decorum and Conduct",
        points: [
          "Any form of cheating or sabotage will result in immediate disqualification.",
          "Running or unsafe behavior is not allowed.",
          "Participants must follow the coordinators’ instructions at all times.",
          "In case of disputes or rule violations, the decision of the coordinators will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Swarali Amrutkar", phone: "9823351654" },
      { name: "Aditi Pardeshi", phone: "7447554554" },
      { name: "Aarohii Hanji", phone: "9765154647" },
    ],
    registerLink: "/registration",
  },
  TreasureHunt: {
    image: require("../images/open.png"),
    title: "TALAASH",
    subtitle: "Treasure Hunt",
    details:
      "Gear up for an exciting adventure across the campus! Solve progressively challenging clues, follow color-coded hints, and explore hidden spots to uncover the ultimate treasure. Teams of 5 will compete to earn points for their class and the title of the best treasure hunters!",
    structure: [
      "Team Size: 4",
      "Participation: 1 team from each class",
      "Venue: Whole Campus",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 10:30 AM - 12:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Team size should be of 4 members ONLY. Incomplete teams will face a deduction in points.",
          "No last-minute changes in team members are allowed.",
          "Reporting time will be 30 minutes before the start of the event.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "The Treasure Hunt will consist of clues that must be solved in a specific order.",
          "The difficulty level will increase as the team progresses in the game.",
          "The first clue will be provided by the Panel members.",
          "Each clue will have a unique code number. Teams must follow the sequence by looking for clues marked with the corresponding code number.",
        ],
      },
      {
        heading: "Disqualification Rules",
        points: [
          "Failure to follow the rules will result in disqualification.",
          "Tampering with clues of other teams will lead to immediate disqualification.",
          "Help or prompting by any non-team member will result in disqualification.",
          "Use of mobile phones is strictly NOT allowed.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams must ensure no damage is caused to any college property during the event.",
          "Participants must maintain proper behavior throughout the event.",
          "The Game Coordinators’ decision will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Shreya Siddheshwar", phone: "9689444578" },
      { name: "Eva Deswal", phone: "9920267634" },
      { name: "Gayatri Kadu", phone: "9209115390" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScnm_eYUQZnu2wpeSHEFli3QY9fVDt90xoR122_2nQLmJ2FgQ/viewform?usp=sf_link",
  },
  btechfashionShow: {
    image: require("../images/Runway.png"),
    title: "HauteAura",
    subtitle: "BTECH Fashion Show",
    details:
      "Prepare for a fashion journey where your creativity takes center stage! This show breaks free from strict themes, encouraging you to unleash your originality with cool ideas, props, amazing costumes, and some stylish dance moves. Keep it classy, and let your performance be the voice.It's your moment to shine on stage, and every decision you make contributes to your extraordinary fashion adventure!",
    structure: [
      "Team Size: 18-21 students (14-17 performers + 4 for lights, costumes, hair, makeup, music management)",
      "Participation: 1 team from each FINAL YEAR class",
      "Venue: Samstha Ground",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 6:45 PM - 10:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "This event is exclusively for final-year students.",
          "Registration of themes will be on a first-come, first-serve basis. In case of repetition of themes or tracks, the team that registered first will retain the right to use the theme/track.",
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "The slots allotted by the organizers will be final and will not be changed.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Performance time for each team is 13 minutes, plus 1 minute for stage setup and clearance.",
          "The music track for the performance must be submitted as instructed by the coordinators. Any delay in track submission will result in a reduction of points.",
          "There is no specific theme for the fashion show. Teams are free to select any theme and will be judged accordingly.",
        ],
      },
      {
        heading: "Props and Costumes",
        points: [
          "The use of simple props that can be carried in and out of the stage immediately before and after the performance is allowed.",
          "All outfits should be approved by the coordinators. Failure to share outfits when requested may result in disqualification.",
          "Prop preparations and arrangements will be the team's responsibility.",
        ],
      },
      {
        heading: "Conduct and Decorum",
        points: [
          "Participants must maintain a certain amount of decency. Any act or move deemed vulgar or indecent will lead to disqualification.",
          "Participants are strictly instructed to NOT use college property like the library or reading halls during their practice. Violations will result in disqualification.",
          "Only females will be involved in costume fittings for the performance.",
        ],
      },
      {
        heading: "Meetings and Reporting",
        points: [
          "Participants must report 1.5 hours before their event and confirm their presence with the event coordinator.",
          "Any delay in the schedule will cause a reduction of points.",
          "The team leader must complete any specific requirements form as instructed by the coordinators.",
        ],
      },
      {
        heading: "Judging and Results",
        points: [
          "Marking will be based on the originality of ideas, props, costumes, and choreography.",
          "The decision of the coordinators will be final and binding.",
        ],
      },
      {
        heading: "Practice and Permissions",
        points: [
          "Permission for practice venues and outside choreographers is the team’s responsibility, and the event coordinators must be informed in advance.",
          "There will be only one team head in a team.",
        ],
      },
    ],

    contacts: [
      { name: "Tejaswini Patkar", phone: "9730044087" },
      { name: "Sameeksha Tantak", phone: "9096417769" },
    ],
    registerLink: "https://forms.gle/Z78PEMqiu2TkPCre6",
  },

  missCummins: {
    image: require("../images/Runway.png"),
    title: "Miss Cummins - Beauty Contest",
    subtitle: "Beauty Pageant",
    details:
      "Dive into the glamour with our Miss Cummins! Competition will take place in three rounds - Ramp Walk, Talent round and Q&A testing personality and intelligence. Shine in five categories: costume, ramp walk/modelling, fashion, personality, and stage presence. Awards await, from Miss Cummins to Best Personality—let the elegance and charm steal the spotlight!",
    structure: [
      "Team Size: 1",
      "Participation: 2 participants from each class",
      "Venue: Main Building Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 2:00 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Once registration is completed, it will be considered final, and no alterations will be allowed under any circumstances.",
          "The deadline to apply for Miss Cummins is 20th January 2025.",
        ],
      },
      {
        heading: "Elimination Round Requirements",
        points: [
          "The elimination round will be conducted in person on 22nd January 2025.",
          "Participants must bring and submit at least 3-4 physical printouts of their portfolio pictures.",
          "A questionnaire will be distributed and collected during the elimination round.",
          "After the elimination round, a jury of judges will select 20 participants to proceed to the event day rounds.",
        ],
      },
      {
        heading: "Soundtrack and Costumes",
        points: [
          "Participants must submit the required soundtrack for their walk and the final round as and when requested by the coordinators. Any requested changes must be followed without exception.",
          "All participants must ensure their costumes are appropriate, as inappropriate attire will result in immediate disqualification.",
        ],
      },
      {
        heading: "Rounds and Eliminations",
        subheading: "Round 1: Walk and Introduction",
        points: [
          "10 participants will be eliminated.",
          "Ramp walk: 30 seconds.",
          "Introduction: 30 seconds.",
          "Answering a spontaneous personal question: 30 seconds.",
          "Total time per participant: 1 minute and 30 seconds.",
        ],
      },
      {
        subheading: "Round 2: Talent Round",
        points: [
          "5 more participants will be eliminated.",
          "Talent performance (dance, music, etc.): 3 minutes.",
          "Participants will have 15 minutes to change outfits before this round if needed.",
          "Props and equipment must be brought by the participants.",
        ],
      },
      {
        subheading: "Round 3: Question and Answer Round",
        points: [
          "The final judging will take place for the 5 finalists.",
          "Finalists will answer one question posed by the judges.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Participants will be evaluated based on five categories: Costume, Walk, Talent, Personality and Stage Presence.",
          "Judges’ decisions are final and binding and must be accepted respectfully.",
        ],
      },
      {
        heading: "Awards",
        points: [
          "Miss Cummins: Winner of the pageant.",
          "Best Personality: Awarded for exceptional charm and individuality.",
          "Best Fashion Sense: Recognizing the participant with the best style.",
        ],
      },
    ],
    contacts: [
      { name: "Isha Madhavan", phone: "7507685007" },
      { name: "Aarya Kadam", phone: "7887799700" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc8k8XZ1sBTlceZU_wHa7cIzwTD_wlh8RRVwiiInwXUjxF-1A/viewform?usp=sf_link",
  },

  ecoVogue: {
    image: require("../images/Runway.png"),
    title: "Eco Vogue - Trashion",
    subtitle: "Trashion Event",
    details:
      "Transform trash into fashion at our 'Abstract Artistry Outfits' Trashion event! Teams craft entire outfits and accessories from recycled materials, cardboard, bubble wrap, fabric straps, etc earning points for creativity, sustainability, and craftsmanship. It's a runway where style meets sustainability!",
    structure: [
      "Team Size: 3 members (1 model + 2 designers)",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 1:00 PM - 3:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final; no alterations will be accommodated under any circumstances.",
          "If multiple teams from the same class submit the form, priority will be given to the team that registers first, following a first-come, first-served basis.",
        ],
      },
      {
        heading: "Costumes and Themes",
        points: [
          "The theme for Trashion this year is ‘Abstract Artistry Outfits.’",
          "Teams are permitted to commence the creation of their dresses right after registering for the competition.",
          "The entire dress must be crafted from scratch using trash materials, such as cans, bottle caps, chip packets, old cloth cutouts, trash bags, bottles, cups, used plates, electronic waste, used bubble wrap, combs, newspapers, etc.",
          "Teams are encouraged to earn additional points by crafting accessories (e.g., heels, bags, earrings, hair accessories, necklaces) from scratch.",
          "No pre-made or purchased items are allowed in the costume or accessories.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Teams must present their costume in front of the judges on the day of the event and explain their creative usage of trash.",
          "Each team will have 1 minute for the fashion walk, followed by a 2-minute Q&A session.",
          "Teams have the liberty to choose a soundtrack for their walk, which must be submitted as and when requested by the coordinators.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Points will be given on Creativity, sustainability, craftsmanship, overall impression, and impact.",
          "Additional points may be awarded for crafting accessories from scratch.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "The participants must maintain decency and decorum; indecent or vulgar costumes will lead to a reduction of points.",
          "Too revealing or short costumes (above knee length) will result in disqualification.",
          "If it is found that the attire is not legitimately created by the team, the judges reserve the right to disqualify them.",
          "The coordinators reserve the right to make decisions in unforeseen circumstances or disputes.",
        ],
      },
    ],
    contacts: [
      { name: "Aarya Kadam", phone: "7887799700" },
      { name: "Srushti Tarate", phone: "7770004893" },
    ],
    registerLink: "https://forms.gle/7zVHq91sgYd5iGs28",
  },
  debateCompetition: {
    image: require("../images/Literary.png"),
    title: "Goonj 3.0",
    subtitle: "Debate Competition",
    details:
      "TDSC-The Debating Society of Cummins brings you solo debate where the speaker takes a stance on a topic and then switches sides after a set amount of time, presenting both the pros and cons of the particular motion.",
    structure: [
      "Team Size: 1",
      "Participation: 1 team from each class",
      "Venue: Stage 2",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "The duration of the contest will be 3 minutes.",
          "The topic for the debate will be given 10 minutes prior to the actual event.",
          "Initially, the candidate has to speak for the motion.",
          "As soon as the buzzer is heard, the candidate must change their stance and speak against the motion.",
          "The buzzer will go off at the organizer’s discretion.",
          "Failure to change the stance will result in deduction of points.",
          "This cycle will continue until the 3 minutes are up.",
          "The candidate will be notified 10 seconds prior to the allotted time to sum up their argument.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "In this turn-coat debate format, the emphasis is on transitions, the strength of the argument, and the balancing of opinions.",
          "The topics will be fun, engaging, and challenging.",
          "The content of the speech will be thoroughly checked for any traces of copyright violation, plagiarism, or AI-generated writing.",
          "Candidates found in violation will be disqualified.",
          "Evaluation of presentation and speaking style, including body language and vocal style.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "The decision of the judges will be final.",
          "Any challenges to the authority of the esteemed judges will not be entertained.",
        ],
      },
    ],
    contacts: [
      { name: "Tanushka Nimbalkar(TDSC Member)", phone: "8149966038" },
      { name: "Apurva Magdum(TDSC Member)", phone: "8149827582" },
    ],
    registerLink: "https://forms.gle/1xVPTxazmJgmgJom9",
  },

  quizCompetition: {
    image: require("../images/Literary.png"),
    title: "Lights, Quiz, Action!",
    subtitle: "All In One Quiz",
    details:
      "Gear up for three exciting rounds in the Quizmania event! From text-based questions to enacting scenes in a bonus round, and finally, a buzzer round testing your quick thinking.",
    structure: [
      "Team Size: 5",
      "Participation: 1 team from each class",
      "Venue: KB Joshi Auditorium",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 2:00 PM - 4:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Rounds",
        subheading: "Round 1: Dialogue Fusion",
        points: [
          "In this round, participants will be given hints of a dialogue.",
          "Participants must guess the correct dialogue and the movie from which it is taken.",
        ],
      },
      {
        subheading: "Round 2: Movie Plot Summaries",
        points: [
          "In this round, participants will be provided with a very brief, possibly vague summary of a well-known movie plot.",
          "Participants must guess the correct movie from this short description.",
          "This round tests participants' ability to recognize movies from a unique angle based on key plot elements.",
        ],
      },
      {
        subheading: "Round 3: Buzzer Round",
        points: [
          "Participants will be shown images for a limited time period.",
          "After the images disappear, they must guess the answer in this 'fastest finger first' round.",
        ],
      },
      {
        heading: "Scoring and Results",
        points: [
          "Results will be finalized based on the average score of all three rounds.",
          "The final results will be announced on the prize distribution day.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: ["Any decision taken by the Event Coordinators will be FINAL."],
      },
    ],
    contacts: [
      { name: "Kashish Patil", phone: "9834645651" },
      { name: "Srushti Tarate", phone: "7770004893" },
    ],
    registerLink: "https://forms.gle/dhpac4Jd6eEey9CY7",
  },

  spellingBee: {
    image: require("../images/Literary.png"),
    title: "Spellbound",
    subtitle: "Spelling Bee/Vocab Builder",
    details:
      "Navigate through the life-size maze while completing word-related challenges. Accumulate points by successfully completing tasks, and aim to reach the end of the maze within the allotted time for bonus points.",
    structure: [
      "Team Size: 2-3 members",
      "Participation: One team from each class",
      "Venue: KB Joshi Auditorium",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Each player rolls the dice in turn to determine their movement.",
          "Move forward or backward based on the number rolled.",
          "Players must pick a chit from the jar corresponding to the block’s color.",
          "Complete the task described on the chit.",
          "Players must complete their task before their next turn.",
          "If a task is incomplete when their turn comes, they automatically lose points for that task.",
        ],
      },
      {
        heading: "Scoring",
        points: [
          "Successfully completing a task earns points.",
          "Failing a task results in a point deduction.",
          "Bonus points are awarded for creativity, speed, or exceptional performance.",
          "Players reaching the maze’s end within the time limit receive bonus points.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "All players can continue participating in tasks until the slot ends, even if they’ve completed the maze.",
          "Participants must maintain proper behavior throughout the event.",
          "The Coordinators’ decision will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Isha Madhavan", phone: "7507685007" },
      { name: "Twisha Gohil", phone: "9545944388" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/1QfL4g95HmP0QJBkMAJ31KY7I9-G21SO6juNVUlPDd40/",
  },

  openMic: {
    image: require("../images/Literary.png"),
    title: "Mic In The Open",
    subtitle: "Monologue/Standup/ Story",
    details:
      "The Open Mic is a vibrant and inclusive platform where participants showcase their storytelling, poetic, comedic, or dramatic talents. Whether it’s Shayari, Stand-up Comedy, Storytelling, Monologues, or Poetry, the stage is open to all creative expressions.",
    structure: [
      "Team Size: 1",
      "Participation: 1 participant from each class",
      "Venue: Stage 2",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 3:00 PM - 5:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
          "Participants must register their narrative category i.e. Shayari, Standup, poetry, storytelling, and monologue before the event.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each performance must be between 3 to 4 minutes. Exceeding the time limit will result in point deductions.",
          "Performance can be in either English, Hindi, or Marathi language.",
          "Performances must avoid offensive language, hate speech, or inappropriate content.",
          "Original content is highly encouraged. Plagiarism may lead to disqualification.",
          "Minimal props are allowed if they enhance the performance.",
          "Participants can mix genres (e.g., storytelling with humor or poetry with music).",
          "Participants must begin their performance within 30 seconds of being called.",
          "Interaction with the audience is allowed but must remain respectful.",
          "Disruptive behavior on stage will lead to disqualification.",
        ],
      },

      {
        heading: "Judging Criteria",
        points: [
          "The judging criteria are consistent across all narrative styles.",
          "Relevance, creativity, and depth of the narrative.",
          "Voice modulation, articulation, and emotional connection.",
          "Uniqueness and personal touch in the performance.",
          "Ability to captivate and connect with the audience.",
          "Confidence, posture, and overall impact.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: ["The decision of the judges will be final and binding."],
      },
    ],
    contacts: [
      { name: "Priyanka Dhawale", phone: "8766011318" },
      { name: "Dhanashree Deshmukh", phone: "9307982145" },
    ],
    registerLink: "https://forms.gle/esQfUHspEqPf5YEc9",
  },
  masterchefCompetition: {
    image: require("../images/Culinary.png"),
    title: "Taste Wars",
    subtitle: "Masterchef Competition",
    details:
      "The Masterchef Challenge is a culinary competition designed to showcase the culinary skills, creativity, and adaptability of college students. Participants will face unique challenges, testing their ability to create exceptional dishes under time constraints and unexpected twists.",
    structure: [
      "Team Size: 2 members (minimum) / 4 members (maximum)",
      "Participation: 1 team from each class",
      "Venue: Between Main & IT Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 10:00 AM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Teams are required to plan and prepare a dish/dishes.",
          "Teams can decide what dishes they wish to prepare.",
          "Repetition of the same dish is not allowed. To avoid this, all teams must get their menu approved as and when asked by the event coordinator.",
          "Teams must prepare 100% veg recipes (NO egg/non-veg recipes).",
          "Ingredients or any cooking equipment won't be provided by the coordinators. Teams shall bring their own if required.",
          "Connection points for electric points will NOT be provided. Participants shall prepare NON-FIRE required food only.",
          "Teams must complete the preparation and presentation of all dishes within a time limit of 1 hour and 15 minutes.",
          "Subsequently, judges will spend the next 45 minutes evaluating each team's dishes.",
          "Twice during the entire competition, each team has to pick up a chit and face some challenges like blindfolded cooking, handcuffs, performing some dance moves, no cooking for 5 minutes, and many more.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Taste",
          "Presentation",
          "Creativity",
          "The completeness of the three-course meal.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams are responsible for cleaning their workspace after the event.",
          "Teams MUST NOT waste any food during this event.",
          "Professionalism and sportsmanship are expected.",
          "Teams must adhere to safety and hygiene standards.",
          "The coordinators reserve the right to make decisions in unforeseen circumstances or disputes.",
        ],
      },
    ],
    contacts: [
      { name: "Mrudula Kinkar", phone: "9604068921" },
      { name: "Gayatri More", phone: "9561937665" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe8Z-M4I70CqpBaU4I5b4WwbOEgf3yINbo0VNA8tpCNzqZxwQ/viewform?usp=sf_link",
  },
  tShirtSneakerCompetition: {
    image: require("../images/art.png"),
    title: "Kicks & Dyes Showdown",
    subtitle: "T-Shirt/Sneaker Designing Competition",
    details:
      "Step into the realm of fashion innovation with our T-shirt & Sneaker Designing Event! Unleash your creativity on fabric and footwear, crafting unique styles that speak volumes. Join us for a fusion of art and fashion – an opportunity to showcase your design flair and leave a lasting imprint on the runway of creativity!",
    structure: [
      "Team Size: 1 or 2 members",
      "Participation: 1 team from each class",
      "Venue: Instrumentation Quadrangle",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final; no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Originality",
          "Creativity",
          "Neatness",
          "Difficulty of design",
          "Theme",
        ],
      },
      {
        heading: "Theme and Scoring",
        points: [
          "Participants have the freedom to select a theme for their sneakers and T-shirts, fostering creativity and personal expression.",
          "Additional points will be awarded for maintaining a unified theme or colour scheme across their artwork.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Teams must complete the art within a time limit of 1 hour and 15 minutes.",
          "Judges will spend the next 45 minutes evaluating each team's artwork.",
          "Use of stencils or stamps is not allowed.",
          "Students must bring their own paints, pens, colour pencils, brushes, water containers, and other materials needed.",
        ],
      },
      {
        heading: "Mandatory Attire",
        points: [
          "Students must bring their own T-shirt and sneakers.",
          "The shirt may be of any style (T-shirt, tank top, long sleeves, polo, etc.).",
          "The T-shirt and sneakers must be solid white or any colour, without pre-existing designs.",
          "Any pre-existing designs on the T-shirt or sneakers may result in a deduction of points.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Bring newspapers and plastic sheets to protect the event venue from any damage.",
          "Participants are responsible for cleaning their workspace after the event.",
          "Ensure that no offensive or inappropriate language is used in the artwork while designing the T-shirt and sneakers.",
          "Use of mobile phones or any printed references is strictly prohibited during the competition.",
          "Decisions taken by the judges/event coordinators will be considered final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Ashlesha Jagtap", phone: "9420482496" },
      { name: "Shruti Shinkar", phone: "7620460172" },
    ],
    registerLink: "https://forms.gle/SB5NS1BMAeneKimQ7",
  },

  mehendiCompetition: {
    image: require("../images/art.png"),
    title: "Hands On Henna",
    subtitle: "Mehendi Competition",
    details:
      "Immerse yourself in the ancient art of henna! Transform hands into canvases, creating intricate designs that tell stories of tradition and beauty. Join us for a celebration of cultural elegance – participate, and let your henna artistry leave an indelible mark on our vibrant festivities!",
    structure: [
      "Team Size: 1 (Self-artist) or 2 (1 artist + 1 model)",
      "Participation: 1 team per class",
      "Venue: Mechanical Circle",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final; no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Participants must mandatorily include the word ‘Gandhaar’ in their design, written in Devanagari script.",
          "Each participant will receive a chit containing random design elements (e.g., motifs such as a peacock, lotus, or sun).",
          "Incorporating all elements from the chit into the design is mandatory.",
          "Participants are free to use additional elements, but the given components must remain prominent and identifiable.",
          "90 minutes will be provided for creating the design.",
          "An additional 30 minutes will be allocated for judges to evaluate the designs.",
          "Participants arriving late will not receive extra time to complete their designs.",
          "Participants must bring their own mehendi cones, which they are comfortable using.",
          "Use of coloured cones is allowed.",
          "All participants must bring their own model from their respective divisions.",
          "The mehendi design must cover at least up to the mid-forearm of the participant, and designs can be drawn on the front and back of the hands.",
          "Mehendi drawn on feet will not be considered for judging.",
          "Use of rough sketches, readymade designs, or any other pictures is NOT allowed.",
          "Use of mobile phones during the contest is strictly prohibited.",
          "Any kind of stencils or stamps are not allowed.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Judges will evaluate designs based on creativity, overall presentation, and the coverage of the design.",
          "Extra points will be allotted for covering up to the mid-forearm and beyond.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Bring rough clothes and newspapers to avoid damage to the venue.",
          "Participants are responsible for cleaning their workspace after the event.",
          "The decision of the judges will be final and binding and should be accepted gracefully.",
        ],
      },
    ],
    contacts: [
      { name: "Tanisha Joshi", phone: "7796760971" },
      { name: "Komal", phone: "7015663591" },
    ],
    registerLink: "https://forms.gle/S8r4KXj6x1uYueQJ8",
  },

  bestOutOfWaste: {
    image: require("../images/art.png"),
    title: "Bincredible",
    subtitle: "Best Out of Waste Competition",
    details:
      "Unleash your creativity and embrace sustainability with Bincredible, our signature Best Out of Waste competition! Transform everyday waste into extraordinary masterpieces. Showcase your ingenuity while promoting upcycling and eco-consciousness.",
    structure: [
      "Team Size: 1-2 members",
      "Participation: 1 team from each class",
      "Venue: Mechanical Circle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 1:00 PM - 3:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Teams should consist of 1-2 members.",
          "Both participants must belong to the same class.",
          "Once registration is completed, no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "The product must be crafted during the competition; pre-prepared items are strictly prohibited.",
          "Each creation must be unique and innovative. Plagiarism will lead to disqualification.",
          "The competition begins at 1:00 PM. Latecomers may not be given extra time.",
          "All creations must be completed and submitted by 3:00 PM.",
          "Each participant/team must present their product to the judges and explain: The materials used, The idea or purpose behind the product, How it reflects the theme 'Best Out of Waste.'",
          "Waste items: Newspaper, magazines, old books, cardboard, cartons, paper rolls, plastic bottles, caps, containers, old fabric, clothes, threads, scrap metal, wires, broken jewelry, glass pieces, bangles, used cans, tins, or foil.",
          "Basic tools and adhesives: Scissors, cutters, glue, tape, staplers, thread.",
          "Optional decorative materials to enhance the final product’s appearance.",
          "No ready-made or semi-finished items that provide an unfair advantage.",
          "No hazardous, flammable, or toxic materials.",
          "An example is a jewelry box made out of a shoe box.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Creativity and Originality",
          "Aesthetic Appeal",
          "Functionality",
          "Adherence to Rules",
          "Presentation",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must bring their own materials and tools.",
          "Each participant/team will be given a designated workspace.",
          "Participants are responsible for cleaning their area after the event.",
          "The decision of the judges will be final and binding.",
          "Participants must cooperate with the coordinators and adhere to all event rules to ensure a smooth and fair competition.",
          "In case of disputes, the coordinators reserve the right to take appropriate action.",
        ],
      },
    ],
    contacts: [
      { name: "Mrudula Kinkar", phone: "9604068921" },
      { name: "Tanisha Dusane", phone: "9823389442" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdcpO2NtqC8u32PBqN_SnvBtVDMBuYiCAjxrEpcAPnfdgOhPQ/viewform?usp=sf_link",
  },

  artRelay: {
    image: require("../images/art.png"),
    title: "Art-a-thon",
    subtitle: "Art Relay Challenge",
    details:
      "The Art Relay Challenge is a creative, timed competition where teams complete multiple art-based tasks in a relay format. Each stage focuses on a specific art technique: Origami, Collage Making, and Quilling Art.",
    structure: [
      "Team Size: 3 members",
      "Participation: 1 team from each class",
      "Venue: Between Main & IT Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Once registration is completed, it will be considered final; no alterations will be allowed under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Each team must assign a different member to compete in each stage.",
          "No substitutions are allowed mid-stage or after roles are declared.",
          "Teams cannot switch participants once the roles are assigned.",
          "No outside help, pre-made designs, or reference materials are allowed.",
          "Participants have 1 hour and 15 minutes to complete the entire relay.",
          "Event coordinators will strictly monitor the time. Teams exceeding the time limit will receive a penalty.",
          "At the start of each stage, event coordinators will show the specific art piece to be created.",
          "Participants will compete to recreate the task as quickly and accurately as possible.",
          "Teams must complete tasks as instructed. Any deviation from instructions may result in a deduction of points.",
          "Teams are expected to bring their own scissors and glue.",
        ],
      },
      {
        heading: "Stages",
        subheading: "Stage 1: Origami",
        points: [
          "A specific origami figure will be demonstrated (e.g., a bird, flower, or box), and steps to make it will be displayed.",
          "Participants must recreate the piece as quickly and accurately as possible.",
        ],
      },
      {
        subheading: "Stage 2: Collage Making",
        points: [
          "A specific design or pattern will be announced (e.g., a landscape or geometric art).",
          "Participants must complete the collage following the instructions within the given time.",
        ],
      },
      {
        subheading: "Stage 3: Quilling Art",
        points: [
          "Participants will be shown a quilled design (e.g., a flower, heart, or abstract pattern).",
          "The task must be completed quickly while maintaining neatness and accuracy.",
        ],
      },
      {
        heading: "Judging Criteria and Scoring",
        points: [
          "Points will be awarded based on completion time, creativity, and accuracy.",
          "The team with the highest cumulative score across all stages wins the challenge.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams must keep their workstations clean and organized.",
          "Event coordinators will strictly monitor the tasks to ensure fair play.",
          "The decision of the judges and coordinators will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Yukti Mahajan", phone: "7028021566" },
      { name: "Twisha Gohil", phone: "9545944388" },
    ],

    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfHHXFXxfQa19rgEHHy2cd0Q9eUfKJFJAr8PPyNDKA_eDykjg/viewform?usp=sf_link",
  },

  sketching: {
    image: require("../images/art.png"),
    title: "Sketching - Sketch Sphere",
    subtitle: "Unleash Your Creativity",
    details:
      "Put your artistic skills to the test in the thrilling Sketching Competition! Whether you're a seasoned artist or just starting out, this event invites participants of all skill levels to express their creativity and imagination.",
    structure: [
      "Team Size: Individual (1)",
      "Participation: 1 student per class",
      "Venue: Between Main & IT Building",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "All sketches must be original and created on the spot.",
          "Pre-made or plagiarized sketches will lead to immediate disqualification.",
          "Use the provided or approved A4 paper size to ensure uniformity.",
          "No additional embellishments or external aids (e.g., stencils) are permitted.",
          "The use of electronic devices (e.g., mobile phones, tablets) for reference or any external visual aids is strictly prohibited during the competition.",
          "Participants must bring their own sketching materials (e.g., paper, erasers, sharpeners).",
          "Sketches must be submitted within the time limit. Late submissions will not be accepted.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: ["Originality", "Creativity"],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants are responsible for maintaining the cleanliness of their workstations.",
          "Any form of damage or littering may result in strict actions.",
          "Any form of cheating, disruption, or malpractice will lead to immediate disqualification.",
          "Ensure compliance with all rules to avoid penalties or disqualification.",
          "Any disputes regarding the competition will be resolved by the organizing committee.",
          "The decision of the judges and coordinators will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Sakshi Deshmukh", phone: "7055929394" },
      { name: "Sharvari Ughade", phone: "7823804166" },
    ],
    registerLink: "https://forms.gle/vy8mdq1CJfziFjxu5",
  },
  doodling: {
    image: require("../images/art.png"),
    title: "Doodling - Doodle Express",
    subtitle: "Let your creativity shine",
    details:
      "Transform a blank canvas into a masterpiece based on a surprise theme. Bring your own colors and pens, and show off your originality in just 90 minutes.",
    structure: [
      "Team Size: Individual (1)",
      "Participation: 1 Member per class",
      "Venue: Between Main & IT Building",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "All participants must create their doodle based on the given theme, which will be announced at the start of the competition.",
          "Deviating from the theme will result in immediate disqualification.",
          "All doodles must be original and created on the spot.",
          "Plagiarism or pre-made designs are strictly prohibited and will lead to disqualification.",
          "Participants will have 90 minutes to complete their doodle.",
          "Late submissions will not be accepted.",
          "Only paper will be provided by the coordinators.",
          "Participants must bring their own colors, pens, markers, and any other materials required.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Creativity",
          "Adherence to the theme",
          "Use of space",
          "Overall visual appeal",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Ensure compliance with all rules to avoid penalties or disqualification.",
          "The judges’ decision will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Sanjana Tupe", phone: "9156102292" },
      { name: "Paridha Bhoite", phone: "9321649591" },
    ],
    registerLink: "https://forms.gle/n45t7QwfD8AzpqX26",
  },
  portrait: {
    image: require("../images/art.png"),
    title: "Portrait - Faces in Focus",
    subtitle: "Capture the essence",
    details:
      "Express your creativity in this portrait competition. Showcase your skills in capturing the human form through the medium of portrait art.",
    structure: [
      "Team Size: Individual (1)",
      "Participation: 1 Member per class",
      "Venue: Between Main & IT Building",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 10:00 AM - 12:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "At the beginning of the competition, a common object will be declared as the subject of the portrait.",
          "Participants must use their creativity to draw a portrait of the assigned object, infusing it with personality, emotions, or imaginative elements.",
          "A3 drawing sheets will be provided by the College.",
          "Participants must bring their drawing materials such as pencils, coloured pencils, markers, or charcoal.",
          "No stencils allowed.",
          "The artist must complete the portrait within a maximum time limit of 120 minutes.",
          "Use of mobile phones is strictly prohibited.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Artistic Skill and Technique",
          "Creativity and Imagination",
          "Faithfulness to the Assigned Object",
          "Presentation and Artistic Choices",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Participants must adhere to the spirit of fair play and sportsmanship.",
          "Any violation of rules or unsportsmanlike conduct may result in disqualification.",
          "The portrait should not contain any offensive or inappropriate content. Such portraits will be disqualified.",
          "The judges’ decision will be final and binding.",
        ],
      },
    ],

    contacts: [
      { name: "Sejal Patil", phone: "9373447616" },
      { name: "Samruddhi Pawar", phone: "9850558436" },
    ],
    registerLink: "https://forms.gle/qYZcH6b9YT2MTbW36",
  },

  painting: {
    image: require("../images/art.png"),
    title: "Painting - Color Combat",
    subtitle: "Express through colors",
    details:
      "Showcase your artistic talent and creativity by creating artwork based on a given theme within a specified time.",
    structure: [
      "Team Size: Individual (1)",
      "Participation: 1 Member per class",
      "Venue: Between Main & IT Building",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Participants must create artwork relevant to the given theme.",
          "Artwork must be original and created on the spot.",
          "Pre-prepared artwork will result in immediate disqualification.",
          "Participants may use watercolors, acrylics, oil paints, pastels, and other similar mediums.",
          "Participants must bring their own materials (e.g., paints, brushes).",
          "Participants will have 2 hours to complete their artwork.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: ["Originality", "Alignment with the theme"],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Ensure that all rules are followed to avoid disqualification.",
          "The judges’ decision will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Vaishnavi Morge", phone: "9022696146" },
      { name: "Sanjana Tupe", phone: "9156102292" },
    ],
    registerLink: "https://forms.gle/5RzYGhT6pfC74TB96",
  },

  makeup: {
    image: require("../images/art.png"),
    title: "Makeup - Cosmetic Clash",
    subtitle: "Timeless Glam: Makeup Through the Ages",
    details:
      "Explore the art of beauty across time and create makeup looks inspired by various eras and cultures.",
    structure: [
      "Team Size: 2 members (1 makeup artist and 1 model)",
      "Participation: 1 team per class",
      "Venue: Instru Garden/Mech Circle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 1:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Each team must consist of 2 members: 1 artist and 1 model.",
          "The makeup and hairstyle should represent a specific era and culture.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Total time allocated is 90 minutes for makeup and hairstyling, plus 30 minutes for judging. No additional time will be provided.",
          "Teams exceeding the time limit will lose points.",
          "The use of electronic or heating tools (such as hairdryers, straighteners, or curling irons) is strictly prohibited.",
          "Teams must rely solely on manual hairstyling techniques.",
          "Teams must bring their own makeup kits and tools.",
          "The chosen theme must be clearly communicated during the presentation.",
          "Each team will get 2-3 minutes to explain their look, era, and cultural inspiration.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Creativity and originality in makeup",
          "Era and cultural accuracy",
          "Skill and technique in makeup application",
          "Integration of hairstyle as a complement to makeup.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams must maintain cleanliness in their workspace throughout the competition.",
          "Points may be deducted for leaving the workspace untidy after the competition ends.",
          "Referring to any images during the competition is strictly prohibited. All designs must be created from memory and creativity.",
          "All entries must respect cultural sensitivities and avoid stereotypes.",
          "Any offensive portrayal will result in immediate disqualification.",
          "Ensure compliance with all rules to avoid penalties or disqualification.",
          "The decision of the judges will be final and binding. No appeals or objections will be entertained.",
        ],
      },
    ],
    contacts: [
      { name: "Yugandhara Padhye", phone: "7038188582" },
      { name: "Sanskruti Jawade", phone: "8668294865" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfvbQrgNYcHR_hEnhhNWfdXPXFSOQVLEiZB9kFLLc6sgbXyjA/viewform?usp=sf_link",
  },
  rangoli: {
    image: require("../images/art.png"),
    title: "Rangoli - The Vibes",
    subtitle: "Vibrant creations",
    details:
      "Participate in this vibrant competition and showcase your Rangoli-making skills with organic and creative designs.",
    structure: [
      "Team Size: 2 members",
      "Participation: 1 Team per class",
      "Venue: Between Main & IT Building",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 12:00 PM - 3:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Each team must consist of 2 participants. Individual entries are not allowed.",
          "Participation is restricted to 1 team per class.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Participants must bring their own materials, including colors, stencils, and decorative items.",
          "Only organic or natural colors are permitted. No harmful substances, chemicals, or paints are allowed.",
          "All designs must be completed within the allocated time frame.",
          "Designs must fit within the allotted space and adhere to the specified dimensions.",
          "Exceeding dimensions will result in a penalty.",
          "A short description of the design may be required as part of the judging process.",
          "Bonus points may be awarded for designs that incorporate eco-friendly or innovative elements.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Misconduct, cheating, or any form of rule violation will result in immediate disqualification.",
          "Teams are expected to respect competition decorum and maintain a clean workspace.",
          "Ensure all materials comply with the rules to avoid penalties.",
          "Respect the allocated space and time for a smooth competition experience.",
          "The decision of judges and coordinators will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Vaishnavi Borkar", phone: "9307982886" },
      { name: "Sakshi Bansode", phone: "8600591667" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSccVw1l6Ju0Dw69D_6zMuzQk3uJZ3qjJ_Jj-biO-79OwPfsyQ/viewform?usp=sf_link",
  },
  classDrama: {
    image: require("../images/drama.png"),
    title: "The Drama Premiere League",
    subtitle: "Class Drama Competition",
    details:
      "Embark on an 8-minute storytelling extravaganza in Hindi/English/marathi—where props are your magical companions. Paint a vivid tale on the canvas of creativity. Let your performance echo, as decisions by coordinators and judges become the grand finale of your narrative journey!",
    structure: [
      "Team Size: 5 (minimum) / 10 (maximum) + 3 volunteers (if needed)",
      "Participation: 1 team per class (only 20 teams- First come first serve basis)",
      "Venue: Main Building Quadrangle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 1:00 PM - 4:30 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Performances can be conducted in Hindi, English, or Marathi.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "The competition will consist of a single round.",
          "Total performance time is 8 minutes, with an additional 2 minutes for setup.",
          "A maximum of 20 teams will perform on the day of the event.",
          "Any material that has the potential to damage the area or harm participants is strictly not allowed.",
        ],
      },
      {
        heading: "Sound and Props",
        points: [
          "Use simple props that can be carried around easily.",
          "All props required by the team are subject to verification by event coordinators.",
          "If sound setup is required, the track must be provided to event coordinators on time as instructed.",
          "No changes can be made to the soundtrack once it has been submitted.",
          "Ensure soundtracks and props align with the event's requirements.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "The use of abusive language, obscenity, direct implications, plagiarism, and racial, religious/linguistic, sexual, or political views is strictly prohibited and will lead to immediate disqualification.",
          "Compliance with all rules and guidelines is mandatory to avoid penalties or disqualification.",
          "Decisions taken by event coordinators and judges will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Sanskruti Inamdar", phone: "8888003927" },
      { name: "Palavi Hardikar", phone: "9021797311" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfRxdg9B9wbO0NUtPOW60Ym99G1GYxjl6Ddd-yfq3r8HvF7lA/viewform?usp=sf_link",
  },

  interCollegeNukkad: {
    image: require("../images/drama.png"),
    title: "Nazariya",
    subtitle: "Inter-College Nukkad Natak (Street Play)",
    details:
      "The Inter-College Nukkad Natak Competition is a vibrant platform for colleges to showcase creativity and address social issues. With a prize pool of ₹25,000, the event celebrates the spirit of street theater and impactful performances.",
    structure: [
      "Team Size: 8-20 members (Including all music accompanists)",
      "Participation: Open to all colleges in Pune",
      "Venue: Stage 2",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 12:00 PM - 4:00 PM",
    ],

    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "The list of all team members, including music accompanists, must be provided to the event head during registration.",
          "The competition is open to all college students aged 16-25.",
          "The competition will consist of a single round.",
          "Teams can perform on topics of their choice.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Performances must be confined to an area of 10-12 meters in diameter, with the audience on all sides.",
          "The venue will be an open-air space.",
          "Costumes, props, instruments, and scripts are subject to verification.",
          "Any kind of fluids, live animals, flame, heavy objects, or materials that could damage the area or harm people are strictly prohibited.",
          "Props or materials that litter the performance area are not allowed. If littering occurs, participants must clean the area.",
          "Only live music is allowed, and teams must bring their own instruments.",
          "No electrical appliances are allowed during the performance, either inside or outside the performance circle.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/linguistic, sexual, or political views is strictly prohibited and will lead to immediate disqualification.",
          "Ensure compliance with all rules and guidelines to avoid penalties or disqualification.",
          "The decision of the event coordinators is final and binding in case of disputes.",
        ],
      },
    ],
    contacts: [
      { name: "Yugandhara Padhye", phone: "7038188582" },
      { name: "Vaishnavi Patil", phone: "7447629569" },
    ],
    registerLink: "/registration",
  },
  djembe: {
    image: require("../images/workshop.png"),
    title: "Djembe Workshop",
    subtitle: "Percussion Workshop",
    details:
      "Join us for an engaging Djembe Workshop and learn the basics of playing the djembe. Explore rhythms, hand techniques, and enjoy the experience of creating music together. No prior experience needed—just bring your enthusiasm!",
    structure: [
      "Team Size: Individual participation",
      "Venue: Stage 2",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:00 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Only students of Cummins College are allowed to participate.",
          "Participants must present a valid college ID at the event.",
        ],
      },
      {
        heading: "Workshop Guidelines",
        points: [
          "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
          "All percussion instruments will be provided at the venue.",
        ],
      },
      {
        heading: "Conduct and Behavior",
        points: [
          "Any form of misconduct, inappropriate behavior, or damage to the instruments will result in immediate disqualification and disciplinary action.",
        ],
      },
    ],
    contacts: [
      { name: "Eva Deswal", phone: "9920267634" },
      { name: "Bhargavi Girisagar", phone: "9373602852" },
    ],
    registerLink: "https://forms.gle/WjDEeKH1kVoizrgP6 ",
  },

  ukulele: {
    image: require("../images/workshop.png"),
    title: "Ukulele Workshop",
    subtitle: "Learn Ukulele",
    details:
      "Join us for a hands-on Ukulele Workshop where you can learn the basics of playing this delightful instrument. Explore chords, strumming techniques, and play some tunes together!",
    structure: [
      "Team Size: Individual participation",
      "Venue: IT Building",
      "Date: Day 2 (Thursday, 30th January 2025) & Day 3 (Friday, 31st January 2025)",
      "Time: 12:30 PM - 4:30 PM for Day 2, 10:00 AM - 2:00 PM for Day 3",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Only students of Cummins College are allowed to participate.",
          "Participants must present a valid college ID at the event.",
        ],
      },
      {
        heading: "Workshop Guidelines",
        points: [
          "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
          "All percussion instruments will be provided at the venue.",
        ],
      },
      {
        heading: "Conduct and Behavior",
        points: [
          "Any form of misconduct, inappropriate behavior, or damage to the instruments will result in immediate disqualification and disciplinary action.",
        ],
      },
    ],

    contacts: [
      { name: "Vaishnavi Patil", phone: "7447629569" },
      { name: "Anushka Mamane", phone: "8668698667" },
    ],
    registerLink: "https://forms.gle/Xqy4KEuBGhM9tp378  ",
  },

  textureMoon: {
    image: require("../images/workshop.png"),
    title: "Texture Moon Workshop",
    subtitle: "Craft a Celestial Masterpiece",
    details:
      "Unleash your creativity at the Texture Moon Workshop! Discover the art of crafting mesmerizing moon textures and create your own celestial masterpiece.",
    structure: [
      "Team Size: Individual participation",
      "Venue: Mech Building",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 11:30 PM - 4:30 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Only students of Cummins College are allowed to participate.",
          "Participants must present a valid college ID at the event.",
        ],
      },
      {
        heading: "Workshop Guidelines",
        points: [
          "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
        ],
      },
    ],

    contacts: [
      { name: "Arya Hawaldar", phone: "8452820567" },
      { name: "Sharvari Ughade", phone: "7823804166" },
    ],
    registerLink: "https://forms.gle/4vGFDSHzn6vq6S2w7",
  },

  fluidArt: {
    image: require("../images/workshop.png"),
    title: "Fluid Art Workshop",
    subtitle: "Create Mesmerizing Fluid Art",
    details:
      "Unleash your creativity at the Fluid Art Frenzy Workshop! Dive into the world of swirling colors and dynamic patterns as you discover the magic of fluid art. Learn how to pour, tilt, and blend paints to create mesmerizing, one-of-a-kind masterpieces. Let your imagination flow and watch as vibrant hues come to life on your canvas. Get ready to embrace the frenzy of fluidity and craft your own captivating art!",
    structure: [
      "Team Size: Individual participation",
      "Participation: Open for all",
      "Venue: Mech Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 12:00 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Only students of Cummins College are allowed to participate.",
          "Participants must present a valid college ID at the event.",
        ],
      },
      {
        heading: "Workshop Guidelines",
        points: [
          "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
        ],
      },
    ],

    contacts: [
      { name: "Shruti Shinkar", phone: "7620460172" },
      { name: "Gayatri Kadu", phone: "9209115390" },
    ],
    registerLink: "https://forms.gle/4zpbFKr1N9efs4gt6 ",
  },

  punchNeedle: {
    image: require("../images/workshop.png"),
    title: "Punch Needle Workshop",
    subtitle: "Explore Punch Needle Art",
    details:
      "Get ready for a creative adventure at Punch Needle Palooza! Explore the vibrant world of punch needle embroidery and learn how to transform yarn into stunning, textured designs. From bold patterns to cozy creations, this workshop will guide you through the art of crafting unique and colorful pieces. Whether you're a beginner or a craft enthusiast, Punch Needle Palooza is your chance to stitch your way to a masterpiece!",
    structure: [
      "Team Size: Individual participation",
      "Participation: Open for all",
      "Venue: Instru Quadrangle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 12:00 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Only students of Cummins College are allowed to participate.",
          "Participants must present a valid college ID at the event.",
        ],
      },
      {
        heading: "Workshop Guidelines",
        points: [
          "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
        ],
      },
    ],

    contacts: [
      { name: "Samruddhi Patil", phone: "9763811008" },
      { name: "Shruti Srinivasan", phone: "8208996654" },
    ],
    registerLink: "https://forms.gle/hVLnL9kEyf1oY61X8",
  },

  adOMania: {
    image: require("../images/online.png"),
    title: "Ad-O-Mania",
    subtitle: "Create Your Quirky Ad Campaign",
    details:
      "This advertising competition challenges teams to create and present a witty, imaginative, and compelling ad campaign for a fictional product or service under the theme 'Quirky Inventions.' Participants will use humor, storytelling, and creativity to market their unique invention in a fun and engaging way.",
    structure: [
      "Team Size: 4-6 members",
      "Participation: 1 team per class",
      "Venue: To be announced",
      "Date: To be announced",
      "Time: To be announced",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Submissions",
        points: [
          "All teams must submit their final video by the given deadline.",
          "Late submissions will not be accepted under any circumstances.",
          "Participants can use video editing apps to enhance their entries with graphics, animations, and other creative elements.",
          "Final submissions must be in high-quality MP4 format.",
          "File naming format: ClassName_TeamName.mp4.",
          "Ensure clear audio and video for better judging.",
          "Teams must maintain decorum and ensure all content is appropriate for a general audience.",
          "Any offensive, discriminatory, or inappropriate content will result in disqualification.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "The invention must be fictional, humorous, or unusual.",
          "Creativity and alignment with the 'Quirky Inventions' theme are essential.",
          "The ad must be 2 minutes long. Exceeding or falling short of the time limit will result in point deductions.",
          "Ads can be in Hindi, Marathi, or English.",
          "The ad must be original and created by the team.",
          "Plagiarism of content, scripts, or ideas will lead to disqualification.",
          "Each member must contribute significantly to the ad creation process.",
          "Evident participation of all team members in the final product will be judged.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Unique and innovative concept for the quirky invention.",
          "Relevance and alignment with the 'Quirky Inventions' theme.",
          "Ability to entertain and captivate the audience.",
          "Quality of video, clarity of message, and overall professionalism.",
        ],
      },
    ],
    contacts: [
      { name: "Tanvi Dudhagundi", phone: "9699910524" },
      { name: "Sanskruti Nilawar", phone: "9834907483" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeFGsS-rVqodVlDF-08Qd7vJ_kCfn-VMug0opj3PBRU-3f_Mw/viewform?usp=sf_link",
  },

  expressionDance: {
    image: require("../images/online.png"),
    title: "Face The Beat: Expression Dance",
    subtitle: "Convey Emotions Through Expression",
    details:
      "The Expression Dance competition focuses solely on the participant's ability to convey emotions and tell a story through their facial expressions, gestures, and emotive movements without involving physical dance. There is no fixed theme, allowing participants to choose a song that inspires and empowers their emotional range.",
    structure: [
      "Team Size: Individual participation",
      "Participation: 1 from each class",
      "Venue: To be announced",
      "Date: To be announced",
      "Time: To be announced",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Participants must register online by the specified deadline.",
          "Group performances must list the names of all members during registration.",
        ],
      },
      {
        heading: "Songs and Costumes",
        points: [
          "Participants must choose a song that allows them to showcase a wide range of expressions (e.g., happiness, sorrow, anger, excitement).",
          "Songs can be in any language (Hindi, English, or Marathi) or genre but must be appropriate for a general audience.",
          "Costumes must be decent.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Each performance must be between 1.5 to 2 minutes.",
          "Exceeding the time limit may result in point deductions.",
          "Movements should be minimal; the emphasis should remain on facial expressions and emotive gestures.",
          "The use of props is not allowed; the focus must entirely be on expressions.",
        ],
      },
      {
        heading: "Submissions",
        points: [
          "Performances must be recorded and submitted in MP4 format before the deadline.",
          "Videos should have clear audio and visuals, with a clear and well-lit background for better visibility of expressions.",
        ],
      },
      {
        heading: "Judging Criteria",
        points: [
          "Clear and appropriate expressions that align with the theme will be scored higher.",
          "Creativity, originality, and the flow of expressions will be judged.",
          "How well the dance aligns with the chosen theme or genre will also be evaluated.",
        ],
      },
    ],
    contacts: [
      { name: "Shreya Rathi", phone: "9028828128" },
      { name: "Bhargavi Girisagar", phone: "9373602852" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScisRxRHpHDmJbPne9SaABFbyHVR5nm0eBV1FyaOTh4ducfEA/viewform?usp=sf_link",
  },
  octopusRace: {
    image: require("../images/sports.png"),
    title: "Octopus Race",
    subtitle: "Team Coordination, Balance, and Strategy",
    details:
      "The Octopus Race is a unique and entertaining team-based activity designed to test participants’ coordination, teamwork, and balance. Drawing inspiration from the movements of an octopus, this game requires creativity, strategy, and synchronization to achieve victory.",
    structure: [
      "Team Size: 4 Members",
      "Participation: 1 team per class",
      "Venue: Samstha Ground",
      "Date: Day 2 (Friday, 30th January 2025)",
      "Time: 8:00 AM - 10:00 AM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "Each team will consist of 4 players.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Team members must attach their backs to one another.",
          "Hands must be interlocked securely with adjacent team members.",
          "Legs must be bent slightly to ensure balance, with all players maintaining a shoulder-level distance from each other. This posture is essential to mimic an octopus's movement.",
          "The team must remain connected in this formation throughout the race.",
          "No team member is allowed to disconnect or break formation at any point.",
          "Running is strictly prohibited as it may result in loss of balance or breaking formation.",
          "Teams must move by shuffling their feet or waddling, resembling the coordinated movement of an octopus.",
        ],
      },
      {
        heading: "Winning Criteria",
        points: [
          "The first team to cross the finish line without breaking formation or violating any rules will be declared the winner.",
          "A penalty of 10 seconds will be added to the total time on breaking connection.",
          "Disqualification could be done for taking shortcuts or leaving the designated track.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams are expected to respect competition decorum.",
          "The coordinators’ decision will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Devyani Patil", phone: "9403494735" },
      { name: "Samruddhi Pawar", phone: "9850558436" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe3nH27pGb1EFxMKCy1AHH2Yl57S5Oid0I-3KE6ueL1gQ4cEw/viewform?usp=sf_link",
  },

  dodgeballInCircle: {
    image: require("../images/sports.png"),
    title: "Dodgeball in Circle",
    subtitle: "Exciting and Fast-Paced Game",
    details:
      "Dodgeball in a Circle is an exciting and fast-paced game where players stand in a circle. One player throws the ball to someone, and that person must catch it. After the catch, the two players beside them must sit down. If the side players don’t sit in time, they’re out. The game continues until only three players remain standing.",
    structure: [
      "Team Size: 1",
      "Participation: 1 from each class",
      "Venue: Samstha Ground",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 9:30 AM - 10:00 AM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Everyone stands in a circle to begin the game.",
          "One player starts by throwing the ball at someone in the circle.",
          "The two players beside the target (on their left and right) must immediately sit down.",
          "If the side players fail to sit quickly, they are eliminated.",
          "Any player sitting down, other than the two players seated immediately to the left and right of the target, will be eliminated.",
          "The target (who catches the ball) becomes the next thrower and continues the game.",
        ],
      },
      {
        heading: "Winning Criteria",
        points: [
          "The game continues until only three players are left standing.",
          "The last three standing are declared the winners.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Players delaying the throw will be warned. Repeated delays result in elimination.",
          "Intentionally targeting the same person multiple times without fair play will result in the thrower being eliminated.",
          "If players sit too slowly or pretend to sit but remain standing, they will be eliminated immediately.",
          "Participants are expected to respect competition decorum.",
        ],
      },
    ],
    contacts: [
      { name: "Apurva Gapchup", phone: "7666687656" },
      { name: "Arya Desai", phone: "8767029511" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeEdzp4ugyL78p_GaruWye_GwOeBMmeUzczlnc7v5z0uzk22w/viewform?usp=header",
  },
  upDownRace: {
    image: require("../images/sports.png"),
    title: "Up-Down Race",
    subtitle: "Energetic and Fast-Paced Group Game",
    details:
      "Up-Down Race is an energetic and fast-paced group game where players race back and forth. The game tests speed, coordination, and focus, making it perfect for team-building activities.",
    structure: [
      "Team Size: 4 members",
      "Participation: 1 team per class",
      "Venue: Sanstha Ground",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 8:00 AM - 10:00 AM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "There will be four players in each team, divided into two pairs:",
          "One pair will be sitting, and the other pair will be standing.",
          "Both pairs must hold hands with their respective partners.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "The team that reaches the finish line first, while maintaining proper coordination and without breaking their formation, wins the race.",
          "Players must complete the race by moving forward while maintaining their positions (one player sitting and the other standing).",
          "The players in each pair move forward by passing over one another, i.e., the sitting pair moves into a standing position, and the standing pair moves into a sitting position ahead.",
          "Players must not let go of each other’s hands during the race.",
          "Teams will be disqualified if they fail to follow the sit-and-stand formation consistently or if their formation breaks.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams are expected to respect competition decorum.",
          "Decisions made by the coordinators will be final and binding.",
        ],
      },
    ],
    contacts: [
      { name: "Apurva Gapchup", phone: "7666687656" },
      { name: "Arya Desai", phone: "8767029511" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScO5ObV7Yx7Go6xY-04NL52wMyUWKfpqJkQwP8oIfVeaBsPxw/viewform?usp=header",
  },

  coneRush: {
    image: require("../images/sports.png"),
    title: "Cone Rush",
    subtitle: "A Fun and Competitive Game",
    details:
      "Unleash the child hidden in you by playing this game in which the players have to place their cones in the middle of the circle when the music stops.",
    structure: [
      "Team Size: Individual",
      "Participation: 1 from each class",
      "Venue: Samstha Ground",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 9:30 AM - 10:00 AM",
    ],
    rules: [
      {
        heading: "Registration",
        points: [
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
        ],
      },
      {
        heading: "Gameplay Guidelines",
        points: [
          "Players stand in a circle, each with a cone placed in front of them.",
          "Music plays, and players move around the circle.",
          "When the music stops suddenly, players must quickly place their cone in the middle of the circle.",
          "If a player knocks over another player's cone while trying to place their own, they are out of the game.",
          "The game continues until only one player remains, and that player is declared the winner. The second-last participant will be the runner-up.",
        ],
      },
      {
        heading: "Decorum and Conduct",
        points: [
          "Teams are expected to respect competition decorum.",
          "The decision taken by the coordinators will be final.",
        ],
      },
    ],
    contacts: [
      { name: "Sneha Ranade", phone: "9172457943" },
      { name: "Jui Khambe", phone: "8379008019" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfPF_8IKMeRA49btiGiOORu3N0SqJyzUbvoqErlWbrpRRDEIQ/viewform?usp=sf_link",
  },
};

function AllEvents() {
  const { eventKey } = useParams();
  const event = events[eventKey];

  if (!event) {
    return <p>Event not found</p>;
  }

  return <EventPage event={event} />;
}

export default AllEvents;
