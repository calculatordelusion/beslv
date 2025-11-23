const puzzleDatabase = {
  "2025-11-12": {
    date: "2025-11-12",
    formattedDate: "Wednesday, November 12, 2025",
    shortFormattedDate: "Nov 12, 2025",
    centerLetter: "i",
    outerLetters: ["a", "b", "n", "r", "t", "v"],
    letters: "Iabnrtv",
    pangrams: ["vibrant"],
    answers: [
      "anti",
      "aria",
      "atria",
      "attain",
      "avian",
      "bait",
      "barbarian",
      "birria",
      "brain",
      "briar",
      "invariant",
      "irritant",
      "nirvana",
      "rabbi",
      "rabbit",
      "rain",
      "raita",
      "rani",
      "ribbit",
      "taint",
      "tannin",
      "tiara",
      "tibia",
      "tint",
      "titan",
      "train",
      "trait",
      "trivia",
      "vain",
      "variant",
      "vibrant"
    ],
    definitions: {
      "vibrant": { definition: "Full of energy and life", partOfSpeech: "adjective" },
      "brain": { definition: "The organ of thought and neural coordination", partOfSpeech: "noun" },
      "train": { definition: "A connected series of railroad cars", partOfSpeech: "noun" }
    }
  },
  "2025-11-11": {
    date: "2025-11-11",
    formattedDate: "Tuesday, November 11, 2025",
    shortFormattedDate: "Nov 11, 2025",
    centerLetter: "y",
    outerLetters: ["a", "d", "g", "i", "l", "n"],
    letters: "Yadgiln",
    pangrams: ["dallying", "dillydallying"],
    answers: [
      "allay",
      "allaying",
      "ally",
      "allying",
      "anally",
      "daddy",
      "daily",
      "dally",
      "dallying",
      "dandily",
      "dandy",
      "dangly",
      "daylily",
      "diddly",
      "dilly",
      "dillydally",
      "dillydallying",
      "dingy",
      "dyad",
      "dying",
      "gaily",
      "gainly",
      "gangly",
      "gayly",
      "giddily",
      "giddy",
      "giggly",
      "gladly",
      "idly",
      "idyl",
      "idyll",
      "illy",
      "inlay",
      "inlaying",
      "lady",
      "laggy",
      "lallygag",
      "lallygagging",
      "landlady",
      "laying",
      "lily",
      "lying",
      "naggy",
      "nanny",
      "nannying",
      "ninny",
      "yang"
    ],
    definitions: {
      "dillydallying": { definition: "Wasting time through aimless wandering", partOfSpeech: "verb" },
      "idyll": { definition: "A peaceful or picturesque episode or scene", partOfSpeech: "noun" }
    }
  },
  "2025-11-10": {
    date: "2025-11-10",
    formattedDate: "Monday, November 10, 2025",
    shortFormattedDate: "Nov 10, 2025",
    centerLetter: "a",
    outerLetters: ["i", "l", "n", "o", "p", "v"],
    letters: "Ailnopv",
    pangrams: ["pavilion"],
    answers: [
      "aioli",
      "anal",
      "anion",
      "anna",
      "anniv",
      "avail",
      "avian",
      "avion",
      "lain",
      "lava",
      "lion",
      "loin",
      "nail",
      "nana",
      "napa",
      "naval",
      "nival",
      "nova",
      "novation",
      "oval",
      "ovation",
      "pain",
      "pail",
      "palava",
      "pall",
      "pan",
      "papaval",
      "pavilion",
      "piano",
      "plain",
      "plan",
      "vail",
      "vain",
      "vali",
      "vanilla",
      "vial",
      "villa",
      "villain",
      "vina",
      "vinal",
      "viola",
      "voila"
    ],
    definitions: {
      "pavilion": { definition: "A building or structure used for entertainment or shelter", partOfSpeech: "noun" },
      "aioli": { definition: "Garlic mayonnaise", partOfSpeech: "noun" }
    }
  }
};
function getTodaysPuzzle() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return puzzleDatabase[today] || puzzleDatabase["2025-11-12"];
}
function getYesterdaysPuzzle() {
  const yesterday = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];
  return puzzleDatabase[yesterdayStr] || puzzleDatabase["2025-11-11"];
}
function getPuzzleByDate(dateStr) {
  return puzzleDatabase[dateStr] || null;
}
function getAllPuzzles() {
  return Object.values(puzzleDatabase).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}
function calculateScore(word, pangrams) {
  if (word.length === 4) return 1;
  if (pangrams.includes(word.toLowerCase())) return word.length + 7;
  return word.length;
}
function getHints(answers) {
  return answers.map((word) => ({
    word,
    firstLetter: word[0].toUpperCase(),
    length: word.length,
    hint: word[0].toUpperCase() + "-".repeat(word.length - 1)
  }));
}
async function fetchCustomPuzzleData(customLetters, fetchImpl = fetch) {
  try {
    const response = await fetchImpl(`/api/custom/${customLetters}/hints`, {
      headers: { "accept": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      if (data && data.puzzle) {
        return data.puzzle;
      }
    }
  } catch (error) {
    console.error("Error fetching custom puzzle:", error);
  }
  const letters = customLetters.toLowerCase();
  const centerLetter = letters[0];
  const outerLetters = letters.slice(1).split("");
  return {
    date: "custom",
    formattedDate: `Custom: ${customLetters}`,
    shortFormattedDate: `Custom: ${customLetters}`,
    centerLetter,
    outerLetters,
    letters: customLetters,
    pangrams: [],
    answers: [],
    definitions: {}
  };
}
export {
  getTodaysPuzzle as a,
  getAllPuzzles as b,
  calculateScore as c,
  getHints as d,
  getYesterdaysPuzzle as e,
  fetchCustomPuzzleData as f,
  getPuzzleByDate as g
};
