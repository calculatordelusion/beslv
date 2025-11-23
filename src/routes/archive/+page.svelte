<script>
	export let data;
	let puzzles = data.puzzles;
</script>

<svelte:head>
	<title>NYT Spelling Bee Archive – Past Answers & Hints | Spelling Bee Solver</title>
	<meta name="description" content="Browse the full archive of past NYT Spelling Bee puzzles with dates, letters, word counts, and quick links to hints and answers for each day." />
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-2">Puzzle Archive</h1>
			<p class="text-xl text-gray-600">Browse past Spelling Bee puzzles</p>
		</div>

		<div class="bg-white rounded-lg shadow-md">
			<!-- Mobile: card list -->
			<div class="md:hidden space-y-3">
				{#each puzzles as puzzle}
					<div class="border border-gray-200 rounded-lg p-4 bg-white flex flex-col gap-2">
						<div>
							<div class="text-sm font-semibold text-gray-900">{puzzle.formattedDate}</div>
							<div class="text-xs text-gray-500">{puzzle.date}</div>
						</div>
						<div class="flex flex-wrap items-center gap-1">
							<span class="px-2 py-1 bg-bee-yellow text-[10px] font-bold rounded">
								{puzzle.centerLetter.toUpperCase()}
							</span>
							{#each puzzle.outerLetters as letter}
								<span class="px-2 py-1 bg-gray-200 text-[10px] font-bold rounded">
									{letter.toUpperCase()}
								</span>
							{/each}
						</div>
						<div class="flex items-center justify-between text-xs text-gray-600">
							<span>
								{#if puzzle.answers}
									{puzzle.answers.length} words
								{:else}
									—
								{/if}
							</span>
							<span class="space-x-3">
								<a href="/{puzzle.date}/hints" class="text-blue-600 hover:text-blue-800 font-semibold">Hints</a>
								<a href="/{puzzle.date}/answers" class="text-blue-600 hover:text-blue-800 font-semibold">Answers</a>
							</span>
						</div>
					</div>
				{/each}
			</div>

			<!-- Desktop: table -->
			<div class="hidden md:block overflow-x-auto">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Letters</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Words</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						{#each puzzles as puzzle}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm font-medium text-gray-900">{puzzle.formattedDate}</div>
									<div class="text-sm text-gray-500">{puzzle.date}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center space-x-1">
										<span class="px-2 py-1 bg-bee-yellow text-xs font-bold rounded">
											{puzzle.centerLetter.toUpperCase()}
										</span>
										{#each puzzle.outerLetters as letter}
											<span class="px-2 py-1 bg-gray-200 text-xs font-bold rounded">
												{letter.toUpperCase()}
											</span>
										{/each}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{#if puzzle.answers}
										{puzzle.answers.length} words
									{:else}
										—
									{/if}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
									<a href="/{puzzle.date}/hints" class="text-blue-600 hover:text-blue-900">Hints</a>
									<a href="/{puzzle.date}/answers" class="text-blue-600 hover:text-blue-900">Answers</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

