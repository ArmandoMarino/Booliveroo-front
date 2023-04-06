<script>
import axios from 'axios';
const apiBase = 'http://127.0.0.1:8000/api/restaurants';
import AppMain from "../components/AppMain.vue"
export default {
    name: 'HomePage',
    data() {
        return {
            restaurants: {}
        }
    },
    components: { AppMain },

    methods: {
        fetchRestaurants() {
            axios.get(apiBase).then(res => { this.restaurants = res.data })
        }
    },
    created() {
        this.fetchRestaurants();
    }
}
</script>

<template>
    <app-main :restaurants="restaurants"></app-main>
</template>

<style></style>