let mix = require("laravel-mix");
require('laravel-mix-workbox');


mix
	.setPublicPath("web/assets")
	.js("src/js/main.js", "js")
	.postCss("src/css/main.css", "css")
	.generateSW()
	.injectManifest({
		swSrc: './src/js/service-worker.js'
	})
	.extract()
	.version();

mix.browserSync({
	proxy: process.env.MIX_PROXY_URL,
	port: 3000,
	files: [
		"web/assets/css/main.css",
		"web/assets/js/main.js",
		"templates/**/*.twig",
	],
});

