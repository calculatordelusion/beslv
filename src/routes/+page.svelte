<script>
	export let data;
	import { goto } from '$app/navigation';
	
	let puzzle = data.puzzle;

	const homepageSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"url": "https://spellingbeesolver.net/",
		"name": "Spelling Bee Solver",
		"description": "Spelling Bee Solver – a free NYT Spelling Bee solver for the New York Times Spelling Bee with daily hints, answers, pangrams and archive.",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://spellingbeesolver.net/{letters}/answers",
			"query-input": "required name=letters"
		}
	};
	
	// Custom solver state
	let customLetters = {
		center: '',
		outer: ['', '', '', '', '', '']
	};
	let errorMessage = '';
	
	function handleLetterInput(position, event) {
		const value = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
		
		if (position === 'center') {
			customLetters.center = value.slice(0, 1);
		} else {
			customLetters.outer[position] = value.slice(0, 1);
		}
		errorMessage = '';
	}
	
	function validateAndNavigate(destination) {
		const center = customLetters.center;
		const outer = customLetters.outer.join('');
		
		if (!center || outer.length !== 6) {
			errorMessage = 'Please enter all 7 letters (1 center + 6 outer)';
			return;
		}
		
		// Check for unique letters
		const allLetters = center + outer;
		const uniqueLetters = new Set(allLetters.toLowerCase());
		if (uniqueLetters.size !== 7) {
			errorMessage = 'All letters must be unique';
			return;
		}
		
		const customString = center + outer;
		goto(`/${customString}/${destination}`);
	}
</script>

<svelte:head>
	<title>Spelling Bee Solver – NYT & New York Times Spelling Bee Answers, Hints & Pangrams | SpellingBeeSolver.net</title>
	<meta name="description" content="Spelling Bee Solver is a free NYT Spelling Bee solver for the New York Times Spelling Bee – get today's answers, spoiler-aware hints, pangrams and an archive of past puzzles, updated daily at 3:00 AM Eastern on SpellingBeeSolver.net." />
	<meta property="og:title" content="Spelling Bee Solver – NYT & New York Times Spelling Bee Answers, Hints & Pangrams" />
	<meta property="og:description" content="Use Spelling Bee Solver as your NYT and New York Times Spelling Bee solver for today's answers, hints, pangrams and archive." />
	<script type="application/ld+json">
		{JSON.stringify(homepageSchema)}
	</script>
</svelte:head>

<div class="min-h-screen py-0">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
			<div class="text-center mb-4">
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
					NYT Spelling Bee Solver
				</h1>
				<p class="text-base md:text-lg text-gray-600 mb-1 font-medium">
					New York Times Spelling Bee answers, hints and pangrams updated every morning
				</p>
			<p class="text-sm text-gray-500 font-mono">
				{puzzle.formattedDate}
			</p>
		</div>

		<!-- Solver Interface -->
		<div class="max-w-2xl mx-auto card card-body mb-16">
			<h2 class="text-3xl font-bold text-center mb-4 text-gray-900">Spelling Bee Solver</h2>
			<p class="text-center text-gray-600 mb-8 text-lg">
				Enter letters and click a button below to get hints or answers.
			</p>
			
			<!-- Custom Honeycomb Grid with Inputs -->
			<div class="flex flex-col items-center mb-6">
				<!-- Top Row -->
				<div class="flex justify-center mb-2">
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[0]}
						oninput={(e) => handleLetterInput(0, e)}
						placeholder=""
					/>
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[1]}
						oninput={(e) => handleLetterInput(1, e)}
						placeholder=""
					/>
				</div>
				
				<!-- Middle Row -->
				<div class="flex justify-center mb-2">
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[2]}
						oninput={(e) => handleLetterInput(2, e)}
						placeholder=""
					/>
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-center mx-2 text-center uppercase"
						bind:value={customLetters.center}
						oninput={(e) => handleLetterInput('center', e)}
						placeholder=""
					/>
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[3]}
						oninput={(e) => handleLetterInput(3, e)}
						placeholder=""
					/>
				</div>
				
				<!-- Bottom Row -->
				<div class="flex justify-center">
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[4]}
						oninput={(e) => handleLetterInput(4, e)}
						placeholder=""
					/>
					<input 
						type="text" 
						maxlength="1"
						class="honeycomb-letter honeycomb-outer mx-2 text-center uppercase"
						bind:value={customLetters.outer[5]}
						oninput={(e) => handleLetterInput(5, e)}
						placeholder=""
					/>
				</div>
			</div>
			
			<!-- Error Message -->
			{#if errorMessage}
				<div class="text-center mb-6">
					<div class="alert alert-warning inline-block">
						<strong>Error:</strong> {errorMessage}
					</div>
				</div>
			{/if}
			
			<!-- Quick Links -->
			<div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 border-t border-gray-200 pt-8">
				<button 
					onclick={() => validateAndNavigate('hints')} 
					class="btn-primary w-full sm:w-auto"
				>
					💡 Get Hints →
				</button>
				<span class="text-gray-400 font-semibold text-sm">or</span>
				<button 
					onclick={() => validateAndNavigate('answers')} 
					class="btn-secondary w-full sm:w-auto"
				>
					✅ Get All Answers →
				</button>
			</div>
		</div>

		<!-- Rules and Scoring Section -->
		<div class="max-w-4xl mx-auto mb-12">
			<div class="grid gap-6 md:grid-cols-2">
				<!-- Rules Box -->
				<div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-200">
					<div class="flex items-center gap-3 mb-4">
						<div class="bg-amber-400 rounded-full p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-gray-900">Game Rules</h3>
					</div>
					<ul class="space-y-3 text-gray-700">
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span><strong class="text-gray-900">Minimum length:</strong> only words with four or more letters count toward your score.</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span><strong class="text-gray-900">Center letter:</strong> every valid word has to include the highlighted middle letter.</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span><strong class="text-gray-900">Reuse letters:</strong> you can repeat the same letter as many times as you like within a word.</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span><strong class="text-gray-900">Dictionary rules:</strong> answers must be regular English words – proper names, hyphenated forms and words that rely on punctuation don't qualify.</span>
						</li>
					</ul>
				</div>

				<!-- Scoring Box -->
				<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border-2 border-blue-200">
					<div class="flex items-center gap-3 mb-4">
						<div class="bg-blue-400 rounded-full p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-gray-900">Score</h3>
					</div>
					<div class="space-y-4 text-gray-700">
						<p class="leading-relaxed">
							The <a href="/faq/score" class="text-blue-700 font-semibold underline decoration-dotted">scoring system</a> rewards longer words and special pangrams:
						</p>
						<ul class="space-y-2 ml-4">
							<li class="flex items-start gap-2">
								<span class="text-blue-500 font-bold">•</span>
								<span>Four-letter answers always give you <strong class="text-gray-900">a single point</strong>.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-blue-500 font-bold">•</span>
								<span>From five letters up, a word's <strong class="text-gray-900">score matches its length</strong> — a seven-letter word is worth seven points, and so on.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-blue-500 font-bold">•</span>
								<span><strong class="text-gray-900">Pangrams</strong> that use all seven letters earn a <strong class="text-gray-900">seven-point bonus on top of their length</strong>, making them the most valuable finds.</span>
							</li>
						</ul>
						<p class="leading-relaxed">
							<a href="/faq/levels" class="text-blue-700 font-semibold underline decoration-dotted">Levels</a> range from <strong class="text-gray-900">Beginner</strong> to <strong class="text-gray-900">Genius</strong>. Find all possible words to achieve <a href="/faq/queen-bee" class="text-amber-600 font-semibold underline decoration-dotted">Queen Bee status</a>.
						</p>
						<div class="bg-white/60 rounded-lg p-3 mt-4 border border-blue-200">
							<p class="text-sm text-gray-600">
								<svg class="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
								</svg>
								<a href="/faq/when" class="text-blue-700 font-semibold underline decoration-dotted">Updated daily</a> at <strong>3:00 AM EST</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Info Section -->
		<div class="max-w-4xl mx-auto">
			<div class="grid gap-8 md:grid-cols-2">
				<div class="card card-body">
					<h2 class="text-2xl font-bold mb-4 text-gray-900">Spelling Bee Solver</h2>
					<p class="text-gray-700 leading-relaxed">
						Spelling Bee Solver is a free tool for fans of the New York Times Spelling Bee. By simply entering the day's seven letters, it instantly generates a complete list of every valid word, including the crucial pangram that uses all the letters. It's the perfect tool for when you're stuck, want to learn a few new words, or just can't stand not knowing what you missed.
					</p>
				</div>
				
				<div class="card card-body">
					<h3 class="text-2xl font-bold mb-4 text-gray-900">Spelling Bee Answers</h3>
					<p class="text-gray-700 leading-relaxed mb-4">
						When you're stuck or just want to check your work, this site lists the full New York Times Spelling Bee answer set for each day, including pangrams and shorter words.
					</p>
					<ul class="space-y-2">
						<li><a href="/pangram" class="link-primary">See today's pangram(s) and all answers</a></li>
						<li><a href="/hints" class="link-primary">Get gentle, spoiler-aware hints for today</a></li>
						<li><a href="/yesterday/answers" class="link-primary">Review yesterday's solution</a></li>
						<li><a href="/archive" class="link-primary">Browse the archive of past Spelling Bee puzzles</a></li>
					</ul>
				</div>
			</div>
			
			<div class="card card-body mt-8">
				<h3 class="text-2xl font-bold mb-4 text-gray-900">About the NYT Spelling Bee</h3>
				<p class="text-gray-700 leading-relaxed">
					The New York Times Spelling Bee is a daily word puzzle game from The New York Times where seven letters are arranged in a honeycomb, with one special letter in the middle. Using only those seven letters, players try to build as many valid English words as they can.
				</p>
				<p class="text-gray-700 leading-relaxed mt-3">
					Your job is to build as many real English words as you can using only those letters, always including the center letter at least once.
				</p>
			</div>
		</div>
	</div>
</div>

