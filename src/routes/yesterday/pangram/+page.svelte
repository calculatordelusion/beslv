<script>
	export let data;
	const puzzle = data.puzzle;
	
	// Calculate yesterday's date for links
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayStr = yesterday.toISOString().split('T')[0];
</script>

<svelte:head>
	<title>Yesterday's NYT Spelling Bee Pangram | Spelling Bee Solver</title>
	<meta name="description" content="Review yesterday's NYT Spelling Bee pangram(s) and honeycomb letters, with quick links to full answers, hints and the archive." />
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-2">
				Yesterday's NYT Spelling Bee Pangram
			</h1>
			<p class="text-xl text-gray-600">{puzzle.formattedDate}</p>
		</div>
		
		<!-- Honeycomb display -->
		<div class="flex justify-center mb-8">
			<div class="honeycomb-container">
				<div class="honeycomb">
					<div class="hex outer" style="grid-area: top">{puzzle.outerLetters[0]?.toUpperCase()}</div>
					<div class="hex outer" style="grid-area: topleft">{puzzle.outerLetters[1]?.toUpperCase()}</div>
					<div class="hex center" style="grid-area: center">{puzzle.centerLetter?.toUpperCase()}</div>
					<div class="hex outer" style="grid-area: topright">{puzzle.outerLetters[2]?.toUpperCase()}</div>
					<div class="hex outer" style="grid-area: bottomleft">{puzzle.outerLetters[3]?.toUpperCase()}</div>
					<div class="hex outer" style="grid-area: bottomright">{puzzle.outerLetters[4]?.toUpperCase()}</div>
					<div class="hex outer" style="grid-area: bottom">{puzzle.outerLetters[5]?.toUpperCase()}</div>
				</div>
			</div>
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

		<div class="mt-6 flex gap-4 justify-center">
			<a href="/{yesterdayStr}/hints" class="text-blue-600 hover:text-blue-800 font-medium">View Hints</a>
			<a href="/yesterday/answers" class="text-blue-600 hover:text-blue-800 font-medium">View All Answers</a>
			<a href="/archive" class="text-blue-600 hover:text-blue-800 font-medium">Archive</a>
		</div>
	</div>
</div>

<style>
	.honeycomb-container {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}

	.honeycomb {
		display: grid;
		grid-template-areas:
			". top top ."
			"topleft topleft topright topright"
			"topleft center center topright"
			"bottomleft bottomleft bottomright bottomright"
			". bottom bottom .";
		gap: 4px;
		width: fit-content;
	}

	.hex {
		width: 80px;
		height: 80px;
		clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.hex.center {
		background-color: #fbbf24;
		color: #1f2937;
	}

	.hex.outer {
		background-color: #d1d5db;
		color: #1f2937;
	}

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

