<script>
export default {
    name: "WorkInProgress",
};
</script>

<template>
    <div class="main-page">

        <div class="container">
            <div class="d-flex justify-content-start pt-3">
                <button class="btn btn-secondary" @click="$router.back()">
                    Torna Indietro
                </button>
            </div>
            <div class="img-work text-center">
                <img class="img-fluid" src="../assets/img/comingsoon-logo.png" alt="work in progress">
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.main-page {
    background-color: lightgray;
}

.img-work {
    // width: 900px;
    // height: 900px;
    margin: 0 auto;
    padding-top: 5rem;

    img {
        max-width: 100%;
        height: 100%;
    }
}

.work-page {
    color: rgba(0, 0, 0, 0.5);
}
</style>