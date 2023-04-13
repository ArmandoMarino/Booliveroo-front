<script>
import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api';
export default {
    name: "SideBar",
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
};
</script>

<template>
    <div id="sidebar">
        <div id="side-bar">
            <!-- immagine motorino -->
            <div class="top-sidebar">
                <i class="fa-solid fa-bicycle me-2 fa-2x" style="color: #1a1835;"></i>
                <span class="fs-3 fw-bold">Roma</span>
                <img class="img-fluid rounded-3"
                    src="https://www.mangiaebevi.it/wp-content/uploads/2020/04/fooddeliveryman.jpg" alt="Roma food">
            </div>

            <!-- categorie -->
            <h3 class="section-category border-top border-dark-subtle">Categorie</h3>
            <div class="bottom-sidebar">
                <!-- # lista categorie -->
                <div v-for="category in categories" :key="category.id" class="list-group-item">
                    <input :id="'cat-' + category.id" type="checkbox" class="btn btn-sm btn-success mb-3" role="button"
                        :value="category.id" v-model="alternateCategories">
                    <label :for="'cat-' + category.id" class="ms-3">{{ category.label }}</label>
                </div>
            </div>
        </div>

        <!-- ristoranti -->
        <div id="main-content">
            <div class="row">
                <!-- # ciclo ristoranti da visualizzare -->
                <div v-for="restaurant in filteredRestaurants" class="col-4 mx-auto my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                            <ul>
                                <li v-for="category in restaurant.categories" :key="category.id" class="list-group-item">{{
                                    category.label }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#main {
    display: flex;
    height: 100vh;
}

#side-bar {
    height: 100%;
    // flex: 0 0 280px;
    flex-basis: 280px;
    border: 1px solid rgba(0, 0, 0, 0.2);

}

.top-sidebar {
    height: 270px;
    padding: 10px;
}

.section-category {
    padding: 10px 10px 40px;
    height: 30px;
}

.bottom-sidebar {
    height: calc(100% - 330px);
    overflow-y: auto;
    padding: 10px;

    .tot-restaurant {
        color: rgba(0, 0, 0, 0.5);
    }
}

// #main-content {
//     // flex: 1 1 auto;
//     flex-basis: calc(100% - 280px);
//     height: 100%;
//     overflow-y: auto;
// }
</style>