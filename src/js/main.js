import App from "../vue/App.vue";
import { createApp } from 'vue';
import 'lazysizes';


// App main
const main = async() => {

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
    }, 100);
  }
});
