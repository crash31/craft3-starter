const main = async() => {
	const LazySizes = await import(/* webpackChunkName: "lazysizes" */ 'lazysizes');
	LazySizes.init();
}
// Execute async function
main().then(() => {});