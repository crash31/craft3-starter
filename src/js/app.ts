import "vite/dynamic-import-polyfill";
import '@/css/main.css';
import HelloWorld from '@/vue/HelloWorld.vue';
import { createApp } from 'vue';
import 'lazysizes';

// App main
const main = async() => {

  // Create our vue instance
  const hello = createApp(HelloWorld).mount('#helloWorld');

  // Mount the app
  return {hello};
}

// Execute async function
main().then( ({hello}) => {
  window.onload = () => {
    setTimeout(function () {
      var app = document.getElementById('app');
      if (app) { app.style.opacity='1.0'; }
    }, 100);
  }
})