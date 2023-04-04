<script>
import axios from "axios";
import RestaurantList from "../../components/restaurants/RestaurantList.vue";
const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
    data() {
        return {
            restaurants: {}
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
                    console.error(err);
                })
                .then(() => {
                });
        },
    },
    created() {
        this.fetchRestaurants();
    },
};
</script>

<template>
    <restaurant-list :restaurants="restaurants"></restaurant-list>
</template>