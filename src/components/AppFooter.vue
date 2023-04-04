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
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="small-col mt-4">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold" href="#">Discover
                                    Deliveroo</a>
                            </li>
                            <li class="list-group-item"><router-link :to="{ name: 'about_us' }"
                                    class="text-decoration-none">About us</router-link></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Takeaway</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">More</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Git Cards</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Restaurant signup</a></li>
                            <li class="list-group-item"><router-link :to="{ name: 'careers' }"
                                    class="text-decoration-none">Careers</router-link></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Become a rider</a></li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="small-col mt-4">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold" href="#">Legal</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Terms and conditions</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Privacy</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Cookies</a></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Modern Slavery
                                    Statement</a>
                            </li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">Tax Strategy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="small-col mt-4">
                        <ul class="p-3">
                            <li class="list-group-item"><a class="text-decoration-none fs-4 fw-bold" href="#">Help</a></li>
                            <li class="list-group-item"><router-link :to="{ name: 'contact_page' }"
                                    class="text-decoration-none">Contact</router-link></li>
                            <li class="list-group-item"><a class="text-decoration-none" href="#">FAQs</a></li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-3 col-sm-6 col-12 ">
                    <div class="small-col mt-4 d-flex flex-column">
                        <ul class="p-3">
                            <li class="list-group-item d-none d-sm-block">
                                <a class="text-decoration-none fs-4 fw-bold" href="#">Take
                                    Deliveroo
                                    with you</a>
                            </li>
                        </ul>
                        <div class="images-footer ms-5">
                            <a href="#">
                                <img class="img-fluid"
                                    src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                    alt="download-appstore">
                            </a>
                            <a href="#">
                                <img class="img-fluid mt-3 border border-white rounded-3"
                                    src="https://www.hiboost.com/eu/wp-content/uploads/2020/03/get-it-on-google-play.png"
                                    alt="google-play">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between align-items-center mt-4">
                <div class="col-sm-3 col-12 icon-footer d-flex">
                    <a href="#"><i class="fa-brands fa-facebook fa-2x me-3" style="color: #ffffff;"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter fa-2x me-3" style="color: #ffffff;"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram fa-2x me-3" style="color: #ffffff;"></i></a>
                </div>
                <div class="col-sm-3 col-12 d-none d-sm-flex copyright d-flex align-items-center justify-content-end">
                    <span class="me-3 copyright-icon fs-4">&copy</span>
                    <span class="text-copyright">2023 Deliveroo</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#footer-food {
    background-color: #252A33;

    a,
    h2 {
        color: white;
    }
}

.small-col {
    min-height: 300px;
    background-color: #323844;
}

.images-footer {
    width: 150px;
}

.copyright {
    color: #505050;
}
</style>