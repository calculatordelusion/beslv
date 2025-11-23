import { getTodayAnswers } from '$lib/beesolverApi.js';
import { getTodaysPuzzle } from '$lib/puzzleData.js';

export async function load({ fetch }) {
	try {
		const puzzle = await getTodayAnswers(fetch);
		return { puzzle };
	} catch (e) {
		const puzzle = getTodaysPuzzle();
		return { puzzle, fallback: true };
	}
}

