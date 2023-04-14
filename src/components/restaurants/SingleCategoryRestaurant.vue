<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name: 'RestaurantList',
    components: { RestaurantCard },
    props: {
        restaurants: Object,
        category: Object,
    },

}
</script>
    
    
<template>
    <div class="restaurant-list">
        <div class="container">
            <section class="restaurants">
                <h4 v-if="category?.label">{{ category.label }}</h4>
                <h4 v-else>I nostri ristoranti</h4>
                <div class="row">
                    <!-- TODO V-IF RESTAURANTS.LENGTH -->
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