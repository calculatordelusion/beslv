<script>
	export let data;
	import { calculateScore } from '$lib/puzzleData.js';
	
	const puzzle = data.puzzle;
	
	$: sortedAnswers = puzzle.answers.sort();
	$: totalScore = puzzle.answers.reduce((sum, word) => sum + calculateScore(word, puzzle.pangrams), 0);
	
	// Use puzzle.date from the API for accurate navigation
	const yesterdayStr = puzzle.date || new Date(new Date().getTime() - 24*60*60*1000).toISOString().split('T')[0];
	
	// Calculate day before yesterday
	const dayBeforeDate = new Date(yesterdayStr);
	dayBeforeDate.setDate(dayBeforeDate.getDate() - 1);
	const dayBeforeStr = dayBeforeDate.toISOString().split('T')[0];
</script>

<svelte:head>
	<title>Yesterday's NYT Spelling Bee Answers & Pangrams | Spelling Bee Solver</title>
	<meta name="description" content="See all of yesterday's NYT Spelling Bee answers and pangrams with links to hints and the full archive on SpellingBeeSolver.net." />
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<!-- Navigation arrows -->
			<div class="flex justify-between items-center mb-4">
				<a href="/{dayBeforeStr}/answers" class="text-blue-600 hover:text-blue-800 font-medium">
					← {new Date(dayBeforeStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
				</a>
				<a href="/answers" class="text-blue-600 hover:text-blue-800 font-medium">
					Today →
				</a>
			</div>
			
			<h1 class="text-4xl font-bold text-gray-900 mb-2">
				Yesterday's NYT Spelling Bee Answers
			</h1>
			<p class="text-xl text-gray-600">{puzzle.formattedDate}</p>
		</div>
		
		<!-- Honeycomb display (exact SVG layout like beesolver.com) -->
		<div class="flex justify-center mb-8">
			<div class="relative h-64 w-64">
				<!-- Top -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, -92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[0]?.toUpperCase()}</div>
				</div>
				<!-- Top Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, -46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[1]?.toUpperCase()}</div>
				</div>
				<!-- Center (Yellow) -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-yellow-300">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.centerLetter?.toUpperCase()}</div>
				</div>
				<!-- Top Right -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, -46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[2]?.toUpperCase()}</div>
				</div>
				<!-- Bottom Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[3]?.toUpperCase()}</div>
				</div>
				<!-- Bottom -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, 92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[4]?.toUpperCase()}</div>
				</div>
				<!-- Bottom Right -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters?.[5]?.toUpperCase()}</div>
				</div>
			</div>
		</div>

		<!-- Spoiler Alert -->
		<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
			<p class="text-sm text-red-700">
				<strong>Spoiler Alert:</strong> This page contains all pangrams and answers for Yesterday's New York Times Spelling Bee Puzzle. To see spoiler-aware hints for Yesterday's Puzzle, visit the <a href="/{yesterdayStr}/hints" class="underline">hints page</a>. To see only the pangram, visit our <a href="/yesterday/pangram" class="underline">Yesterday's Pangram page</a>.
			</p>
		</div>

	<div class="bg-white rounded-lg shadow-md p-6 mb-6">
			<h2 class="text-2xl font-bold mb-4">Yesterday's NYT Spelling Bee Pangrams</h2>
			<div class="flex flex-wrap gap-2 mb-6">
				{#each puzzle.pangrams as pangram}
					<div class="pangram-box">
						{pangram.toUpperCase()}
					</div>
				{/each}
			</div>
		</div>

		<div class="bg-white rounded-lg shadow-md p-6">
			<h2 class="text-2xl font-bold mb-4">Yesterday's NYT Spelling Bee Answers</h2>
			{#each Object.entries(sortedAnswers.reduce((groups, word) => {
				const len = word.length;
				if (!groups[len]) groups[len] = [];
				groups[len].push(word);
				return groups;
			}, {})) as [length, words]}
				<div class="mb-6">
					<h3 class="text-xl font-bold mb-3">{length} Letters</h3>
					<div class="flex flex-wrap gap-2">
						{#each words as word}
							<div class="word-box {puzzle.pangrams.includes(word) ? 'pangram-word' : ''}">
								{word.toUpperCase()}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-8 flex justify-between">
			<a href="/archive" class="btn-secondary">← Back to Archive</a>
			<a href="/{yesterdayStr}/hints" class="btn-primary">View Hints →</a>
		</div>
	</div>
</div>

<style>
	.pangram-box {
		padding: 0.5rem 1rem;
		background-color: #fef3c7;
		border: 1px solid #d1d5db;
		border-radius: 0.25rem;
		font-family: 'Courier New', monospace;
		font-weight: bold;
		border-bottom: 3px solid #f59e0b;
	}

	.word-box {
		padding: 0.5rem 1rem;
		border: 1px solid #d1d5db;
		border-radius: 0.25rem;
		font-family: 'Courier New', monospace;
		background-color: white;
	}

	.word-box.pangram-word {
		background-color: #fef3c7;
		border-bottom: 3px solid #f59e0b;
		font-weight: bold;
	}
</style>

