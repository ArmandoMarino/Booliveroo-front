<script>
import RestaurantCard from './RestaurantCard.vue';
import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api';

export default {
    name: 'RestaurantList',
    components: { RestaurantCard },
    props: {
        restaurants: Object,
        category: Object,
    },
    data() {
        return {
            // array di ristoranti da api
            restaurants: [],
            // array di categorie da api
            categories: [],

            // array of new categories
            alternateCategories: [],
        }
    },
    computed: {
        // filter restaurant
        filteredRestaurants() {
            if (this.alternateCategories.length === 0) {
                return this.restaurants;
            } else {
                return this.restaurants.filter((restaurant) => {
                    return this.alternateCategories.every(categoryId => {
                        return restaurant.categories.some(category => {
                            return category.id === categoryId;
                        });
                    });
                });
            }
        },
    },





    methods: {
        // # fetch categories
        fetchCategories() {
            axios.get(apiBaseUrl + '/categories').then(res => {
                this.categories = res.data;
            });
        },

        // # fetch restaurants
        fetchRestaurants() {
            axios.get(apiBaseUrl + '/restaurants').then(res => {
                this.restaurants = res.data;
            });
        },

    },
    created() {
        this.fetchRestaurants();
        this.fetchCategories();
    }

}
</script>


<template>
    <div class="restaurant-list">
        <div class="container">
            <section class="restaurants">
                <!-- <h4 v-if="category?.label">{{ category.label }}</h4> -->
                <!-- TODO scritta dinamica -->


                <!-- * lista categorie -->
                <!-- TODO colori bottoni -->
                <div class="my-4 flex-column flex-md-row d-flex justify-content-end align-items-center">
                    <p class="m-0 me-4">Filtra per ristoranti :</p>
                    <div class="my-3">
                        <div v-for="category in categories" :key="category.id" class="btn-group categories me-2"
                            role="group">
                            <input :id="'cat-' + category.id" type="checkbox" class="btn-check" autocomplete="off"
                                :value="category.id" v-model="alternateCategories">
                            <label :for="'cat-' + category.id" class="btn btn-outline-primary btn-sm">{{ category.label
                            }}</label>
                        </div>
                    </div>
                </div>


                <h4>I nostri ristoranti</h4>

                <div class="row">
                    <!-- TODO V-IF RESTAURANTS.LENGTH -->
                    <restaurant-card v-for="restaurant in filteredRestaurants" :key="restaurant.name"
                        :restaurant="restaurant"></restaurant-card>
                </div>
            </section>
            <section class="row new"></section>
            <section class="row top-rated"></section>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.categories {}
</style>