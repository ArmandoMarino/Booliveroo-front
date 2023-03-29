<script>
export default {
    name: "RestaurantCard",
    props: {
        restourant: Object,
        isDetail: Boolean,
    },
    computed: {
        gameDateUpdated() {
            const date = new Date(this.game.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        gameDateCreated() {
            const date = new Date(this.game.created_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        abstractDescription() {
            const abstract = this.game.description.slice(0, 70);
            return abstract + "...";
        },
        setVote() {
            let baseVote = this.game.vote;
            const transformedVote = ((baseVote - 1) * 4) / 9 + 1;
            const finalVote = Math.floor(transformedVote);
            return finalVote;
        },
    },
};
</script>



<template>
    <!-- CARD -->
    <!-- TODO gestire i dati -->
    <div class="col-lg-3 col-md-6 col-sm-10 my-card text-center bounce my-4">
        <div class="card">
            <img :src="restaurant.image" class="card-img-top" :alt="restaurant.name">
            <div class="card-body">
                <p><strong>{{ restaurant.food }}</strong></p>
                <p>Vote</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
            </div>
        </div>
    </div>
</template>