<script>
	export let data;
	import { goto } from '$app/navigation';
	
	// Make incoming data reactive so navigation to another date updates the page
	$: puzzle = data.puzzle || {};
	$: isCustom = data.isCustom || false;
	$: customLetters = data.customLetters || '';
	
	// Ensure arrays exist
	$: puzzle.pangrams = puzzle.pangrams || [];
	$: puzzle.outerLetters = puzzle.outerLetters || [];
	
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
	$: prevHref = navDates ? `/${navDates.prevStr}/pangram` : null;
	$: nextHref = navDates ? (navDates.nextStr === navDates.today ? `/pangram` : `/${navDates.nextStr}/pangram`) : null;
</script>

<svelte:head>
	<title>{isCustom ? `NYT Spelling Bee Pangram for Custom: ${customLetters}` : `${puzzle.formattedDate} - NYT Spelling Bee Pangram`}</title>
	<meta name="description" content={isCustom
		? `See pangrams for custom Spelling Bee puzzle with letters ${customLetters}`
		: `See pangrams for the ${puzzle.formattedDate} NYT Spelling Bee puzzle on SpellingBeeSolver.net.`} />
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header + nav -->
		<div class="text-center mb-8">
			{#if navDates}
				<div class="flex justify-between items-center mb-4">
					<a href={prevHref} onclick={(e) => { e.preventDefault(); goto(prevHref); }} class="text-blue-600 hover:text-blue-800 font-medium">
						← {navDates.prevDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
					</a>
					{#if navDates.nextStr <= navDates.today}
						<a href={nextHref} onclick={(e) => { e.preventDefault(); goto(nextHref); }} class="text-blue-600 hover:text-blue-800 font-medium">
							{navDates.nextStr === navDates.today ? 'Today →' : `${navDates.nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} →`}
						</a>
					{:else}
						<span class="text-gray-400">Future date</span>
					{/if}
				</div>
			{/if}
			<h1 class="text-4xl font-bold text-gray-900 mb-2">NYT Spelling Bee Pangram</h1>
			<p class="text-xl text-gray-600">{isCustom ? `Custom: ${customLetters}` : puzzle.formattedDate}</p>
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

		<div class="bg-white rounded-lg shadow-md p-6 mb-6">
			<h2 class="text-2xl font-bold mb-4">NYT Spelling Bee Pangrams</h2>
			<div class="flex flex-wrap gap-2 mb-6">
				{#each puzzle.pangrams as pangram}
					<div class="pangram-box">
						{pangram.toUpperCase()}
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-8 flex gap-4 justify-center">
			<a href="/{isCustom ? customLetters : puzzle.date}/hints" class="text-blue-600 hover:text-blue-800 font-medium">View Hints</a>
			<a href="/{isCustom ? customLetters : puzzle.date}/answers" class="text-blue-600 hover:text-blue-800 font-medium">View All Answers</a>
			<a href="/archive" class="text-blue-600 hover:text-blue-800 font-medium">Archive</a>
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
</style>

