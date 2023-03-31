<script>
export default {
    name: 'AppMain'
}
</script>

<template>
    <!-- JUMBOTRON -->
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <!-- MAIN-TEXT -->
            <div class="col-7 text-lg-center mx-lg-auto">
                <h1 class="main-text my-5">Restaurant food,takeaway andgroceries.Delivered.</h1>
                <p class="postal-code-text">Enter a postcode to see what we deliver</p>

                    <!-- TODO INPUT PASSERA' I DATI NELLA RestaurantPage -->
                    <!-- <div class="input-group mb-3">
                                                    <input type="text" class="form-control search-input" aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-default">
                                                    <span class="input-group-text search-button" id="inputGroup-sizing-default">Search</span>
                                                </div> -->

                    <router-link class="btn btn-primary"
                        :to="{ name: 'restaurants', params: { component: RestaurantPage } }">
                        Search
                    </router-link>

                    <p class="login-text">Enter a postcode to see what we deliver</p>

                </div>
            </div>
        </div>
    </div>

    <!-- DYNAMIC IMAGES COLLECTION -->
    <div class="dynamic-img-collection text-center">
        <h1>images collection</h1>
    </div>



    <!-- TRACK ORDERS -->
    <div class="track-orders text-center my-5">
        <div class="container">
            <h1>track orders</h1>
        </div>
    </div>

    <!-- DISCOUNT -->
    <div class="discount text-center my-5">
        <div class="container">
            <h1>discount</h1>
        </div>
    </div>

    <!-- TRACKING CARDS -->
    <div class="tracking-cards-collection text-center my-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 tracking-card bg-primary"></div>
                <div class="col-12 col-md-6 tracking-card bg-secondary"></div>
                <div class="col-12 col-md-6 tracking-card bg-danger"></div>
                <div class="col-12 col-md-6 tracking-card bg-success"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as*;


// JUMBOTRON
.jumbotron {
    min-height: 470px;
    background-image: url('https://veggoanchio.corriere.it/files/2022/05/1_mod_Ricetta-Burger-640x480.jpg?v=6357');

    color: white;


    .main-text {
        font-size: 40px;
        font-weight: 700;
    }

    .search-input {
        border-radius: 20px;
    }

    .search-button {
        border-radius: 20px;
        background-color: $primary;
        color: white;
    }


}

// DYNAMIC IMAGES COLLECTION
.dynamic-img-collection {
    height: 100px;
    background-color: red;
}


// TRACK ORDERS
.track-orders {
    height: 700px;
    background-color: grey;
}

// DISCOUNT
.discount {
    height: 400px;
    background-color: cyan;
}

// TRACKING CARD COLLECTION
.tracking-cards-collection {

    .tracking-card {
        height: 300px;
    }
}
</style>