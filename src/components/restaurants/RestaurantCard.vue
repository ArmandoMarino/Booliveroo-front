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
                return finalVote;
            } else {
                if (finalVote >= 3 && finalVote <= 4) {
                    return finalVote + " " + "Ottimo";
                } else {
                    return finalVote + " " + "Eccellente";
                }
            }
        }
    }
}
</script>



<template>
    <div class="col-lg-3 col-md-6 col-sm-10 my-card text-center bounce my-4">
        <!--* ROUETR TO SHOW PICK ALL CARD-->
        <router-link :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }">

            <div class="card">
                <img :src="restaurant.image" class="card-img-top" :alt="restaurant.name">
                <div class="card-body p-2 text-start">
                    <p><strong>{{ restaurant.food }}</strong></p>
                    <p>{{ setVote }}</p>
                    <!-- <p>{{ restaurant.distance }}</p> -->
                </div>
            </div>

        </router-link>
    </div>




    <!--TODO    CARD CICLO SU restaurant.food -->
</template>

<style scoped lang="scss">
.card-body {
    p {
        margin: 0;
    }
}

a {
    text-decoration: none;
    color: black;
}
</style>