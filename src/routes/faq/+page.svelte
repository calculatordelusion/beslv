<script>
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "What does Spelling Bee Solver do?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Spelling Bee Solver provides spoiler-aware hints, today's complete NYT Spelling Bee answers including pangrams, a custom 7-letter solver, and an archive of past New York Times Spelling Bee puzzles."
				}
			},
			{
				"@type": "Question",
				"name": "How do I use NYT Spelling Bee Solver?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "You can use NYT Spelling Bee Solver to view today's answers and pangrams, get spoiler-aware hints, solve custom letter sets, and browse an archive of past New York Times Spelling Bee puzzles on SpellingBeeSolver.net."
				}
			},
			{
				"@type": "Question",
				"name": "When does the NYT Spelling Bee reset?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "The New York Times Spelling Bee puzzle resets daily at 3:00 AM Eastern Time and SpellingBeeSolver.net updates automatically with the new hints and answers."
				}
			},
			{
				"@type": "Question",
				"name": "What is Queen Bee status in NYT Spelling Bee?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Queen Bee is the highest rank in the NYT Spelling Bee and is achieved when you find every accepted word for that day's puzzle."
				}
			}
		]
	};
</script>

<svelte:head>
	<title>Spelling Bee Solver FAQ - NYT Spelling Bee Answers & Help</title>
	<meta name="description" content="Get answers to common questions about NYT Spelling Bee Solver, New York Times Spelling Bee rules, pangrams, Queen Bee status, and how to solve daily puzzles with hints and answers." />
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<div class="bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">Spelling Bee Solver FAQ</h1>
			<p class="text-xl text-gray-600">
				Everything you need to know about NYT Spelling Bee Solver and the New York Times Spelling Bee
			</p>
		</div>

		<div class="bg-gradient-to-br from-amber-50/70 via-white to-blue-50/70 rounded-2xl shadow-xl p-6 sm:p-8 border border-amber-100">
			<div class="prose prose-blue max-w-none max-w-none">
				<h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-semibold">1</span>
					<span>About Spelling Bee Solver</span>
				</h2>
				
				<h3>What does Spelling Bee Solver do?</h3>
				<p>
					Spelling Bee Solver is a free companion for the New York Times Spelling Bee. It provides spoiler-aware hints, the complete answer list including pangrams, and an archive of past puzzles—plus a custom solver for any 7-letter hive.
				</p>

				<h3>Is Spelling Bee Solver free to use?</h3>
				<p>
					Yes! Spelling Bee Solver is completely free to use. There are no subscriptions, no hidden fees, and 
					no registration required. Get instant access to today's NYT Spelling Bee answers and hints anytime.
				</p>

				<h3>Do I need a New York Times subscription to use Spelling Bee Solver?</h3>
				<p>
					No, you don't need an NYT subscription to use Spelling Bee Solver. However, to play the official 
					Spelling Bee puzzle on the New York Times website, you will need an NYT Games subscription.
				</p>

				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold">2</span>
					<span>About the NYT Spelling Bee</span>
				</h2>

				<h3>What is the NYT Spelling Bee?</h3>
				<p>
					The New York Times Spelling Bee is a daily word puzzle with seven letters arranged in a honeycomb. One letter sits in the center and must appear in every valid word.
				</p>

				<h3>What are the rules of Spelling Bee?</h3>
				<p>The core rules are simple:</p>
				<ul>
					<li>Every word has to be at least four letters long.</li>
					<li>You must include the center letter in every answer.</li>
					<li>You can reuse letters as often as you like in a single word.</li>
					<li>Only standard dictionary words count — no proper names, hyphenated terms, or profanity.</li>
					<li>Four-letter words give 1 point each.</li>
					<li>Words with five or more letters are worth as many points as their length.</li>
					<li>Pangrams that use all seven letters earn an extra 7 bonus points.</li>
				</ul>

				<h3>What is a pangram?</h3>
				<p>
					In Spelling Bee, a pangram is a word that touches all seven letters in the hive at least once. Pangrams are worth extra points and feel like mini achievements inside the puzzle. Some days there are several pangrams; on very rare days there's a "perfect pangram" that uses each letter exactly one time.
				</p>

				<h3>What is Queen Bee status?</h3>
				<p>
					Queen Bee is the top rank in Spelling Bee. You only reach it when you've discovered every single word the puzzle considers valid for that day. Along the way you climb through ranks like Beginner, Good Start, Nice, Great and Genius before finally hitting Queen Bee.
				</p>


				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold">3</span>
					<span>Using Spelling Bee Solver</span>
				</h2>

				<h3>How do I use the Spelling Bee Solver?</h3>
				<p>
					You can use the NYT Spelling Bee Solver in several ways:
				</p>
				<ul>
					<li><strong>Today's Hints:</strong> Get spoiler-aware hints that progressively reveal information without ruining the puzzle</li>
					<li><strong>Today's Answers:</strong> View all answers for today's NYT Spelling Bee puzzle instantly</li>
					<li><strong>Pangram Finder:</strong> Quickly discover today's pangram(s) to earn bonus points</li>
					<li><strong>Custom Solver:</strong> Enter your own 7 letters to solve any Spelling Bee puzzle combination</li>
					<li><strong>Archive:</strong> Access hints and answers for past New York Times Spelling Bee puzzles</li>
				</ul>

				<h3>What time does the NYT Spelling Bee reset?</h3>
				<p>
					The New York Times Spelling Bee puzzle resets daily at 3:00 AM Eastern Time (ET). Our Spelling Bee Solver 
					updates automatically with the new puzzle answers as soon as they're available.
				</p>

				<h3>How do I solve a custom puzzle?</h3>
				<p>
					On the homepage, you'll see an empty honeycomb. Simply click on the cells and enter your 
					seven letters (one center letter and six outer letters). Then click "Get Hints" or 
					"Get All Answers" to see solutions for your custom letter combination.
				</p>

				<h3>What are spoiler-aware hints?</h3>
				<p>
					Our hints are designed to help without ruining the puzzle. They start with general information 
					(like pangrams and two-letter combinations) and progressively reveal more details. You can 
					click to reveal each section at your own pace.
				</p>

				<h3>Can I see yesterday's puzzle or older Spelling Bee games?</h3>
				<p>
					Yes. Use the "Yesterday's Answers" page to see the full solution for the most recent puzzle, and use the "Archive" link in the navigation to browse earlier dates and view their hints and answers.
				</p>

				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-semibold">4</span>
					<span>Technical Questions</span>
				</h2>

				<h3>Do I need to create an account?</h3>
				<p>
					No! Spelling Bee Solver works without any registration or login. Your puzzle progress is saved 
					locally in your browser.
				</p>

				<h3>Does Spelling Bee Solver work on mobile devices?</h3>
				<p>
					Yes, Spelling Bee Solver is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers.
					Access NYT Spelling Bee answers on-the-go from any device.
				</p>

				<h3>Why isn't a word showing up in the NYT Spelling Bee answers?</h3>
				<p>
					Spelling Bee Solver uses the official NYT Spelling Bee word list. If a word doesn't appear, it's likely 
					because the New York Times doesn't include it in their accepted words list. The NYT uses a 
					curated dictionary that excludes proper nouns, hyphenated words, and some obscure or offensive terms.
				</p>

				<h3>How accurate is the Spelling Bee Solver?</h3>
				<p>
					Spelling Bee Solver uses data directly from the New York Times Spelling Bee API, ensuring 100% accuracy 
					with the official puzzle answers. Every word and pangram is verified against the official NYT word list.
				</p>

				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold">5</span>
					<span>Tips and Strategies</span>
				</h2>

				<h3>What are some tips for solving Spelling Bee?</h3>
				<ul>
					<li>Start with common prefixes and suffixes (UN-, RE-, -ING, -ED)</li>
					<li>Look for words that use the center letter multiple times</li>
					<li>Try shuffling the letters for a fresh perspective</li>
					<li>Take breaks and come back with fresh eyes</li>
					<li>Use our hints feature to get unstuck without spoiling everything</li>
				</ul>

				<h3>How can I improve my Spelling Bee skills?</h3>
				<p>
					Practice regularly, expand your vocabulary, and learn common word patterns. Our hints can help 
					you discover new words and patterns to remember for future puzzles.
				</p>

				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-semibold">6</span>
					<span>Contact and Support</span>
				</h2>

				<h3>How can I report a bug or issue?</h3>
				<p>
					Please visit our <a href="/contact" class="text-blue-600 hover:text-blue-800">Contact Us</a> page 
					to report any bugs or technical issues.
				</p>

				<h3>Can I suggest a new feature?</h3>
				<p>
					Absolutely! We welcome feature requests and suggestions. Please reach out through our 
					<a href="/contact" class="text-blue-600 hover:text-blue-800">Contact page</a>.
				</p>

				<h3>Is Spelling Bee Solver affiliated with The New York Times?</h3>
				<p>
					No, Spelling Bee Solver is an independent fan-made tool and is not affiliated with, endorsed by, or 
					connected to The New York Times or NYT Games in any way. We are a free resource created by fans for fans.
				</p>

				<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10 flex items-center gap-2">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-semibold">7</span>
					<span>Privacy and Data</span>
				</h2>

				<h3>Do you collect my personal information?</h3>
				<p>
					We collect minimal information necessary to provide our service. For details, please read our 
					<a href="/privacy" class="text-blue-600 hover:text-blue-800">Privacy Policy</a>.
				</p>

				<h3>Is my puzzle progress saved?</h3>
				<p>
					Your puzzle progress is saved locally in your browser using local storage. This data is not 
					sent to our servers and remains on your device.
				</p>
			</div>
		</div>

		<div class="mt-8 text-center">
			<a href="/" class="btn-primary">← Back to Home</a>
		</div>
	</div>
</div>

