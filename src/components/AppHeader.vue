<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <header>
        <div class="container">
            <div class="navbar d-flex">

                <!-- logo -->
                <div>
                    <div class="logo m-0">
                        <router-link :to="{ name: 'home', params: { component: HomePage } }">
                            <img src="../assets/img/Logo-BOOLIVEROO-PRIMARY.png" alt="logo-deliveroo" class="img-fluid">
                        </router-link>
                    </div>
                </div>

                <!-- navbar-menu -->
                <div class="navbar-menu ">
                    <ul class=" d-flex mb-0">
                        <!-- PARTNER WITH US -->
                        <li>
                            <div class="contact-us">
                                <a class="btn nav-but" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" id="partner-dropdown">
                                    <span style="font-size:0.9rem;"><i
                                            class="primary-icon fa-solid fa-chevron-down"></i>Contact us</span>
                                </a>
                            </div>
                        </li>

                        <!-- CART -->
                        <li v-if="$store.state.cart.length" class="cart">
                            <router-link class="btn nav-but" :class="$route.name == 'Cart' ? 'active' : ''"
                                aria-current="page" :to="{ name: 'cart', params: { component: Cart } }">
                                <i class="primary-icon fa-solid fa-cart-shopping"></i>
                                <span v-if="$store.state.cart.length > 0">
                                    {{ $store.state.cart.length }}
                                </span>
                            </router-link>
                        </li>

                        <!-- SIGN UP -->
                        <li class="login">
                            <a href="http://127.0.0.1:8000/login">
                                <button class="btn nav-but" href="#">
                                    <span style="font-size:0.8rem;"><i class="primary-icon fa-solid fa-house"></i>Sign up or
                                        login</span>
                                </button>
                            </a>
                        </li>

                        <!-- MENU -->
                        <li class="menu">
                            <button class="btn nav-but" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span
                                    style="font-size:0.9rem;"><i
                                        class="primary-icon fa-solid fa-bars"></i>Menu</span></button>

                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <!-- LOGO AND CLOSE UP BUTTON-->
                                    <div class="logo d-flex align-items-center">
                                        <img src="../assets/img/Logo-COLORATO-BOOLEVEROO-.png" alt="logo-deliveroo"
                                            class="img-fluid ">

                                        <button type="button" class="btn-close m-0" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>


                                </div>

                                <div class="offcanvas-body text-center">
                                    <hr>
                                    <!-- OFFCANVAS SIGN UP BUTTON -->
                                    <div class="my-5 ">
                                        <a href="#" class="sign-up-button">Sign up or login</a>
                                    </div>

                                    <!-- OFFCANVAS MENU -->
                                    <div class="container off-canvas-menu">
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

                                        <div class="region">
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
@use '../assets/scss/style.scss' as*;



@media only screen and (max-width: 778px) {
    .contact-us {
        display: none;
    }

    .login {
        display: none;
    }

}

@media only screen and (max-width: 650px) {
    .cart {
        display: none;
    }

}

@media only screen and (max-width: 554px) {
    .login {
        display: none;
    }

}


header {
    background-color: black;

    .logo {
        width: 200px;
    }



    .nav-but {
        background-color: white;
        padding: 5px 10px;
        border-radius: 6px;
        margin-left: 5px;

    }

    .sub-menu-item {
        font-size: 0.9rem;
        padding: 8px;
    }

    .primary-icon {
        color: $primary;
        padding-right: 6px;

    }

    .sign-up-button {
        color: white;
        background-color: $primary;
        padding: 15px 100px;
        border-radius: 6px;


    }


    .choose-your-button {
        width: 350px;
        height: 50px;

    }

    .offcanvas-body {
        position: relative;

        .off-canvas-menu {
            a {
                color: black;
            }
        }
    }

    .region {
        position: absolute;
        bottom: 20px;
    }
}
</style>