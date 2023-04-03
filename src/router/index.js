// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import RestaurantPage from "../pages/restaurants/RestaurantPage.vue"
import NotFoundPage from "../pages/NotFoundPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import AboutUsPage from "../pages/AboutUsPage";

// Creo il Router e definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",

  // Rotte che useremo
  routes: [
    { path: "/", name: "home", component: HomePage },
    
    // Rotta per la pagina del form
    { path: '/contact', name: 'contact_page', component: ContactPage},
    
    // Rotta per la pagina About us
    { path: '/about_us', name: 'about_us', component: AboutUsPage},

    { path: "/restaurants", name: "restaurants", component: RestaurantPage },

    // NotFoundPage (lasciatela come ultima posizione )
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
