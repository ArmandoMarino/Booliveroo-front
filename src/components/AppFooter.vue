<script>
export default {
    name: "AppFooter",
    methods: {

    }
};
</script>

<template>
    <div id="footer-food">

        <div class="container py-4">

            <div class="row list-footer py-4">
                <!-- sezione footer Scopri Booliveroo -->
                <div class="col-lg-3 col-sm-6 col-12 mt-4">
                    <div class="small-col">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold unclickable"
                                    href="#">Scopri
                                    Booliveroo</a>
                            </li>
                            <li class="list-group-item"><a href="http://127.0.0.1:8000/login"
                                    class="text-decoration-none">Accedi o registrati</a></li>
                            <li class="list-group-item"><router-link :to="{ name: 'about_us' }"
                                    class="text-decoration-none">Chi siamo</router-link></li>
                            <li class="list-group-item"><router-link :to="{ name: 'careers' }"
                                    class="text-decoration-none">Lavora con noi</router-link></li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Diventa
                                    rider</a></li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Takeaway</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Altro</a></li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable"
                                    href="#">Programmazione</a>
                            </li>

                        </ul>
                    </div>

                </div>

                <!-- sezione footer Note legali -->
                <div class="col-lg-3 col-sm-6 col-12 mt-4">
                    <div class="small-col">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold unclickable">Note
                                    legali</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Termini e
                                    condizioni</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Informativa
                                    sulla privacy</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none unclickable" href="#">Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- sezione footer Aiuto -->
                <div class="col-lg-3 col-sm-6 col-12 mt-4">
                    <div class="small-col">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold unclickable">Aiuto</a>
                            </li>
                            <li class="list-group-item"><router-link :to="{ name: 'contact_page' }"
                                    class="text-decoration-none">Contatti</router-link></li>
                            <li class="list-group-item"><router-link :to="{ name: 'faqs_page' }"
                                    class="text-decoration-none">FAQs</router-link></li>
                        </ul>
                    </div>

                </div>

                <!-- sezione footer Porta Boolivero con te -->
                <div class="col-lg-3 col-sm-6 col-12 mt-4">
                    <div class="small-col d-flex flex-column">
                        <ul class="p-3">
                            <li class="list-group-item d-none d-sm-block">
                                <a class="text-decoration-none fs-4 fw-bold unclickable">Porta Booliveroo con te</a>
                            </li>
                        </ul>
                        <div class="images-footer ms-3">
                            <router-link :to="{ name: 'work_in_progress' }">
                                <img class="img-fluid"
                                    src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                    alt="download-appstore">
                            </router-link>
                            <router-link :to="{ name: 'work_in_progress' }">
                                <img class="img-fluid mt-3 border border-white rounded-3"
                                    src="https://www.hiboost.com/eu/wp-content/uploads/2020/03/get-it-on-google-play.png"
                                    alt="google-play">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between align-items-center mt-4">
                <!-- icone social network -->
                <div class="col-sm-3 col-12 icon-footer d-flex">
                    <router-link :to="{ name: 'work_in_progress' }"><i class="fa-brands fa-facebook fa-2x me-3 social-link"
                            style="color: #ffffff;"></i></router-link>
                    <router-link :to="{ name: 'work_in_progress' }"><i class="fa-brands fa-twitter fa-2x me-3 social-link"
                            style="color: #ffffff;"></i></router-link>
                    <router-link :to="{ name: 'work_in_progress' }"><i class="fa-brands fa-instagram fa-2x me-3 social-link"
                            style="color: #ffffff;"></i></router-link>
                </div>

                <!-- copyright -->
                <div class="col-sm-3 col-12 d-none d-sm-flex copyright d-flex align-items-center justify-content-end">
                    <span class="me-3 copyright-icon fs-4">&copy</span>
                    <span class="text-copyright">2023 Booliveroo</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#footer-food {
    background-color: #252A33;
    min-height: 500px;

    a,
    h2 {
        color: white;
    }

    a:hover {
        color: $primary;
        font-size: 18px;
    }

    // gestione link non cliccabili
    .unclickable {
        cursor: default;
        pointer-events: none;
        color: rgba(255, 255, 255, 0.7);

    }

}

// altezza colonne
.small-col {
    height: 100%;
    background-color: #323844;
}

// grandezza immagini del footer
.images-footer {
    width: 150px;
}

.copyright {
    color: #505050;
}
</style>