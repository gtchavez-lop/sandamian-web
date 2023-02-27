/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#004787",
					"primary-focus": "#0062b8",
					"primary-content": "#D5E3FF",

					secondary: "#553F5D",
					"secondary-focus": "#72557c",
					"secondary-content": "#F7D8FE",

					accent: "#428bff",
					"accent-focus": "#75aaff",
					"accent-content": "#00315F",

					neutral: "#3D4758",
					"neutral-focus": "#525f75",
					"neutral-content": "#D9E3F8",

					"base-100": "#f9f9f9",
					"base-200": "#e0e0e0",
					"base-300": "#c7c7c7",
					"base-content": "#141415",

					info: "#1e7ab3",
					success: "#1eb337",
					warning: "#b3a61e",
					error: "#B3261E",

					"--rounded-box": "1rem",
					"--rounded-btn": "2rem",
					"--rounded-badge": "2rem",

					"--animation-btn": "0",
					"--animation-input": "0.2s",

					"--btn-text-case": "capitalize",
					"--navbar-padding": "0.75rem",
					"--border-btn": "2px",
				},
			},
		],
	},
};
