import { promises } from "fs";
import path from "path";
let WORDS = null;
let LOADING_WORDS = null;
const PUZZLE_CACHE = /* @__PURE__ */ new Map();
async function loadWords() {
  if (WORDS) return WORDS;
  if (LOADING_WORDS) return await LOADING_WORDS;
  LOADING_WORDS = (async () => {
    try {
      const filePath = path.join(process.cwd(), "static", "words.txt");
      console.log("[loadWords] Reading dictionary from:", filePath);
      const txt = await promises.readFile(filePath, "utf8");
      const words = txt.split(/\r?\n/).map((w) => w.trim().toLowerCase()).filter((w) => w.length > 0 && /^[a-z]+$/.test(w));
      console.log(`[loadWords] Loaded ${words.length} words`);
      WORDS = words;
      return words;
    } catch (err) {
      console.error("[loadWords] Failed to load dictionary:", err);
      throw err;
    } finally {
      LOADING_WORDS = null;
    }
  })();
  return await LOADING_WORDS;
}
function basePuzzle(letters) {
  const lower = (letters || "???????").toLowerCase();
  const centerLetter = lower[0] || "";
  const outerLetters = lower.slice(1).split("");
  return {
    date: "custom",
    formattedDate: `Custom: ${letters}`,
    shortFormattedDate: `Custom: ${letters}`,
    centerLetter,
    outerLetters,
    letters,
    pangrams: [],
    answers: [],
    definitions: {}
  };
}
function buildPuzzleFromLetters(letters, words) {
  const lower = letters.toLowerCase();
  const centerLetter = lower[0];
  const outerLetters = lower.slice(1).split("");
  const allowed = new Set(lower.split(""));
  const answers = [];
  for (const w of words) {
    if (w.length < 4) continue;
    if (!w.includes(centerLetter)) continue;
    let ok = true;
    for (const ch of w) {
      if (!allowed.has(ch)) {
        ok = false;
        break;
      }
    }
    if (ok) answers.push(w);
  }
  const pangrams = answers.filter((w) => {
    const set = new Set(w.split(""));
    return lower.split("").every((ch) => set.has(ch));
  });
  return {
    date: "custom",
    formattedDate: `Custom: ${letters}`,
    shortFormattedDate: `Custom: ${letters}`,
    centerLetter,
    outerLetters,
    letters,
    pangrams,
    answers,
    definitions: {}
  };
}
const BUILTIN_FALLBACK_WORDS = [
  // Minimal built-in list to guarantee a non-empty dictionary if words.txt cannot be read
  "test",
  "tests",
  "taste",
  "state",
  "pasta",
  "staple",
  "paste",
  "asset",
  "estate",
  "septa",
  "pest",
  "pets",
  "seat",
  "sets",
  "step",
  "tapes",
  "stone",
  "tones",
  "notes",
  "easton",
  "satin",
  "stain",
  "saint",
  "antis",
  "pinto",
  "point",
  "paint",
  "pints",
  "neat",
  "ante",
  "neap",
  "pane"
];
async function GET({ params }) {
  const { letters } = params;
  if (!/^[a-zA-Z]{7}$/.test(letters)) {
    return new Response(JSON.stringify({
      ok: false,
      status: 422,
      message: "Invalid letters; expected exactly 7 A–Z characters",
      puzzle: basePuzzle(letters || "???????")
    }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
  const key = letters.toUpperCase();
  if (PUZZLE_CACHE.has(key)) {
    return new Response(JSON.stringify({ ok: true, puzzle: PUZZLE_CACHE.get(key), cached: true }), {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "public, max-age=60" }
    });
  }
  let words = [];
  let source = "file";
  try {
    words = await loadWords();
  } catch (e) {
    source = "builtin-fallback";
    words = BUILTIN_FALLBACK_WORDS;
  }
  try {
    const puzzle = buildPuzzleFromLetters(letters, words);
    PUZZLE_CACHE.set(key, puzzle);
    return new Response(JSON.stringify({ ok: true, source, puzzle }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, max-age=300",
        "access-control-allow-origin": "*"
      }
    });
  } catch (e) {
    console.error("[custom hints] generation failed:", e);
    return new Response(JSON.stringify({
      ok: false,
      status: 500,
      message: "Generation failed",
      error: String(e),
      puzzle: basePuzzle(letters)
    }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
}
export {
  GET
};
