import { json } from '@sveltejs/kit';
import { getPuzzleByDate } from '$lib/puzzleData.js';
import { error } from '@sveltejs/kit';

export function GET({ params }) {
	const puzzle = getPuzzleByDate(params.date);
	
	if (!puzzle) {
		throw error(404, 'Puzzle not found');
	}
	
	const response = {
		type: 'data',
		nodes: [
			{ type: 1, data: [null] },
			{ type: 1, data: puzzle }
		]
	};
	
	return json(response, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=0, must-revalidate'
		}
	});
}

