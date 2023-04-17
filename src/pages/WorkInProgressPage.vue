<script>
export default {
    name: "WorkInProgress",
};
</script>

<template>
    <div class="main-page">

        <div class="container">
            <div class="img-work">
                <img src="https://thumbs.dreamstime.com/b/work-progress-loading-bar-illustration-work-progress-loading-bar-illustration-152656134.jpg"
                    alt="work in progress">
            </div>
            <div class="text-center py-3">
                <h1>Pagina in manutenzione</h1>
                <p class="work-page fs-3">(Sarà disponibile a breve)</p>
            </div>
            <div class="d-flex justify-content-end pb-5">

                <button class="btn btn-secondary" @click="$router.back()">
                    Torna Indietro
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-page {
    background-color: lightgray;
}

.img-work {
    width: 900px;
    height: 900px;
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