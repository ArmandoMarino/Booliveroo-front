import { createApp } from 'vue'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue';
import { router } from './router';

const app = createApp(App);

// LOADER
app.component('AppLoader', AppLoader);

// ROUTER
app.use(router);

// LOCAL STORE
app.use(store);

app.mount('#app');
