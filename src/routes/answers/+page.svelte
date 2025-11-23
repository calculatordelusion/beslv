<script>
	export let data;
	import { calculateScore } from '$lib/puzzleData.js';
	
	let puzzle = data.puzzle;
	
	$: sortedAnswers = puzzle.answers.sort();
	$: totalScore = puzzle.answers.reduce((sum, word) => sum + calculateScore(word, puzzle.pangrams), 0);
</script>

<svelte:head>
	<title>Today's NYT Spelling Bee Answers & Pangrams | Spelling Bee Solver</title>
	<meta name="description" content="See today's full NYT Spelling Bee answer list, pangrams and scoring breakdown, updated daily at 3:00 AM Eastern on SpellingBeeSolver.net." />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-6">
			<!-- Navigation arrows -->
			<div class="flex justify-between items-center mb-3 max-w-md mx-auto">
				<a href="/yesterday/answers" class="link-nav flex items-center gap-1 text-sm">
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
					Yesterday
				</a>
				<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Today</span>
			</div>
			
			<h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Today's NYT Spelling Bee Answers</h1>
			<p class="text-sm text-gray-600 font-mono">{puzzle.formattedDate}</p>
		</div>
		
		<!-- Honeycomb display (exact copy from beesolver.com) -->
		<div class="flex justify-center mb-6">
			<div class="relative h-64 w-64">
				<!-- Top -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, -92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[0]?.toUpperCase()}
					</div>
				</div>
				<!-- Top Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, -46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[1]?.toUpperCase()}
					</div>
				</div>
				<!-- Center (Yellow) -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-yellow-300">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.centerLetter?.toUpperCase()}
					</div>
				</div>
				<!-- Top Right -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, -46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[2]?.toUpperCase()}
					</div>
				</div>
				<!-- Bottom Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[3]?.toUpperCase()}
					</div>
				</div>
				<!-- Bottom -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, 92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[4]?.toUpperCase()}
					</div>
				</div>
				<!-- Bottom Right -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">
						{puzzle.outerLetters[5]?.toUpperCase()}
					</div>
				</div>
			</div>
		</div>

		<!-- Spoiler Alert -->
		<div class="alert alert-warning mb-8">
			<p class="text-sm leading-relaxed">
				<strong class="font-bold">⚠️ Spoiler Alert:</strong> This page contains all pangrams and answers for Today's New York Times Spelling Bee Puzzle. To see spoiler-aware hints for Today's Puzzle, visit the <a href="/hints" class="link-primary">hints page</a>. To see only the pangram, visit our <a href="/pangram" class="link-primary">Today's Pangram page</a>.
			</p>
		</div>

		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-6 text-gray-900">Today's NYT Spelling Bee Pangrams</h2>
			<div class="flex flex-wrap gap-3">
				{#each puzzle.pangrams as pangram}
					<div class="pangram-box">
						{pangram.toUpperCase()}
					</div>
				{/each}
			</div>
		</div>

		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-6 text-gray-900">Today's NYT Spelling Bee Answers</h2>
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

		<div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
			<a href="/hints" class="btn-secondary w-full sm:w-auto">
				<svg class="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				View Hints
			</a>
			<a href="/archive" class="btn-primary w-full sm:w-auto">
				View Archive
				<svg class="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</div>

<style>
	.pangram-box {
		padding: 0.75rem 1.25rem;
		background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
		border: 2px solid #fbbf24;
		border-radius: 0.5rem;
		font-family: 'Red Hat Mono', 'Courier New', monospace;
		font-weight: 700;
		font-size: 1.125rem;
		box-shadow: 0 4px 6px rgba(251, 191, 36, 0.2);
		transition: all 0.2s;
		cursor: default;
	}
	
	.pangram-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(251, 191, 36, 0.3);
	}

	.word-box {
		padding: 0.625rem 1rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.375rem;
		font-family: 'Red Hat Mono', 'Courier New', monospace;
		font-size: 0.9375rem;
		background-color: #fafafa;
		transition: all 0.15s;
		cursor: default;
	}
	
	.word-box:hover {
		background-color: #f3f4f6;
		border-color: #d1d5db;
		transform: translateY(-1px);
	}

	.word-box.pangram-word {
		background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
		border: 2px solid #fbbf24;
		font-weight: 700;
		box-shadow: 0 2px 4px rgba(251, 191, 36, 0.15);
	}
	
	.word-box.pangram-word:hover {
		box-shadow: 0 4px 8px rgba(251, 191, 36, 0.25);
	}
</style>

