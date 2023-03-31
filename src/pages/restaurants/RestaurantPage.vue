<script>
import axios from "axios";
import RestaurantList from "../../components/restaurants/RestaurantList.vue";
export default {
    data() {
        return {
            restaurants: []
        }
    },
    name: 'HomePage',
    components: { RestaurantList },
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
    <restaurant-list :restaurants="restaurants"></restaurant-list>
</template>