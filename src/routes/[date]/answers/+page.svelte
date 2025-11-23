<script>
	export let data;
	import { calculateScore } from '$lib/puzzleData.js';
	import { goto } from '$app/navigation';
	
	// Make derived values reactive so they update on client-side navigation
	$: puzzle = data.puzzle;
	$: isCustom = data.isCustom || false;
	$: customLetters = data.customLetters || '';
	
	$: sortedAnswers = (puzzle?.answers || []).sort();
	$: totalScore = (puzzle?.answers || []).reduce((sum, word) => sum + calculateScore(word, puzzle?.pangrams || []), 0);
	
	// Reactive navigation date computation (updates when puzzle.date changes)
	$: navDates = (() => {
		if (isCustom || !puzzle?.date) return null;
		const current = new Date(puzzle.date + 'T12:00:00');
		const prev = new Date(current);
		prev.setDate(prev.getDate() - 1);
		const next = new Date(current);
		next.setDate(next.getDate() + 1);
		return {
			prevDate: prev,
			prevStr: prev.toISOString().split('T')[0],
			nextDate: next,
			nextStr: next.toISOString().split('T')[0],
			today: new Date().toISOString().split('T')[0]
		};
	})();

	// Pre-computed hrefs for anchors (Svelte-friendly) — reactive to navDates
	$: prevHref = navDates ? `/${navDates.prevStr}/answers` : null;
	$: nextHref = navDates 
		? (navDates.nextStr === navDates.today ? `/answers` : `/${navDates.nextStr}/answers`) 
		: null;
</script>

<svelte:head>
	<title>{isCustom ? `NYT Spelling Bee Answers for Custom: ${customLetters}` : `${puzzle.formattedDate} Answers - NYT Spelling Bee Solver`}</title>
	<meta name="description" content={isCustom
		? `NYT Spelling Bee answers for custom letter set ${customLetters} on SpellingBeeSolver.net.`
		: `NYT Spelling Bee answers and pangrams for ${puzzle.formattedDate}, including the full word list grouped by length.`} />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="text-center mb-6">
		{#if navDates}
				<!-- Navigation arrows for date-based puzzles -->
				<div class="flex justify-between items-center mb-3 max-w-md mx-auto">
					<a href={prevHref} onclick={(e) => { e.preventDefault(); goto(prevHref); }} class="link-nav flex items-center gap-1 text-sm">
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
						{navDates.prevDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
					</a>
					{#if navDates.nextStr <= navDates.today}
						<a href={nextHref} onclick={(e) => { e.preventDefault(); goto(nextHref); }} class="link-nav flex items-center gap-1 text-sm">
							{navDates.nextStr === navDates.today 
								? 'Today' 
								: navDates.nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					{:else}
						<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Future date</span>
					{/if}
				</div>
			{/if}
			
			<h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
				{#if isCustom}
					NYT Spelling Bee Answers
				{:else if puzzle.date === new Date().toISOString().split('T')[0]}
					Today's NYT Spelling Bee Answers
				{:else}
					NYT Spelling Bee Answers
				{/if}
			</h1>
			{#if isCustom}
				<p class="text-sm text-gray-600 font-mono">Custom: {customLetters}</p>
			{:else}
				<p class="text-sm text-gray-600 font-mono">{puzzle.formattedDate}</p>
			{/if}
		</div>
		
		<!-- Honeycomb display -->
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
		
	{#if isCustom}
			<!-- Note about custom solve -->
			<div class="alert alert-info mb-8">
				<p class="text-sm leading-relaxed">
					<strong class="font-bold">ℹ️ Note:</strong> You're looking at answers for a custom solve. The answers below may include words that the NYT Spelling Bee disallows and may be offensive or obscure.
				</p>
			</div>
		{/if}

		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-6 text-gray-900">NYT Spelling Bee Pangrams</h2>
			<div class="flex flex-wrap gap-3">
				{#each puzzle.pangrams as pangram}
					<div class="pangram-box">
						{pangram.toUpperCase()}
					</div>
				{/each}
			</div>
		</div>

		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-6 text-gray-900">NYT Spelling Bee Answers</h2>
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
			<a href="/archive" class="btn-secondary w-full sm:w-auto">
				<svg class="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Archive
			</a>
			<a href="/{puzzle.date}/hints" class="btn-primary w-full sm:w-auto">
				View Hints
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

	.word-box.pangram-word {
		background-color: #fef3c7;
		border-bottom: 3px solid #f59e0b;
		font-weight: bold;
	}
</style>

