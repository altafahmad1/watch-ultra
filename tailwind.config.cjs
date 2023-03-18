/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryDark: {
					DEFAULT: '#F56900',
				},
				primaryLight: {
					DEFAULT: '#181616',
				},
			},
		},
	},
	plugins: [],
};
