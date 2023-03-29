// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
//TODO import HomePage from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",

    // Rotte che useremo
    routes: [
        { path: "/", name: "home", component: HomePage },


    ],
});

export { router };