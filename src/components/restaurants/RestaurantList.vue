<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name: 'RestaurantList',
    components: { RestaurantCard },
    props: {
        restaurants: Object,
    },

}
</script>


<template>
    <div class="restaurant-list">
        <div class="container">
            <section class="restaurants">
                <h4>Lista Ristoranti</h4>
                <div class="row">
                    <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                        <restaurant-card v-for="restaurant in restaurants" :key="restaurant.name"
                            v-bind="restaurant"></restaurant-card>
                    </div>

                </div>
            </section>
            <section class="row new"></section>
            <section class="row top-rated"></section>
        </div>
    </div>
</template>


<style></style>