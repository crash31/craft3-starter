import App from "../vue/App.vue";

// console.log('Loading javascript...')

// App main
const main = async() => {
  // Async load the Vue 3 APIs we need rom the Vue ESM
  const { createApp } = await import(/* webpackChunkName: "vue" */ 'vue');
  
  // Create our vue instance
  const app = createApp(App);

  // Mount the app
  const root = app.mount('#app');

  return root;
}

// Execute async function
main().then((root) => {
  window.onload = () => {
    setTimeout(function () {
      var app = document.getElementById('app');
      if (app) { app.style.opacity='1.0'; }
    }, 500);
  }
});

// Accept HMR
if(module.hot) {
  module.hot.accept();
}