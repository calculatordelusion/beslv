<script>
	import '../app.css';
	import { page } from '$app/stores';

	const siteUrl = 'https://spellingbeesolver.net';
	const siteName = 'Spelling Bee Solver';

	$: canonicalUrl = siteUrl + $page.url.pathname;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<header class="sticky top-0 z-50 bg-white/80 backdrop-blur">
	<div class="sheen border-b border-amber-300 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-300">
		<div class="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-1 md:flex-nowrap md:px-6">
			<a class="flex items-center gap-2 text-lg font-bold hover:opacity-90 transition-all md:text-xl" href="/">
				<span class="text-2xl">🐝</span>
				<span class="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Spelling Bee Solver</span>
			</a>
			<span class="hidden text-xs text-gray-800/90 md:block lg:text-sm">NYT Spelling Bee Hints, Word Lists, and Answers — Updated Daily</span>
			<div class="ml-auto flex items-center gap-3">
				<a href="/archive" class="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm transition-all hover:shadow md:text-sm">
					Archive
				</a>
			</div>
		</div>
	</div>

	<nav class="bg-transparent">
		<div class="mx-auto max-w-6xl px-4 py-1">
			<!-- Floating gradient dock -->
			<div class="nav-dock rounded-full p-[2px] shadow-xl">
				<div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 rounded-full bg-white/90 backdrop-blur px-1 py-1">
					<a 
						href="/" 
						class="nav-item {$page.url.pathname === '/' ? 'nav-item-active' : ''}"
						aria-label="Home"
					>
						<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
						</svg>
					</a>

					<a 
						href="/hints" 
						class="nav-item {$page.url.pathname === '/hints' ? 'nav-item-active' : ''}"
					>
						<span class="hidden sm:inline">Today's</span> Hints
					</a>

					<a 
						href="/answers" 
						class="nav-item {$page.url.pathname === '/answers' ? 'nav-item-active' : ''}"
					>
						<span class="hidden sm:inline">Today's</span> Answers
					</a>

					<a 
						href="/pangram" 
						class="nav-item {$page.url.pathname === '/pangram' ? 'nav-item-active' : ''}"
					>
						<span class="hidden sm:inline">Today's</span> Pangram
					</a>

					<a 
						href="/yesterday/answers" 
						class="nav-item {$page.url.pathname === '/yesterday/answers' ? 'nav-item-active' : ''}"
					>
						Yesterday
					</a>

					<a 
						href="/faq" 
						class="nav-item {$page.url.pathname === '/faq' ? 'nav-item-active' : ''}"
						aria-label="FAQ"
					>
						<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<main class="entry-content mx-auto my-4 max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
	<slot />
</main>

<footer class="mt-16 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-6 text-sm text-gray-600">
		<span>© 2025 <a class="font-medium text-gray-800 hover:text-blue-600 transition-colors" href="/">Spelling Bee Solver</a></span>
		<span class="text-gray-400">·</span>
		<a class="hover:text-blue-600 transition-colors" href="/contact">Contact Us</a>
		<span class="text-gray-400">·</span>
		<a class="hover:text-blue-600 transition-colors" href="/privacy">Privacy Policy</a>
	</div>
</footer>

<style>
	/* Animated header sheen */
	.sheen { position: relative; overflow: hidden; }
	.sheen::after {
		content: "";
		position: absolute; inset: 0; pointer-events: none;
		background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.25) 20%, transparent 40%);
		transform: translateX(-100%);
		animation: sheenMove 8s linear infinite;
	}
	@keyframes sheenMove { 0%{transform:translateX(-100%)} 60%{transform:translateX(100%)} 100%{transform:translateX(100%)} }

	/* Gradient dock with animated background */
	.nav-dock { background: linear-gradient(135deg,#f59e0b,#f97316,#fde68a,#f59e0b); background-size: 300% 300%; animation: moveGradient 14s ease infinite; box-shadow: 0 10px 20px rgba(245, 158, 11, .25); }
	@keyframes moveGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

	/* Navigation Items (pill-style) */
	.nav-item {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.4rem 0.95rem;
		font-size: 0.82rem;
		font-weight: 700;
		text-align: center;
		color: #374151;
		border-radius: 9999px;
		transition: all 0.2s;
		background: transparent;
		position: relative;
	}
	.nav-item::after {
		content: ""; position: absolute; inset: 0; border-radius: inherit; box-shadow: inset 0 0 0 0 rgba(245,158,11,.25); transition: box-shadow .2s ease;
	}
	.nav-item:hover::after { box-shadow: inset 0 0 0 2px rgba(245,158,11,.35); }
	.nav-item:hover { transform: translateY(-1px); background: #fff7ed; color: #111827; }
	
	.nav-item-active {
		background: linear-gradient(to right, #fbbf24, #f59e0b);
		color: #1f2937;
		border: 1px solid rgba(245, 158, 11, 0.6);
		box-shadow: 0 4px 12px rgba(251, 191, 36, 0.35);
	}
	
	@media (min-width: 640px) {
		.nav-item { font-size: 0.92rem; padding: 0.5rem 1rem; }
	}
</style>

