/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
		  keyframes: {
			slide: {
			  from: { transform: "translateX(0)" },
			  to: { transform: "translateX(-50%)" },
			},
		  },
		  animation: {
			slide: "slide 15s linear infinite",
		  },
		},
	  },
}
