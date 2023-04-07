<script>
import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api';
export default {
    name: "AppFooter",
    data() {
        return {
            restaurants: [],
            categories: [],
            filteredCategories: [],
            filteredRestaurants: [],
        }
    },

    computed: {
        filterRest() {
            this.restaurants.forEach(rest => {
                if (rest.categories.length) {
                    rest.categories.forEach(cat => {
                        if (this.filteredCategories.includes(cat.id) && !(this.filteredRestaurants.includes(rest))) {
                            this.filteredRestaurants.push(rest);
                        }
                        console.log(this.filteredRestaurants);

                    });
                }

            })
            return this.filteredRestaurants;
        }
    },

    methods: {
        fetchCategories() {
            axios.get(apiBaseUrl + '/categories').then(res => {
                this.categories = res.data;
            }).catch((err) => {
                //
            }).then(() => {
                // fare il loading
            })
        },

        fetchRestaurants() {
            axios.get(apiBaseUrl + '/restaurants').then(res => {
                this.restaurants = res.data;
                // console.log(res.data);
            }).catch((err) => {
                //
            }).then(() => {
                // fare il loading
            })
        },

        getFilteredRestaurant() {
            this.restaurants.forEach(rest => {
                if (rest.categories.length) {
                    rest.categories.forEach(cat => {
                        if (this.filteredCategories.includes(cat.id) && !(this.filteredRestaurants.includes(rest))) {
                            this.filteredRestaurants.push(rest);
                        }
                        console.log(this.filteredRestaurants);

                    });
                }

            })
            return this.filteredRestaurants;
        }

        // filterCategories(category) {
        //     this.filteredCategories.push(category);
        //     return this.filteredCategories;
        // },

        // getfilteredRestaurant() {
        //     this.filterCategories().forEach(element => {
        //         const idCategory = element;
        //         this.restaurants.forEach(rest => {
        //             console.log(rest.restaurant_name);
        //             if (rest.categories.includes(idCategory)) {
        //                 this.filteredRestaurants.push(rest);
        //                 console.log(this.filteredRestaurants);
        //             }
        //         })
        //         console.log(element);
        //     });
        // }


    },
    created() {
        this.fetchRestaurants();
        this.fetchCategories();
    }
};
</script>

<template>
    <div id="main">
        <div id="side-bar">
            <div class="top-sidebar">
                <i class="fa-solid fa-bicycle me-2 fa-2x" style="color: #1a1835;"></i>
                <span class="fs-3 fw-bold">Roma</span>
                <img class="img-fluid rounded-3"
                    src="https://www.mangiaebevi.it/wp-content/uploads/2020/04/fooddeliveryman.jpg" alt="Roma food">
            </div>
            <h3 class="section-category border-top border-dark-subtle">Categorie</h3>

            <div class="bottom-sidebar">
                <div v-for="category in categories" :key="category.id" class="list-group-item">
                    <label>
                        <input class="form-check-input me-2" type="checkbox" :value="category.id"
                            v-model="filteredCategories">
                        <span>{{ category.label }}</span>
                    </label>
                </div>
                <button type="button" class="btn btn-primary mt-4" @click="getFilteredRestaurant()">Visualizza</button>
            </div>

        </div>
        <div id="main-content">
            <div class="row">
                <div v-for="restaurant in filterRest" :key="restaurant.id" class="col-4 mx-auto my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
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