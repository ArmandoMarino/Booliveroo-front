// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import RestaurantPage from "../pages/restaurants/RestaurantPage.vue"
import RestaurantDetailPage from "../pages/restaurants/RestaurantDetailPage.vue"
import NotFoundPage from "../pages/NotFoundPage.vue";

// Creo il Router e definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",

  // Rotte che useremo
  routes: [
    { path: "/", name: "home", component: HomePage },

    { path: "/restaurants", name: "restaurants", component: RestaurantPage },

    //Rotta per lo show del restaurant con ID
    { path: "/restaurants/:id", name: "restaurant-detail", component: RestaurantDetailPage },

    // NotFoundPage (lasciatela come ultima posizione )
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
