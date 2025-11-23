<script>
	export let data;
	import { getHints } from '$lib/puzzleData.js';
	import { goto } from '$app/navigation';
	
	// Make incoming data reactive so navigation to another date updates the page
	$: puzzle = data.puzzle || {};
	$: isCustom = data.isCustom || false;
	$: customLetters = data.customLetters || '';
	
	// Ensure arrays exist
	$: puzzle.answers = puzzle.answers || [];
	$: puzzle.pangrams = puzzle.pangrams || [];
	$: puzzle.outerLetters = puzzle.outerLetters || [];
	
	$: hints = getHints(puzzle.answers);
	let revealedSections = {
		pangrams: false,
		twoLetterList: false,
		hints: false,
		allAnswers: false
	};
	
	function toggleReveal(section) {
		revealedSections[section] = !revealedSections[section];
	}
	
	// Date navigation computation
	$: navDates = (() => {
		if (!puzzle?.date || isCustom) return null;
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
	$: prevHref = navDates ? `/${navDates.prevStr}/hints` : null;
	$: nextHref = navDates ? (navDates.nextStr === navDates.today ? `/hints` : `/${navDates.nextStr}/hints`) : null;
	
	$: groupedByFirstLetter = hints.reduce((acc, hint) => {
		if (!acc[hint.firstLetter]) acc[hint.firstLetter] = [];
		acc[hint.firstLetter].push(hint);
		return acc;
	}, {});
</script>

<svelte:head>
	<title>{isCustom ? `NYT Spelling Bee Hints for Custom: ${customLetters}` : `${puzzle.formattedDate} - NYT Spelling Bee Hints`}</title>
	<meta name="description" content={isCustom
		? `Get hints for custom Spelling Bee puzzle with letters ${customLetters}`
		: `Get spoiler-aware hints for the ${puzzle.formattedDate} NYT Spelling Bee puzzle on SpellingBeeSolver.net.`} />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header + nav -->
		<div class="text-center mb-6">
			{#if navDates}
				<div class="flex justify-between items-center mb-3 max-w-md mx-auto">
					<a href={prevHref} onclick={(e) => { e.preventDefault(); goto(prevHref); }} class="link-nav flex items-center gap-1 text-sm">
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
						{navDates.prevDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
					</a>
					{#if navDates.nextStr <= navDates.today}
						<a href={nextHref} onclick={(e) => { e.preventDefault(); goto(nextHref); }} class="link-nav flex items-center gap-1 text-sm">
							{navDates.nextStr === navDates.today ? 'Today' : navDates.nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					{:else}
						<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Future date</span>
					{/if}
				</div>
			{/if}
			<h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">NYT Spelling Bee Hints</h1>
			<p class="text-sm text-gray-600 font-mono">{isCustom ? `Custom: ${customLetters}` : puzzle.formattedDate}</p>
		</div>
		<!-- Honeycomb display -->
		<div class="flex justify-center mb-8">
			<div class="relative h-64 w-64">
				<!-- Top -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, -92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[0]?.toUpperCase()}</div>
				</div>
				<!-- Top Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, -46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[1]?.toUpperCase()}</div>
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
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[2]?.toUpperCase()}</div>
				</div>
				<!-- Bottom Left -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(-80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[3]?.toUpperCase()}</div>
				</div>
				<!-- Bottom -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(0, 92%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[4]?.toUpperCase()}</div>
				</div>
				<!-- Bottom Right -->
				<div class="absolute left-1/2 top-1/2 h-[36.9%] w-[36.9%]" style="transform: translate(-50%, -50%) translate(80%, 46%)">
					<svg viewBox="0 -17 256 256" fill="none" class="absolute inset-0 text-gray-200">
						<path d="M-3.11325e-06 111L64 0.148707L192 0.148707L256 111L192 221.851L64 221.851L-3.11325e-06 111Z" fill="currentColor"></path>
					</svg>
					<div class="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase">{puzzle.outerLetters[5]?.toUpperCase()}</div>
				</div>
			</div>
		</div>

	{#if isCustom}
			<!-- Note about custom solve -->
			<div class="alert alert-info mb-6">
				<p class="text-sm leading-relaxed">
					<strong class="font-bold">ℹ️ Note:</strong> You're looking at answers for a custom solve. The answers below may include words that the NYT Spelling Bee disallows and may be offensive or obscure.
				</p>
			</div>

			<div class="alert alert-info mb-8">
				<p class="text-sm leading-relaxed">
					<strong class="font-bold">💡 Hint:</strong> This page contains hints to help solve Custom: {customLetters}'s New York Times Spelling Bee. To reveal a hint, click on any blurred area below. To see all pangrams and answers for this puzzle at once, visit the <a href="/{customLetters}/answers" class="link-primary">Spelling Bee Answers page</a>.
				</p>
			</div>
		{/if}

		<!-- Puzzle Info -->
		<div class="card card-body mb-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
				<div class="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
					<div class="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">Center Letter</div>
					<div class="text-4xl font-bold text-yellow-600">{puzzle.centerLetter.toUpperCase()}</div>
				</div>
				<div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
					<div class="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">Outer Letters</div>
					<div class="text-2xl font-bold text-gray-700 font-mono">
						{puzzle.outerLetters.join(' ').toUpperCase()}
					</div>
				</div>
				<div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
					<div class="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">Total Words</div>
					<div class="text-4xl font-bold text-blue-600">{puzzle.answers.length}</div>
				</div>
			</div>
		</div>

		<!-- Pangram Hint -->
		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-3 text-gray-900">Pangram(s)</h2>
			<p class="text-gray-600 mb-6 text-lg">
				Words that use all 7 letters at least once
			</p>
			<div class="mb-6 min-h-[80px] flex items-center justify-center">
				<div class:blur-spoiler={!revealedSections.pangrams} class:revealed={revealedSections.pangrams}>
					<div class="flex flex-wrap gap-3 justify-center">
						{#if puzzle.pangrams.length > 0}
							{#each puzzle.pangrams as pangram}
								<div class="py-3 px-5 bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-900 rounded-lg font-bold text-lg shadow-md">
									{pangram.toUpperCase()}
								</div>
							{/each}
						{:else}
							<div class="text-gray-500">No pangrams found for this combination</div>
						{/if}
					</div>
				</div>
			</div>
			<button 
				onclick={() => toggleReveal('pangrams')} 
				class="btn-primary"
			>
				{revealedSections.pangrams ? '🙈 Hide' : '👀 Reveal'} Pangram
			</button>
		</div>

		<!-- Two-Letter List -->
		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-3 text-gray-900">Words Grouped by First Two Letters</h2>
			<p class="text-gray-600 mb-6 text-lg">
				See which two-letter combinations start valid words
			</p>
			<div class="mb-6 min-h-[120px] flex items-center justify-center">
				<div class:blur-spoiler={!revealedSections.twoLetterList} class:revealed={revealedSections.twoLetterList} class="w-full">
					{#if puzzle.answers.length > 0}
						<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
							{#each [...new Set(puzzle.answers.map(w => w.substring(0, 2).toUpperCase()))] as twoLetter}
								<div class="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg text-center font-mono font-bold text-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
									{twoLetter}
								</div>
							{/each}
						</div>
					{:else}
						<div class="text-gray-500">No words found for this combination</div>
					{/if}
				</div>
			</div>
			<button 
				onclick={() => toggleReveal('twoLetterList')} 
				class="btn-primary"
			>
				{revealedSections.twoLetterList ? '🙈 Hide' : '👀 Reveal'} Two-Letter List
			</button>
		</div>

		<!-- Word Hints -->
		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-3 text-gray-900">Word Hints</h2>
			<p class="text-gray-600 mb-6 text-lg">
				First letter and word length for each answer
			</p>
			<div class="mb-6 min-h-[200px]">
				<div class:blur-spoiler={!revealedSections.hints} class:revealed={revealedSections.hints}>
					{#if Object.keys(groupedByFirstLetter).length > 0}
						{#each Object.entries(groupedByFirstLetter).sort() as [letter, words]}
							<div class="mb-6 last:mb-0">
								<h3 class="text-2xl font-bold text-gray-900 mb-3">{letter} <span class="text-lg text-gray-500 font-normal">({words.length} words)</span></h3>
								<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
									{#each words as hint}
										<div class="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg font-mono text-sm font-semibold text-gray-800 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
											{hint.hint} ({hint.length})
										</div>
									{/each}
								</div>
							</div>
						{/each}
					{:else}
						<div class="text-gray-500">No words found for this combination</div>
					{/if}
				</div>
			</div>
			<button 
				onclick={() => toggleReveal('hints')} 
				class="btn-primary"
			>
				{revealedSections.hints ? '🙈 Hide' : '👀 Reveal'} Hints
			</button>
		</div>

		<!-- All Answers -->
		<div class="card card-body mb-8">
			<h2 class="text-3xl font-bold mb-3 text-gray-900">All Answers</h2>
			<p class="text-gray-600 mb-6 text-lg">
				Complete list of all valid words
			</p>
			<div class="mb-6 min-h-[200px]">
				<div class:blur-spoiler={!revealedSections.allAnswers} class:revealed={revealedSections.allAnswers}>
					{#if puzzle.answers.length > 0}
						<div class="columns-2 md:columns-3 lg:columns-4 gap-6">
							{#each puzzle.answers.sort() as answer}
								<div class="py-2 px-3 mb-2 text-sm font-medium break-inside-avoid bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 font-mono">
									{answer}
									{#if puzzle.pangrams.includes(answer)}
										<span class="text-yellow-600 ml-1">★</span>
									{/if}
								</div>
							{/each}
						</div>
					{:else}
						<div class="text-gray-500">No words found for this combination</div>
					{/if}
				</div>
			</div>
			<button 
				onclick={() => toggleReveal('allAnswers')} 
				class="btn-primary"
			>
				{revealedSections.allAnswers ? '🙈 Hide' : '👀 Reveal'} All Answers
			</button>
		</div>

		<!-- Navigation -->
		<div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
			<a href="/" class="btn-secondary w-full sm:w-auto">
				<svg class="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Solver
			</a>
			<a href="/{isCustom ? customLetters : puzzle.date}/answers" class="btn-primary w-full sm:w-auto">
				View Answers
				<svg class="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</div>

