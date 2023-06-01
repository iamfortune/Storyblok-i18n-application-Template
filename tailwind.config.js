/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#00b3b0",
				secondary: "#1b243f",
				tertiary: "rgba(0, 179, 176, 0.12)",
			},
			fontFamily: {
				chakra: "var(--font-family-primary)",
				inter: "var(--font-family-secondary)",
				nunito: "var(--font-family-tertiary)",
				manrope: "var(--font-family-manrope)",
				"dm-sans": "var(--font-family-dm-sans)",
			},
			screens: {
				mw: "1440px",
			},
		},
	},
	plugins: [],
};
