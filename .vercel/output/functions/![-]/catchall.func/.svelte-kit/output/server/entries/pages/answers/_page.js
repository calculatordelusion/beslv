import { a as getTodayAnswers } from "../../../chunks/beesolverApi.js";
import { a as getTodaysPuzzle } from "../../../chunks/puzzleData.js";
async function load({ fetch }) {
  try {
    const puzzle = await getTodayAnswers(fetch);
    return { puzzle };
  } catch (e) {
    const puzzle = getTodaysPuzzle();
    return { puzzle, fallback: true };
  }
}
export {
  load
};
