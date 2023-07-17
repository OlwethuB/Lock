import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'
createApp(App).use(store).use(router).mount('#app')
defineElement(lottie.loadAnimation);
