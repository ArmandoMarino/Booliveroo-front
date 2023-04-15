import { createApp } from 'vue'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import vueBraintree from 'vue-braintree'

// TODO import AppLoader from './components/AppLoader.vue';
import { router } from './router';

const app = createApp(App);

//TODO LOADER app.component('AppLoader', AppLoader);

app.use(router);

app.use(store);

app.use(vueBraintree);

app.mount('#app');
