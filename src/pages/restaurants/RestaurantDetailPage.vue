<script>
//*******RIMETTERE LE CHIAMATE API COME DA CONVENZIONE /api
import axios from "axios";
import RestaurantCard from "../../components/restaurants/RestaurantCard.vue";
const apiBaseUrl = "http://localhost:3000/";
export default {
    name: "RestaurantDetailPage",
    components: { RestaurantCard },
    data: () => ({
        restaurant: {},
    }),
    methods: {
        getRestaurant() {
            const endpoint = apiBaseUrl + "restaurants/" + this.$route.params.id;
            axios
                .get(endpoint)
                .then((res) => {
                    this.restaurant = res.data;
                })
                .catch(() => {
                    this.$router.push({ name: "not-found" });
                });
        },
    },
    created() {
        this.getRestaurant();
    },
};
</script>

<template>
    <section class="restaurant-detail">
        <RestaurantCard :restaurant="restaurant" :isDetail="true" />
    </section>
</template>

<style scoped lang="scss">
.game-detail {
    margin-top: 100px;
}
</style>
