<script>
import axios from "axios";
import RestaurantCard from "../../components/restaurants/RestaurantCard.vue";
const apiBaseUrl = "http://localhost:8000/api/";
export default {
    name: "RestaurantDetailPage",
    components: { RestaurantCard },
    data: () => ({
        restaurant: {},
        isLoading: false,
    }),
    methods: {
        getRestaurant() {
            this.isLoading = true
            const endpoint = apiBaseUrl + "restaurants/" + this.$route.params.id;
            axios
                .get(endpoint)
                .then((res) => {
                    this.restaurant = res.data;
                })
                .catch(() => {
                    // this.isLoading = true
                    this.$router.push({ name: "not-found" });
                }).then(() => {
                    this.isLoading = false
                })
        },
    },
    created() {
        this.getRestaurant();
    },
};
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <section v-else class="restaurant-detail">
        <RestaurantCard :restaurant="restaurant" :isDetail="true" />
    </section>
</template>

<style scoped lang="scss">
.restaurant-detail {
    margin-top: 100px;
}
</style>
