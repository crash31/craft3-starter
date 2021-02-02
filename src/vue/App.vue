<script>
	// Async load the Vue 3 API
	import { defineAsyncComponent, defineComponent } from "vue";

	export default defineComponent({
		components: {
			helloWorld: defineAsyncComponent(() =>
				import(/* webpackChunkName: "helloWorld" */ "../vue/HelloWorld.vue")
			),
		},
	});
</script>
