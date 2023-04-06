<script>
import axios from 'axios';
import RestaurantList from '../../components/restaurants/RestaurantList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: 'CategoryRestaurantsPage',
    components: { RestaurantList },
    data: () => ({
        restaurants: {},
        category: null
    }),
    methods: {
        fetchRestaurants(endpoint = null) {
            if (!endpoint)
                endpoint = `${apiBaseUrl}/category/${this.$route.params.id}/restaurants`;
            axios.get(endpoint).then((res) => {
                // TODO GUARDA LE CHIAVI
                this.restaurants = res.data.category.restaurants;
                this.category = res.data.category;

            }).catch((err) => {
                // TODO LOADER
                console.error(err)
            }).then(() => {
                // TODO LOADER
            })
        }
    },
    created() {
        this.fetchRestaurants();
    }
}
</script>


<template>
    <restaurant-list :restaurants="restaurants" :category="category"></restaurant-list>
</template>