<script>
import axios from 'axios';
const apiBase = 'http://127.0.0.1:8000/api/categories';
const apiRestaurants = 'http://127.0.0.1:8000/api/restaurants';

import AppMain from "../components/AppMain.vue"
export default {
    name: 'HomePage',
    data() {
        return {
            restaurants: {},
            categories: {}
        }
    },
    components: { AppMain },

    methods: {
        fetchCategories() {
            axios.get(apiBase).then(res => { this.categories = res.data })
            console.log(this.categories);
        },
        fetchRestaurants() {
            axios.get(apiRestaurants).then(res => { this.restaurants = res.data })
            console.log(this.restaurants);
        }
    },
    created() {
        this.fetchCategories();
        this.fetchRestaurants();
    }
}
</script>

<template>
    <app-main :restaurants="restaurants" :categories="categories"></app-main>
</template>

<style></style>