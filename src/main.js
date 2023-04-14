import { createApp } from 'vue'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
// TODO import AppLoader from './components/AppLoader.vue';
import { router } from './router';

const app = createApp(App);

//TODO LOADER app.component('AppLoader', AppLoader);

app.use(router);

app.use(store);

app.mount('#app');
