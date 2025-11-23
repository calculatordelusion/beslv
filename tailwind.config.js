/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"Red Hat Mono"', 'monospace'],
				sans: ['"Red Hat Text"', 'sans-serif']
			},
			colors: {
				bee: {
					yellow: '#f7da21',
					dark: '#333333',
					gray: '#f5f5f5'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

