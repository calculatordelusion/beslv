export async function load({ fetch }) {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const dateStr = yesterday.toISOString().split('T')[0];
	
	let puzzle = null;
	
	// Try to fetch from external API first
	try {
		const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${dateStr}.json`);
		if (response.ok) {
			const data = await response.json();
			const letters = data.today.centerLetter + data.today.outerLetters.join('');
			
			// Fetch hints to get full puzzle data
			const hintsResponse = await fetch(`/api/custom/${letters}/hints`);
			if (hintsResponse.ok) {
				const hintsData = await hintsResponse.json();
				if (hintsData.ok && hintsData.puzzle) {
					puzzle = {
						...hintsData.puzzle,
						date: dateStr,
						formattedDate: yesterday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
					};
				}
			}
		}
	} catch (error) {
		console.error('Error fetching puzzle data:', error);
	}
	
	// Fallback to local data if API fails
	if (!puzzle) {
		try {
			const localData = await import(`../../../data/puzzles/${dateStr}.json`);
			puzzle = {
				...localData.default,
				date: dateStr,
				formattedDate: yesterday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
			};
		} catch (error) {
			// If no local data exists, return empty puzzle
			puzzle = {
				centerLetter: '',
				outerLetters: [],
				pangrams: [],
				answers: [],
				date: dateStr,
				formattedDate: yesterday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
			};
		}
	}
	
	return { puzzle };
}

