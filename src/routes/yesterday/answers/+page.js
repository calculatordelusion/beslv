import { getYesterdaysPuzzle } from '$lib/puzzleData.js';

export async function load({ fetch }) {
	try {
		// Fetch directly from beesolver.com's yesterday endpoint
		const response = await fetch(`https://beesolver.com/yesterday/answers/__data.json`);
		const json = await response.json();
		
		// Use same parsing logic as beesolverApi
		const nodes = json?.nodes || [];
		const node = nodes[nodes.length - 1];
		const dataArray = node.data;
		
		const reconstruct = (obj, arr) => {
			if (Array.isArray(obj)) {
				return obj.map(item => {
					if (typeof item === 'number' && item >= 0 && item < arr.length) {
						return reconstruct(arr[item], arr);
					}
					return reconstruct(item, arr);
				});
			}
			if (obj && typeof obj === 'object') {
				const result = {};
				for (const key in obj) {
					const value = obj[key];
					if (typeof value === 'number' && value >= 0 && value < arr.length) {
						result[key] = reconstruct(arr[value], arr);
					} else {
						result[key] = reconstruct(value, arr);
					}
				}
				return result;
			}
			return obj;
		};
		
		// Find puzzle object
		let pageData = null;
		for (let i = dataArray.length - 1; i >= 0; i--) {
			const candidate = dataArray[i];
			if (candidate && typeof candidate === 'object' && !Array.isArray(candidate)) {
				if (candidate.date || candidate.centerLetter) {
					pageData = candidate;
					break;
				}
			}
		}
		
		if (pageData) {
			const puzzle = reconstruct(pageData, dataArray);
			return { puzzle };
		}
	} catch (e) {
		console.error('Failed to fetch yesterday puzzle from API:', e);
	}
	
	// Fallback to local data
	const puzzle = getYesterdaysPuzzle();
	return { puzzle, fallback: true };
}

