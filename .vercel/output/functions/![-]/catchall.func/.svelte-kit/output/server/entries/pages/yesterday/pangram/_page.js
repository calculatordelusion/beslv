const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function load({ fetch }) {
  const yesterday = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = yesterday.toISOString().split("T")[0];
  let puzzle = null;
  try {
    const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${dateStr}.json`);
    if (response.ok) {
      const data = await response.json();
      const letters = data.today.centerLetter + data.today.outerLetters.join("");
      const hintsResponse = await fetch(`/api/custom/${letters}/hints`);
      if (hintsResponse.ok) {
        const hintsData = await hintsResponse.json();
        if (hintsData.ok && hintsData.puzzle) {
          puzzle = {
            ...hintsData.puzzle,
            date: dateStr,
            formattedDate: yesterday.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
          };
        }
      }
    }
  } catch (error) {
    console.error("Error fetching puzzle data:", error);
  }
  if (!puzzle) {
    try {
      const localData = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../data/puzzles/${dateStr}.json`, 6);
      puzzle = {
        ...localData.default,
        date: dateStr,
        formattedDate: yesterday.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
      };
    } catch (error) {
      puzzle = {
        centerLetter: "",
        outerLetters: [],
        pangrams: [],
        answers: [],
        date: dateStr,
        formattedDate: yesterday.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
      };
    }
  }
  return { puzzle };
}
export {
  load
};
