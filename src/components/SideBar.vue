<script>
export default {
    name: "AppFooter",
    methods: {

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
            <div class="list-group-item">
                <label>
                    <input class="form-check-input me-2" type="checkbox">
                    </label>
            </div>
            <button type="button" class="btn btn-primary mt-4">Visualizza</button>

            <!-- <li class="list-group-item d-flex align-items-center mb-2">
                <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                <label class="form-check-label fs-4" for="category">Italiano <span
                        class="tot-restaurant fs-5">(124)</span></label>
            </li> -->
            <!-- <li class="list-group-item d-flex align-items-center mb-2">
                        <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                        <label class="form-check-label fs-4" for="category">Giapponese <span
                                class="tot-restaurant fs-5">(46)</span></label>
                    </li>
                    <li class="list-group-item d-flex align-items-center mb-2">
                        <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                        <label class="form-check-label fs-4" for="category">Cinese <span
                                class="tot-restaurant fs-5">(52)</span></label>
                    </li>
                    <li class="list-group-item d-flex align-items-center mb-2">
                        <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                        <label class="form-check-label fs-4" for="category">Argentino <span
                                class="tot-restaurant fs-5">(23)</span></label>
                    </li>
                    <li class="list-group-item d-flex align-items-center mb-2">
                                                                <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                                                                <label class="form-check-label fs-4" for="category">Pizzerie <span
                                                                        class="tot-restaurant fs-5">(146)</span></label>
                                                            </li>
                                                            <li class="list-group-item d-flex align-items-center mb-2">
                                                                <input class="form-check-input me-2" type="checkbox" id="category" name="category">
                                                                <label class="form-check-label fs-4" for="category">Pub <span
                                                                        class="tot-restaurant fs-5">(178)</span></label>
                                                            </li> -->

            </div>

        </div>
        <div id="main-content">
            <div class="row">
                <div class="col-4">
                    <div class="card border-primary h-100">
                        <div class="card-header">
                            category: <span class="text-primary">Italiano</span>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Da Pippo</h4>

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