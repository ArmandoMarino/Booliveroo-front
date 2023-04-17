<script>
import axios from 'axios';
import SingleCategoryRestaurant from '../../components/restaurants/SingleCategoryRestaurant.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
    name: 'CategoryRestaurantsPage',
    components: { SingleCategoryRestaurant },
    data: () => ({
        restaurants: {},
        categories: null,
        isLoading: false,
    }),
    methods: {
        fetchRestaurants(endpoint = null) {
            this.isLoading = true;
            if (!endpoint)
                endpoint = `${apiBaseUrl}/categories/${this.$route.params.id}/restaurants`;
            axios.get(endpoint).then((res) => {
                // TODO GUARDA LE CHIAVI
                this.restaurants = res.data;
                this.categories = res.data.categories;
                console.log(this.categories, 'quiiiiiii');
            }).catch((err) => {
                // TODO LOADER
                console.error(err)
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchRestaurants();
    }
}
</script>


<template>
    <app-loader v-if="isLoading"></app-loader>
    <single-category-restaurant v-else :restaurants="restaurants" :categories="categories"></single-category-restaurant>
</template>