<svelte:head>
	<title>How Does NYT Spelling Bee Scoring Work? - Spelling Bee Solver FAQ</title>
	<meta name="description" content="Learn how points are calculated in the New York Times Spelling Bee. Four-letter words earn 1 point, longer words earn their length, and pangrams get 7 bonus points." />
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<a href="/faq" class="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block">
				← Back to all FAQs
			</a>
			<h1 class="text-4xl font-bold text-gray-900 mb-4">How does the NYT Spelling Bee scoring work?</h1>
		</div>

		<div class="bg-white rounded-lg shadow-md p-8">
			<div class="prose prose-blue max-w-none">
				<p class="text-lg leading-relaxed">
					The <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank" rel="noopener nofollow" class="text-blue-600 hover:text-blue-800">New York Times Spelling Bee</a> scoring system rewards players based on word length and whether they find special "pangram" words.
				</p>

				<h2>Basic Scoring Rules</h2>
				<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-6 border-2 border-blue-200">
					<ul class="space-y-3 mb-0">
						<li class="flex items-start gap-3">
							<span class="text-2xl">1️⃣</span>
							<div>
								<strong class="text-gray-900">Four-letter words:</strong> Worth <strong>1 point</strong> each
								<p class="text-sm text-gray-600 mt-1">Example: "CALL" = 1 point</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-2xl">📏</span>
							<div>
								<strong class="text-gray-900">Five or more letters:</strong> Worth <strong>points equal to their length</strong>
								<p class="text-sm text-gray-600 mt-1">Examples: "CALLS" = 5 points, "CALLING" = 7 points</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-2xl">⭐</span>
							<div>
								<strong class="text-gray-900">Pangrams:</strong> <strong>7 bonus points</strong> plus word length
								<p class="text-sm text-gray-600 mt-1">Example: 7-letter pangram = 7 (length) + 7 (bonus) = 14 points</p>
							</div>
						</li>
					</ul>
				</div>

				<h2>What is a Pangram?</h2>
				<p>
					A <strong>pangram</strong> is a word that uses all seven letters in the puzzle at least once. Pangrams are rare and valuable, earning 7 extra points on top of the word's length.
				</p>
				<p>
					Some puzzles have multiple pangrams, and occasionally you'll find a "perfect pangram" that uses each letter exactly once (very rare!).
				</p>

				<div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
					<div class="flex items-start">
						<svg class="w-6 h-6 text-amber-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
						</svg>
						<div>
							<p class="font-semibold text-amber-800">Pro Tip:</p>
							<p class="text-amber-700">Finding the pangram(s) early can give you a huge point boost and help you reach higher <a href="/faq/levels" class="text-amber-800 underline font-semibold">levels</a> faster!</p>
						</div>
					</div>
				</div>

				<h2>Scoring Examples</h2>
				<div class="space-y-3">
					<div class="p-4 bg-gray-50 rounded-lg">
						<p class="font-mono text-lg mb-1">CALL (4 letters)</p>
						<p class="text-gray-600">Score: <strong class="text-gray-900">1 point</strong></p>
					</div>
					<div class="p-4 bg-gray-50 rounded-lg">
						<p class="font-mono text-lg mb-1">CALLING (7 letters)</p>
						<p class="text-gray-600">Score: <strong class="text-gray-900">7 points</strong> (length)</p>
					</div>
					<div class="p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
						<p class="font-mono text-lg mb-1">CALLING (7 letters, pangram)</p>
						<p class="text-gray-600">Score: <strong class="text-amber-700">14 points</strong> (7 length + 7 bonus)</p>
					</div>
				</div>

				<h2>Valid Words Only</h2>
				<p>
					Not all words you might think of will count. The NYT Spelling Bee uses a pre-determined word list that excludes:
				</p>
				<ul>
					<li>Proper nouns (names, places)</li>
					<li>Hyphenated words</li>
					<li>Words with punctuation (apostrophes, etc.)</li>
					<li>Offensive or extremely obscure words</li>
				</ul>
				<p>
					The official dictionary used is not public, so even valid English words may not be accepted if they're not on the NYT's list for that day.
				</p>

				<h2>Reaching Different Levels</h2>
				<p>
					Your score determines your rank, from "Beginner" to "<a href="/faq/queen-bee" class="text-blue-600 hover:text-blue-800 font-semibold">Queen Bee</a>". The ranks are based on percentages of the maximum possible score:
				</p>
				<ul>
					<li><strong>Genius:</strong> 70% of maximum points</li>
					<li><strong>Queen Bee:</strong> 100% of maximum points (all words found)</li>
				</ul>
				<p>
					See the full list of <a href="/faq/levels" class="text-blue-600 hover:text-blue-800 font-semibold">all 10 levels and their requirements</a>.
				</p>

				<h2>Need Help Maximizing Your Score?</h2>
				<div class="flex flex-col sm:flex-row gap-4 mt-6">
					<a href="/hints" class="btn-primary text-center">
						💡 Get Today's Hints
					</a>
					<a href="/pangram" class="btn-secondary text-center">
						⭐ Find Today's Pangram
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 text-center">
			<a href="/faq" class="btn-primary">← Back to all FAQs</a>
		</div>
	</div>
</div>

