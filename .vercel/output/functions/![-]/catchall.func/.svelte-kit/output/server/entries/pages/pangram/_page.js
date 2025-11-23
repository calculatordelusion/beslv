import { c as getTodayPangram } from "../../../chunks/beesolverApi.js";
import { a as getTodaysPuzzle } from "../../../chunks/puzzleData.js";
async function load({ fetch }) {
  try {
    const puzzle = await getTodayPangram(fetch);
    return { puzzle };
  } catch (e) {
    const puzzle = getTodaysPuzzle();
    return { puzzle, fallback: true };
  }
}
export {
  load
};
