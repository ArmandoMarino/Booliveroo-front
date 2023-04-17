<script>
import axios from "axios";
import RestaurantList from "../../components/restaurants/RestaurantList.vue";
const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
    data() {
        return {
            restaurants: {},
            isLoading: false,
        }
    },
    name: 'HomePage',
    components: { RestaurantList },
    methods: {
        fetchRestaurants(endpoint = null) {
            // Loading alla chiamata a true(on)
            this.isLoading = true;
            // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
            if (!endpoint) endpoint = apiBaseUrl + "/restaurants";
            axios
                .get(endpoint)
                .then((res) => {
                    this.restaurants = res.data;
                })
                .catch((err) => {
                    this.isALertOpen = true;
                    console.error(err);
                })
                // Loading a chiamata finita a false (off)
                .then(() => {
                    this.isLoading = false;
                });
        },
    },
    created() {
        this.fetchRestaurants();
    },
};
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <restaurant-list v-else :restaurants="restaurants"></restaurant-list>
</template>