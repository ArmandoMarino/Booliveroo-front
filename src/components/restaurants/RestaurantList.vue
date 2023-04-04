<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name: 'RestaurantList',
    components: { RestaurantCard },
    props: {
        restaurants: Object,
        // category : Object,
    },

}
</script>


<template>
    <div class="restaurant-list">
        <div class="container">
            <section class="restaurants">
                <h4>Lista Ristoranti</h4>
                <div class="row">
                    <restaurant-card v-for="restaurant in restaurants" :key="restaurant.name"
                        :restaurant="restaurant"></restaurant-card>
                </div>
            </section>
            <section class="row new"></section>
            <section class="row top-rated"></section>
        </div>
    </div>
</template>


<style></style>