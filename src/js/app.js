// App main
const main = async () => {
  // Async load the vue module
  const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
  const vm = new Vue({
    el: '#app',
    components: {
      'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue')
    }
  });

  return vm;
};

// Execute async function
main().then( (vm) => {});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}