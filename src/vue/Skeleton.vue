<template>
	<span :style="{ height, width: computedWidth }" class="skeleton"></span>
</template>

<script>
	export default {
		name: "Skeleton",
		props: {
			maxWidth: {
				// The default maxiumum width is 100%.
				default: 100,
				type: Number,
			},
			minWidth: {
				// Lines have a minimum width of 80%.
				default: 80,
				type: Number,
			},
			height: {
				// Make lines the same height as text.
				default: "1em",
				type: String,
			},
			width: {
				// Make it possible to define a fixed
				// width instead of using a random one.
				default: null,
				type: String,
			},
		},
		computed: {
			computedWidth() {
				// Either use the given fixed width or
				// a random width between the given min
				// and max values.
				return (
					this.width ||
					`${Math.floor(
						Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
					)}%`
				);
			},
		},
	};
</script>

<style scoped>
	.skeleton {
		display: inline-block;
		position: relative;
		overflow: hidden;
		vertical-align: middle;
		background: theme("colors.gray.400");

		&:after {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			transform: translateX(-100%);
			background-image: linear-gradient(
				90deg,
				rgba(255, 255, 255, 0) 0,
				rgba(255, 255, 255, 0.2) 20%,
				rgba(255, 255, 255, 0.5) 60%,
				rgba(255, 255, 255, 0)
			);
			animation: shimmer 5s infinite;
		}
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
</style>
