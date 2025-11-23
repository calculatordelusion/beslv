import { getAnswersByDate } from '$lib/beesolverApi.js';
import { getPuzzleByDate, fetchCustomPuzzleData } from '$lib/puzzleData.js';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const { date } = params;
	
	// Check if it's a custom letter combination (7 letters, no hyphens)
	if (/^[a-zA-Z]{7}$/.test(date)) {
		// Handle as custom solver
		const puzzle = await fetchCustomPuzzleData(date, fetch);
		if (!puzzle) {
			throw error(404, 'Could not generate puzzle for these letters');
		}
		return { puzzle, customLetters: date, isCustom: true };
	}
	
	// Handle as date
	try {
		const puzzle = await getAnswersByDate(date, fetch);
		return { puzzle, isCustom: false };
	} catch (err) {
		// Fallback to local data
		const puzzle = getPuzzleByDate(date);
		if (!puzzle) throw error(404, `Puzzle not found for ${date}`);
		return { puzzle, fallback: true, isCustom: false };
	}
}

