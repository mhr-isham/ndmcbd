export const SEGMENT_DATA = {
  soloEvents: [
    {
      id: "ss1",
      name: "Math Olympiad (Find)",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss2",
      name: "Math Olympiad (Proof)",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss3",
      name: "Calculus Mania",
      allowedCategories: ["HS"],
    },
    {
      id: "ss4",
      name: "CombiConundrum",
      allowedCategories: ["J", "S", "HS"],
    },
    {
      id: "ss5",
      name: "Numeralgia",
      allowedCategories: ["J", "S", "HS"],
    },
    {
      id: "ss6",
      name: "Function Graphing",
      allowedCategories: ["S", "HS"],
    },
    {
      id: "ss7",
      name: "Geometric Construction",
      allowedCategories: ["J", "S", "HS"],
    },
    {
      id: "ss8",
      name: "Crack the code",
      allowedCategories: ["J", "S", "HS"],
    },
    {
      //
      id: "ss9",
      name: "Human Calculator",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss10",
      name: "Speed Math and Math Counts",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss11",
      name: "IQ Olympiad",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss12",
      name: "Math History Quiz",
      allowedCategories: ["S", "HS"],
    },
    
    {
      //
      id: "ss13",
      name: "Sudoku",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss14",
      name: "Crossword Puzzle",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "ss15",
      name: "Speed Cubing",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "mim",
      name: "Math in Motion",
      allowedCategories: ["S", "HS"],
    },
  ],
  teamEvents: {
    projectDisplay: [
      {
        parentId: "tsp1",
        id: "ts1",
        name: "Math Project",
        allowedCategories: ["P", "J", "S", "HS"],
      },
      {
        parentId: "tsp1",
        id: "ts2",
        name: "Mechanical Project",
        allowedCategories: ["J", "S", "HS"],
      },
      {
        parentId: "tsp1",
        id: "ts3",
        name: "IT & Statistical Project",
        allowedCategories: ["J", "S", "HS"],
      },
      // {
      //   parentId: "tsp1",
      //   id: "ts4",
      //   name: "Robotics & IT Project",
      //   allowedCategories: ["S", "HS"],
      // },
    ],
    others: [
      {
        id: "ts5",
        name: "Wall Magazine",
        allowedCategories: ["P", "J", "S", "HS"],
      },
      {
        id: "ts6",
        name: "Scrapbook",
        allowedCategories: ["J", "S", "HS"],
      },
      {
        id: "ts7",
        name: "Multimedia Presentation",
        allowedCategories: ["J", "S", "HS"],
      },
      {
        id: "ts8",
        name: "Math Relay",
        allowedCategories: ["J", "S", "HS"],
      },
    ],
  },

  submissionEvents: [
    {
      id: "sbes1",
      name: "Article Submission",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "sbes2",
      name: "Mathinema",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      //
      id: "sbes3",
      name: "Math Memes",
      allowedCategories: ["P", "J", "S", "HS"],
    },
  ],
  specialEvents: [
    {
      id: "spes1",
      name: "Workshops",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "spes2",
      name: "Treasure Hunt",
      allowedCategories: ["P", "J", "S", "HS"],
    },
    {
      id: "spes3",
      name: "Band Performance",
      allowedCategories: ["P", "J", "S", "HS"],
    },
  ],
};

export const ALL_EVENTS = [
  ...SEGMENT_DATA.soloEvents,
  ...SEGMENT_DATA.teamEvents.projectDisplay,
  ...SEGMENT_DATA.teamEvents.others,
  ...SEGMENT_DATA.submissionEvents,
];
