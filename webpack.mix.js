let mix = require("laravel-mix");
require('laravel-mix-workbox');
require('laravel-mix-tailwind');

mix
	.webpackConfig({
		output: {
			chunkFilename: 'js/[name].js?id=[hash]',
			filename: (chunkData) => {
				return (chunkData.chunk.name.includes('workbox') || chunkData.chunk.name.includes('worker') ? '[name].js' : 'js[name].js?id=[hash]')
			},
			publicPath: '/'
		}
	})
	.setPublicPath("web")
	.js("src/js/main.js", "web/").vue()
	.postCss("src/css/main.css", "web/css")
	.tailwind('./tailwind.config.js')
	.options({
		runtimeChunkPath: '/'
	})
	.generateSW()
	.injectManifest({
		swSrc: './src/js/service-worker.js'
	})
	.extract()
	.version();

mix.browserSync({
	proxy: process.env.MIX_PROXY_URL || 'https://craft3-starter.test',
	port: 3000,
	files: [
		"web/css/main.css",
		"web/js/{*,**/*}.js",
		"templates/**/*.twig",
	],
});

