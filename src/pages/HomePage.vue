<script>
import axios from "axios";
import AppMain from "../components/AppMain.vue"
import RestaurantList from "../components/restaurants/RestaurantList.vue";
export default {
    data() {
        return {
            restaurants: []
        }
    },
    name: 'HomePage',
    components: { AppMain, RestaurantList },
    methods: {
        fetchRestaurants() {
            axios.get('http://localhost:3000/restaurants')
                .then(res => { console.log(res); this.restaurants = res.data; });
        }
    },
    created() {
        this.fetchRestaurants();
    }
}
</script>

<template>
    <!-- <app-main></app-main> -->
    <restaurant-list></restaurant-list>
</template>

<style></style>