<script>
export default {
    name: "RestaurantCard",
    props: {
        restaurant: Object,
        isDetail: Boolean,
    },
    computed: {
        setVote() {
            let baseVote = this.restaurant.vote;
            const finalVote = Math.floor(baseVote);
            if (finalVote >= 0 && finalVote <= 3) {
                return " ";
            } else {
                if (finalVote >= 3 && finalVote <= 4) {
                    return " " + "Ottimo";
                } else if (finalVote == 5) {
                    return " " + "Eccellente";
                } else {
                    return "No Vote yet";
                }
            };
        }
    }
}
</script>



<template>
    <div class="text-center my-4" :class="isDetail ? 'col-11 mx-auto' : 'col-lg-3 col-md-6 col-sm-10'
    ">
        <!--* ROUETR TO SHOW PICK ALL CARD-->
        <router-link :class="isDetail ? 'pe-none' : ' '" :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }">

            <div :class="isDetail ? 'd-flex' : 'card'">
                <!-- IMAGE -->
                <img :src="restaurant.banner" class="img-fluid" :class="isDetail ? 'my-card-detail' : 'card-img-top col-lg-3 col-md-6 col-sm-10'
                " :alt="restaurant.name">

                <!-- TEXT -->
                <div class="text-start" :class="isDetail ? 'card-body ms-4' : 'ms-3'">
                    <p :class="isDetail ? 'h1' : 'p m-0'"><strong>{{ restaurant.restaurant_name }}</strong></p>
                    <ul :class="isDetail ? 'd-flex' : 'd-flex flex-column mb-0 p-0'">
                        <!-- VOTE -->
                        <li>
                            <span v-for="vote in Math.floor(restaurant.vote)">
                                <i class="fa-solid fa-star"></i>
                            </span>
                            {{ setVote }}
                        </li>
                        <!-- DISTANCE -->
                        <li>{{ restaurant.address }}</li>
                        <!-- HOUR -->
                        <li v-if="isDetail">Chiude alle 23.30</li>
                    </ul>

                    <!--! CHIAVE TELEFONO DB e POSIZIONE           INFO ALLERGENI MODAL -->
                    <div class="info pe-auto" v-if="isDetail">
                        <button type="button" class="btn d-flex align-items-center" data-bs-toggle="modal"
                            data-bs-target="#modal-info">
                            <i class="fa-solid fa-circle-info"></i>
                            <div class="mx-3">
                                <p>Informazioni</p>
                                <p>Allergeni e tanto altro </p>
                            </div>
                            <i style="color: #00CCBC;" class="fa-solid fa-chevron-right"></i>
                        </button>

                        <div class="modal fade" id="modal-info" tabindex="-1" aria-labelledby="modal-info-Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="modal-info-Label">Informazioni su {{
                                            restaurant.restaurant_name }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h1 class="modal-title fs-5">Allergeni</h1>
                                        <br>
                                        <p class="my-3">Hai delle domande? Chiedi a <strong>{{ restaurant.restaurant_name
                                        }}</strong>
                                            informazioni
                                            più dettagliate
                                            sui metodi di cottura e sugli ingredienti utilizzati.
                                        </p>
                                        <p>
                                            <a href="tel:+390000000000">
                                                <i style="color: #00CCBC;" class="fa-solid fa-phone me-2"></i>
                                                Chiama {{ restaurant.name }} al numero
                                                +390000000000
                                            </a>
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- <p>{{ restaurant.distance }}</p> -->
                </div>

                <!-- TODO SLIDER CON FOCUS CHE ARRIVA AI PIATTI -->
            </div>

        </router-link>
    </div>

    <!--* FOOD-CARD IN DETAIL -->
    <div v-if="isDetail" class="container">
        <div class="row g-2">
            <div class="pop-card text-left p-2 col-lg-3 col-md-6 col-sm-10" v-for="food in restaurant.foods" :key="food.id">
                <div class="p-3 card-food d-flex justify-content-between">
                    <!-- <img :src="food.image" class="card-img-top col-lg-3 col-md-6 col-sm-10" :alt="food.name"> -->
                    <div class="text">
                        <p><strong>{{ food.label }}</strong></p>
                        <p>{{ food.price }} €</p>
                    </div>


                    <div class="modal-food">
                        <!--* MODAL BUTTON -->
                        <button type="button" class="btn btn-bool" data-bs-toggle="modal" data-bs-target="#modal-cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>

                        <!--* MODAL -->
                        <div class="modal fade" id="modal-cart" tabindex="-1" aria-labelledby="modal-cart-Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="modal-cart-Label">{{ food.label }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- TODO IMG FOOD -->
                                        <p>{{ food.description }}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-bool">Aggiungi al carrello</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as*;

.pointer-none {
    cursor: default;
}

.btn-bool {
    background-color: $primary;
}

p {
    margin: 0;
}

ul {
    list-style-type: none;
    padding: 0;

    li {
        margin-right: 2rem;

    }

    li::marker {
        color: gray;
    }
}

// VOTE
.fa-star::before {
    color: $secondary;
}

.card-body {

    .index-list {
        list-style-type: none;
    }

}

a {
    text-decoration: none;
    color: black;
}

.my-card-detail {
    height: 300px;
}



// FOOD
.card-food {
    min-height: 100px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    p {
        margin: 0;
    }

}
</style>