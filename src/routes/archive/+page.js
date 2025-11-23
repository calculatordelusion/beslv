import { getArchive } from '$lib/beesolverApi.js';
import { getAllPuzzles } from '$lib/puzzleData.js';

export async function load({ fetch }) {
	try {
		const data = await getArchive(fetch);
		// beesolver returns array directly, or {archive: [...]}
		const puzzles = Array.isArray(data) ? data : (data.archive || []);
		return { puzzles };
	} catch (e) {
		// Fallback to local archive
		return { puzzles: getAllPuzzles(), fallback: true };
	}
}

