let mix = require("laravel-mix");
let tailwind = require("tailwindcss");

mix.disableSuccessNotifications();
mix.setPublicPath("public/assets");

mix.browserSync({
	proxy: process.env.MIX_PROXY_URL,
	port: 3000,
	files: [
		"public/assets/css/main.css",
		"public/assets/js/main.js",
		"templates/**/*.twig",
	],
});

mix
	.options({
		processCssUrls: false,
		postCss: [
			require("postcss-import"),
			require("postcss-nested"),
			tailwind(),
			require("autoprefixer"),
		],
	})
	.postCss("src/css/main.css", "css/main.css")
	.js("src/js/main.js", "js/main.js")
	.version();
