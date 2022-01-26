// main.js

// Main JavaScript page for the entire vue app
// imports multiple elements to allow for vue functionality
// imports createApp, App, router, BootstrapVue3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'


// Optional, since every component import their Bootstrap funcionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


// App creation and use of boostrap as well as the router
const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')




