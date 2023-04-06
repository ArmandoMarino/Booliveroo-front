<script>
import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api';
export default {
    name: "AppFooter",
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        fetchRestaurants() {
            axios.get(apiBaseUrl + '/categories').then(res => {
                this.categories = res.data;
                console.log(res.data);
            }).catch((err) => {
                //
            }).then(() => {
                // fare il loading
            })
        }
    },
    created() {
        this.fetchRestaurants();
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
                        <input class="form-check-input me-2" type="checkbox">
                        <span>{{ category.label }}</span>
                    </label>
                </div>
                <button type="button" class="btn btn-primary mt-4">Visualizza</button>

            </div>

        </div>
        <div id="main-content">
            <div class="row">
                <div class="col-4 mx-auto my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
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