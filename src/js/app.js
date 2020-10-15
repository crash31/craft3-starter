// Import our CSS
import '../css/app-base.pcss';
import '../css/app-components.pcss';
import '../css/app-utilities.pcss';

// App main
const main = async() => {
  // Async load the vue module
  const { createApp, defineAsyncComponent } = await import(/* webpackChunkName: "vue" */ 'vue');
  
  // Create our root vue instance
  return createApp({
    components: {
      'confetti': defineAsyncComponent(() => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'))
    },
    data: () => ({

    })
  }).mount('#app');
}

// Execute async function
main().then((root) => {
})

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}