module.exports = {
	purge: {
		content: ['./templates/**/*.twig', './src/vue/**/*.vue']
	},
	// Overwrites theme elements
	theme: {
		// Adds to theme elements without overwriting them
		extend: {},
	},
	variants: {},
	plugins: [],
};
