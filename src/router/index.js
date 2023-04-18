// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import RestaurantPage from "../pages/restaurants/RestaurantPage.vue";
import RestaurantDetailPage from "../pages/restaurants/RestaurantDetailPage.vue";
import CategoryRestaurantsPage from "../pages/restaurants/CategoryRestaurantsPage.vue";
import Cart from "../pages/Cart.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import FaqsPage from "../pages/FaqsPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import CareersPage from "../pages/CareersPage.vue";
import WorkInProgressPage from "../pages/WorkInProgressPage.vue";
import PaymentsuccessPage from "../pages/PaymentsuccessPage.vue";
import PaymentfailedPage from "../pages/PaymentfailedPage.vue";

// Creo il Router e definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },

  // Rotte che useremo
  routes: [
    { path: "/", name: "home", component: HomePage },

    // CART
    { path: "/cart", name: "cart", component: Cart },

    // Rotta per la pagina del form
    { path: "/contact", name: "contact_page", component: ContactPage },

    // Rotta per la pagina About us
    { path: "/about_us", name: "about_us", component: AboutUsPage },

    // Rotta per la pagina Faqs
    { path: "/faqs", name: "faqs_page", component: FaqsPage },

    // Rotta per la pagina TEAM
    { path: "/team", name: "team_page", component: TeamPage },

    // Rotta per la pagina Careers
    { path: "/careers", name: "careers", component: CareersPage },

    // Rotta per la pagina Work in Progress
    {
      path: "/work_in_progress",
      name: "work_in_progress",
      component: WorkInProgressPage,
    },

    // Rotta per i ristoranti
    { path: "/restaurants", name: "restaurants", component: RestaurantPage },

    // Rotta per il pagamento avvenuto con successo
    {
      path: "/payment-success",
      name: "payment-success",
      component: PaymentsuccessPage,
    },

    // Rotta per il pagamento NON avvenuto
    {
      path: "/payment-failed",
      name: "payment-failed",
      component: PaymentfailedPage,
    },

    //Rotta per lo show del restaurant con ID
    {
      path: "/restaurants/:id",
      name: "restaurant-detail",
      component: RestaurantDetailPage,
    },

    //Rotta per il recupero dei restaurants appartenenti a una category
    {
      path: "/categories/:id/restaurants",
      name: "categories-restaurants",
      component: CategoryRestaurantsPage,
    },

    // NotFoundPage (lasciatela come ultima posizione )
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
