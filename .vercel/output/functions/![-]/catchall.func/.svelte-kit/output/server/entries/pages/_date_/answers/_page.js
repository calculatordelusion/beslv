import { d as getAnswersByDate } from "../../../../chunks/beesolverApi.js";
import { f as fetchCustomPuzzleData, g as getPuzzleByDate } from "../../../../chunks/puzzleData.js";
import { error } from "@sveltejs/kit";
async function load({ params, fetch }) {
  const { date } = params;
  if (/^[a-zA-Z]{7}$/.test(date)) {
    const puzzle = await fetchCustomPuzzleData(date, fetch);
    if (!puzzle) {
      throw error(404, "Could not generate puzzle for these letters");
    }
    return { puzzle, customLetters: date, isCustom: true };
  }
  try {
    const puzzle = await getAnswersByDate(date, fetch);
    return { puzzle, isCustom: false };
  } catch (err) {
    const puzzle = getPuzzleByDate(date);
    if (!puzzle) throw error(404, `Puzzle not found for ${date}`);
    return { puzzle, fallback: true, isCustom: false };
  }
}
export {
  load
};
