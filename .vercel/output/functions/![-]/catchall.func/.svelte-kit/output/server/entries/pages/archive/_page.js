import { b as getArchive } from "../../../chunks/beesolverApi.js";
import { b as getAllPuzzles } from "../../../chunks/puzzleData.js";
async function load({ fetch }) {
  try {
    const data = await getArchive(fetch);
    const puzzles = Array.isArray(data) ? data : data.archive || [];
    return { puzzles };
  } catch (e) {
    return { puzzles: getAllPuzzles(), fallback: true };
  }
}
export {
  load
};
