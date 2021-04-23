<script>
	// Async load the Vue 3 API
	import { defineAsyncComponent, defineComponent } from "vue";
	import Skeleton from "../vue/Skeleton.vue";
	import SkeletonError from "../vue/SkeletonError.vue";

	export default defineComponent({
		components: {
			HelloWorld: defineAsyncComponent({
				loader: () =>
					import(/* webpackChunkName: "helloWorld" */ "../vue/HelloWorld.vue"),
				delay: 200,
				timeout: 3000,
				errorComponent: SkeletonError,
				loadingComponent: Skeleton,
			}),
		},
	});
</script>
