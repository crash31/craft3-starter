let mix = require("laravel-mix");
require('laravel-mix-workbox');
require('laravel-mix-tailwind');

mix
	// .webpackConfig({
	// 	output: {
	// 		chunkFilename: 'js/[name].js?id=[hash]',
	// 		filename: (chunkData) => {
	// 			return (chunkData.chunk.name.includes('workbox') || chunkData.chunk.name.includes('worker') ? '[name].js' : '[name].js?id=[hash]')
	// 		},
	// 		publicPath: '/'
	// 	}
	// })
	.setPublicPath("web")
	// Load Utility JS
	.js("src/js/utils/lazy-load-component.js", "web/js/util-lazyload-comp.js")
	.js("src/js/utils/lazysizes-wrapper.js", "web/js/util-lazysizes.js")
	// Load Main JS
	.js("src/js/main.js", "web/js/main.js")
	.vue()
	.sourceMaps()
	.postCss("src/css/main.css", "web/css")
	.tailwind('./tailwind.config.js')
	.generateSW()
	.injectManifest({
		swSrc: './src/js/service-worker.js'
	})
	// .extract()

if (mix.inProduction()) {
	mix.version();
}

mix.browserSync({
	proxy: process.env.MIX_PROXY_URL || 'https://craft3-starter.test',
	port: 3000,
	files: [
		"web/css/main.css",
		"web/js/{*,**/*}.js",
		"templates/**/*.twig",
	],
});

