let mix = require("laravel-mix");
require('laravel-mix-workbox');


mix
	.setPublicPath("public/assets")
	.js("src/js/main.js", "js/main.js")
	.postCss("src/css/main.css", "css")
	.generateSW()
	.extract()
	.version();

mix.browserSync({
	proxy: process.env.MIX_PROXY_URL,
	port: 3000,
	files: [
		"public/assets/css/main.css",
		"public/assets/js/main.js",
		"templates/**/*.twig",
	],
});

