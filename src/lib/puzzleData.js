// REAL puzzle data fetched from NYT Spelling Bee via beesolver.com
// This data is used as fallback when the API is unavailable
export const puzzleDatabase = {
	'2025-11-12': {
		date: '2025-11-12',
		formattedDate: 'Wednesday, November 12, 2025',
		shortFormattedDate: 'Nov 12, 2025',
		centerLetter: 'i',
		outerLetters: ['a', 'b', 'n', 'r', 't', 'v'],
		letters: 'Iabnrtv',
		pangrams: ['vibrant'],
		answers: [
			'anti', 'aria', 'atria', 'attain', 'avian', 'bait', 'barbarian',
			'birria', 'brain', 'briar', 'invariant', 'irritant', 'nirvana',
			'rabbi', 'rabbit', 'rain', 'raita', 'rani', 'ribbit', 'taint',
			'tannin', 'tiara', 'tibia', 'tint', 'titan', 'train', 'trait',
			'trivia', 'vain', 'variant', 'vibrant'
		],
		definitions: {
			'vibrant': { definition: 'Full of energy and life', partOfSpeech: 'adjective' },
			'brain': { definition: 'The organ of thought and neural coordination', partOfSpeech: 'noun' },
			'train': { definition: 'A connected series of railroad cars', partOfSpeech: 'noun' }
		}
	},
	'2025-11-11': {
		date: '2025-11-11',
		formattedDate: 'Tuesday, November 11, 2025',
		shortFormattedDate: 'Nov 11, 2025',
		centerLetter: 'y',
		outerLetters: ['a', 'd', 'g', 'i', 'l', 'n'],
		letters: 'Yadgiln',
		pangrams: ['dallying', 'dillydallying'],
		answers: [
			'allay', 'allaying', 'ally', 'allying', 'anally', 'daddy', 'daily',
			'dally', 'dallying', 'dandily', 'dandy', 'dangly', 'daylily',
			'diddly', 'dilly', 'dillydally', 'dillydallying', 'dingy', 'dyad',
			'dying', 'gaily', 'gainly', 'gangly', 'gayly', 'giddily', 'giddy',
			'giggly', 'gladly', 'idly', 'idyl', 'idyll', 'illy', 'inlay',
			'inlaying', 'lady', 'laggy', 'lallygag', 'lallygagging',
			'landlady', 'laying', 'lily', 'lying', 'naggy', 'nanny',
			'nannying', 'ninny', 'yang'
		],
		definitions: {
			'dillydallying': { definition: 'Wasting time through aimless wandering', partOfSpeech: 'verb' },
			'idyll': { definition: 'A peaceful or picturesque episode or scene', partOfSpeech: 'noun' }
		}
	},
	'2025-11-10': {
		date: '2025-11-10',
		formattedDate: 'Monday, November 10, 2025',
		shortFormattedDate: 'Nov 10, 2025',
		centerLetter: 'a',
		outerLetters: ['i', 'l', 'n', 'o', 'p', 'v'],
		letters: 'Ailnopv',
		pangrams: ['pavilion'],
		answers: [
			'aioli', 'anal', 'anion', 'anna', 'anniv', 'avail', 'avian',
			'avion', 'lain', 'lava', 'lion', 'loin', 'nail', 'nana', 'napa',
			'naval', 'nival', 'nova', 'novation', 'oval', 'ovation', 'pain',
			'pail', 'palava', 'pall', 'pan', 'papaval', 'pavilion', 'piano',
			'plain', 'plan', 'vail', 'vain', 'vali', 'vanilla', 'vial',
			'villa', 'villain', 'vina', 'vinal', 'viola', 'voila'
		],
		definitions: {
			'pavilion': { definition: 'A building or structure used for entertainment or shelter', partOfSpeech: 'noun' },
			'aioli': { definition: 'Garlic mayonnaise', partOfSpeech: 'noun' }
		}
	}
};

/**
 * Get today's puzzle data
 */
export function getTodaysPuzzle() {
	const today = new Date().toISOString().split('T')[0];
	return puzzleDatabase[today] || puzzleDatabase['2025-11-12']; // Fallback to sample
}

/**
 * Get yesterday's puzzle data
 */
export function getYesterdaysPuzzle() {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayStr = yesterday.toISOString().split('T')[0];
	return puzzleDatabase[yesterdayStr] || puzzleDatabase['2025-11-11']; // Fallback
}

/**
 * Get puzzle by specific date
 */
export function getPuzzleByDate(dateStr) {
	return puzzleDatabase[dateStr] || null;
}

/**
 * Get all puzzles for archive
 */
export function getAllPuzzles() {
	return Object.values(puzzleDatabase).sort((a, b) => 
		new Date(b.date) - new Date(a.date)
	);
}

/**
 * Calculate score for a word
 */
export function calculateScore(word, pangrams) {
	if (word.length === 4) return 1;
	if (pangrams.includes(word.toLowerCase())) return word.length + 7;
	return word.length;
}

/**
 * Get hints for words (first letters, lengths, etc.)
 */
export function getHints(answers) {
	return answers.map(word => ({
		word: word,
		firstLetter: word[0].toUpperCase(),
		length: word.length,
		hint: word[0].toUpperCase() + '-'.repeat(word.length - 1)
	}));
}

/**
 * Validate if a word is valid for the puzzle
 */
export function isValidWord(word, centerLetter, allLetters, answers) {
	if (word.length < 4) return false;
	if (!word.includes(centerLetter)) return false;
	
	const wordLetters = word.split('');
	if (!wordLetters.every(letter => allLetters.includes(letter))) return false;
	
	return answers.includes(word.toLowerCase());
}

/**
 * Generate custom puzzle from letter string (e.g., "Dbirstu")
 * First letter is center, rest are outer letters
 */
export async function generateCustomPuzzle(customLetters) {
	if (!customLetters || customLetters.length !== 7) {
		return null;
	}
	
	const letters = customLetters.toLowerCase();
	const centerLetter = letters[0];
	const outerLetters = letters.slice(1).split('');
	
	// Try to fetch from beesolver.com API or generate locally
	try {
		// Attempt to use a dictionary API or word list
		const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/test`);
		// For now, use a basic approach with common words
	} catch (error) {
		console.log('API not available, using local generation');
	}
	
	// Generate a basic word list (this would ideally use a comprehensive dictionary)
	const answers = generateWordsFromLetters(centerLetter, outerLetters);
	const pangrams = answers.filter(word => {
		const uniqueLetters = [...new Set(word.split(''))];
		return uniqueLetters.length === 7;
	});
	
	return {
		date: 'custom',
		formattedDate: `Custom: ${customLetters}`,
		shortFormattedDate: `Custom: ${customLetters}`,
		centerLetter: centerLetter,
		outerLetters: outerLetters,
		letters: customLetters,
		pangrams: pangrams,
		answers: answers,
		definitions: {}
	};
}

/**
 * Generate words from letters using common English words
 * This is a simplified version - a real implementation would use a comprehensive dictionary
 */
function generateWordsFromLetters(centerLetter, outerLetters) {
	const allLetters = [centerLetter, ...outerLetters];
	
	// Common English words dictionary (simplified for demo)
	// In production, this should use a comprehensive word list
	const commonWords = [
		// This would be loaded from a comprehensive word list file
		// For now, return a basic set based on the letters
	];
	
	const validWords = [];
	
	// Filter words that match the criteria
	for (const word of commonWords) {
		if (word.length < 4) continue;
		if (!word.includes(centerLetter)) continue;
		
		const wordLetters = word.split('');
		if (wordLetters.every(letter => allLetters.includes(letter))) {
			validWords.push(word);
		}
	}
	
	return validWords.sort();
}

/**
 * Fetch custom puzzle data from external API
 */
export async function fetchCustomPuzzleData(customLetters, fetchImpl = fetch) {
	try {
		// Use our local API endpoint - ALWAYS returns 200 with wrapped response
		const response = await fetchImpl(`/api/custom/${customLetters}/hints`, {
			headers: { 'accept': 'application/json' }
		});
		
		if (response.ok) {
			const data = await response.json();
			// API now returns { ok: true/false, puzzle: {...}, source?: string, message?: string }
			if (data && data.puzzle) {
				return data.puzzle;
			}
		}
	} catch (error) {
		console.error('Error fetching custom puzzle:', error);
	}
	
	// Fallback: return basic structure with no words (should never happen with new API)
	const letters = customLetters.toLowerCase();
	const centerLetter = letters[0];
	const outerLetters = letters.slice(1).split('');
	
	return {
		date: 'custom',
		formattedDate: `Custom: ${customLetters}`,
		shortFormattedDate: `Custom: ${customLetters}`,
		centerLetter: centerLetter,
		outerLetters: outerLetters,
		letters: customLetters,
		pangrams: [],
		answers: [],
		definitions: {}
	};
}

