<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <header>
        <div class="container">
            <div class="row align-items-center">

                <!-- logo -->
                <div class="col-4 col-sm-4 col-md-3">
                    <div class="logo">
                        <img src="https://1000marche.net/wp-content/uploads/2021/01/Deliveroo-logo.png" alt="logo-deliveroo"
                            class="img-fluid">
                    </div>
                </div>

                <!-- navbar-menu -->
                <div class="col-8 col-sm-8 col-md-9">
                    <ul class="row">

                        <!-- PARTNER WITH US -->
                        <li class="d-none d-md-block col-md-4 text-end">
                            <div class="partner-with-us">
                                <div class="dropdown">
                                    <button class="btn nav-but" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" id="partner-dropdown">
                                        <span><i class="primary-icon fa-solid fa-chevron-down"></i>Partner with us</span>
                                    </button>

                                    <!-- SUB-MENU -->
                                    <ul class="dropdown-menu" aria-labelledby="partner-dropdown">
                                        <li><a class="dropdown-item" href="#"><span><i
                                                        class="primary-icon fa-solid fa-bicycle"></i>Riders</span></a></li>
                                        <li><a class="dropdown-item" href="#"><span><i
                                                        class="primary-icon fa-solid fa-utensils"></i>Restaurants</span></a>
                                        </li>
                                        <li><a class="dropdown-item" href="#"><span><i
                                                        class="primary-icon fa-solid fa-briefcase"></i>Riders</span></a>
                                        </li>
                                        <li><a class="dropdown-item" href="#"><span><i
                                                        class="primary-icon fa-solid fa-shop"></i>Riders</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <!-- CART -->
                        <li class="d-none d-sm-block col-sm-3 col-md-2 text-end">
                            <button class="btn nav-but" aria-current="page" href="#">
                                <span><i class="primary-icon fa-solid fa-cart-shopping"></i>$0.00</span>
                            </button>
                        </li>

                        <!-- SIGN UP -->
                        <li class=" col-7  col-sm-5 col-md-3 text-end">
                            <button class="btn nav-but" href="#">
                                <router-link :to="{ name: 'login_page' }" class="text-decoration-none">
                                    <span style="font-size:0.9rem;"><i class="primary-icon fa-solid fa-house"></i>Sign up or
                                        login</span>
                                </router-link>
                            </button>
                        </li>

                        <!-- MENU -->
                        <li class="col-5 col-sm-3  col-md-2 text-center">
                            <button class="btn nav-but" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i
                                        class="primary-icon fa-solid fa-bars"></i>Menu</span></button>

                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header d-flex justify-content-between">
                                    <!-- LOGO -->
                                    <div class="logo">
                                        <img src="https://1000marche.net/wp-content/uploads/2021/01/Deliveroo-logo.png"
                                            alt="logo-deliveroo" class="img-fluid ms-3">
                                    </div>

                                    <button type="button" class="btn-close me-3  " data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <hr>
                                <div class="offcanvas-body">
                                    <!-- OFFCANVAS SIGN UP BUTTON -->
                                    <div class="my-5">
                                        <a href="#" class="sign-up-button ">Sign up or login</a>
                                    </div>

                                    <!-- OFFCANVAS MENU -->
                                    <div class="container">
                                        <div class="row text-start ms-4">

                                            <!-- CART -->
                                            <div class="col-12 mb-3">
                                                <a href="#"><span><i
                                                            class="fa-solid fa-cart-shopping text-secondary pe-3"></i>$0.00</span></a>
                                            </div>

                                            <!-- RIDER -->
                                            <div class="col-12 mb-3">
                                                <a href="#"><span><i
                                                            class="fa-solid fa-bicycle pe-3 text-secondary"></i>Become a
                                                        Rider</span></a>
                                            </div>

                                            <!-- RESTAURANT -->
                                            <div class="col-12 mb-3">
                                                <a href="#"><span><i
                                                            class="fa-solid fa-utensils pe-3 text-secondary"></i>Add your
                                                        restaurant</span></a>
                                            </div>

                                            <!-- OFFICE -->
                                            <div class="col-12 mb-3">
                                                <a href="#"><span><i
                                                            class="fa-solid fa-briefcase pe-3 text-secondary"></i>Sign up
                                                        your
                                                        office</span></a>
                                            </div>

                                            <!-- FAQS -->
                                            <div class="col-12">
                                                <a href="#"><span><i
                                                            class="fa-solid fa-circle-question pe-3 text-secondary"></i>FAQs</span></a>
                                            </div>

                                        </div>

                                        <!-- region LANGUAGE  -->

                                        <div class="region ms-4">
                                            <div class="languages">
                                                <select name="languages" id="languages" class="choose-your-button mx-auto">
                                                    <option value="">English</option>
                                                </select>
                                            </div>

                                            <div class="country mt-4">
                                                <select name="country" id="country" class="choose-your-button mx-auto">
                                                    <option value="">United Kingdom</option>
                                                    <option value="">Australia</option>
                                                    <option value="">Belgium</option>
                                                    <option value="">France</option>
                                                    <option value="">Fermany</option>
                                                    <option value="">Hong Kong</option>
                                                    <option value="">Ireland</option>
                                                    <option value="" selected>Italy</option>
                                                    <option value="">Kuwait</option>
                                                    <option value="">Netherlands</option>
                                                    <option value="">Qatar</option>
                                                    <option value="">Singapore</option>
                                                    <option value="">Spain</option>
                                                    <option value="">Taiwan</option>
                                                    <option value="">United Arab Emirates</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;


header {
    background-color: black;

    .logo {
        width: 140px;
    }



    .nav-but {
        background-color: white;
        padding: 5px 10px;
        border-radius: 6px;

    }


    .primary-icon {
        color: $primary;
        padding-right: 6px;

    }

    .sign-up-button {
        color: white;
        background-color: $primary;
        padding: 15px 130px;
        border-radius: 6px;
    }


    .choose-your-button {
        width: 350px;
        height: 50px;

    }

    .offcanvas-body {
        position: relative;
    }

    .region {
        position: absolute;
        bottom: 20px;
    }
}















/* reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* generics */


img {
    max-width: 100%;
    height: auto;
}



a {
    text-decoration: none;
    color: black;
}

/* utils */
.large-container {
    margin: 0 auto;
    max-width: 1400px;
}

.container {
    margin: 0 auto;
    max-width: 1200px;
}

.small-container {
    margin: 0 auto;
    max-width: 1000px;
}

.xs-container {
    margin: 0 auto;
    max-width: 600px;
}

ul li {
    list-style-type: none;
}
</style>