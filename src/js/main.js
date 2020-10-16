import App from "../vue/App.vue";

// App main
const main = async() => {
  // Async load the Vue 3 APIs we need rom the Vue ESM
  const { createApp } = await import(/* webpackChunkName: "vue" */'vue');
  
  // Create our vue instance
  const app = createApp(App);

  // Mount the app
  const root = app.mount('#app');

  return root;
}

// Execute async function
main().then((root) => {
  
});

// Accept HMR
if(module.hot) {
  module.hot.accept()
}