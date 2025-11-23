import { getTodayHints } from '$lib/beesolverApi.js';
import { getTodaysPuzzle } from '$lib/puzzleData.js';

export async function load({ fetch }) {
	try {
		const puzzle = await getTodayHints(fetch);
		return { puzzle };
	} catch (e) {
		const puzzle = getTodaysPuzzle();
		return { puzzle, fallback: true };
	}
}

