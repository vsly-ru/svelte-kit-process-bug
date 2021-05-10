module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				green: {
					1: "#89CA77",
				}
			}
		}
	},
	plugins: [],
};
