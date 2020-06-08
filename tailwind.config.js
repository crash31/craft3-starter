module.exports = {
	purge: {
		folders: ["src", "templates"],
		extensions: ["twig", "html", "js", "php", "vue"],
	},
	// Overwrites theme elements
	theme: {
		// Adds to theme elements without overwriting them
		extend: {},
	},
	variants: {},
	plugins: [],
};
