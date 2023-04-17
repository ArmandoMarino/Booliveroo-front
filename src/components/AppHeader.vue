<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="navbar d-flex">

                <!-- logo -->
                <div>
                    <div class="logo m-0 ms-3">
                        <router-link :to="{ name: 'home', params: { component: HomePage } }">
                            <img src="../assets/img/Logo-BOOLIVEROO-PRIMARY.png" alt="logo-deliveroo" class="img-fluid">
                        </router-link>
                    </div>
                </div>

                <!-- navbar-menu -->
                <div class="navbar-menu ">
                    <ul class=" d-flex mb-0">
                        <!-- CONTACT US -->
                        <li>
                            <div class="contact-us">
                                <router-link class="btn nav-but" aria-current="page" :to="{ name: 'contact_page' }">
                                    <span style="font-size:0.9rem;"><i
                                            class="primary-icon fa-solid fa-user"></i>Contattaci</span>
                                </router-link>
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
                                    <span style="font-size:0.8rem;"><i class="primary-icon fa-solid fa-house"></i>Accedi o
                                        Registrati</span>
                                </button>
                            </a>
                        </li>

                        <!-- MENU -->
                        <li class="menu me-3">
                            <button class="btn nav-but" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span
                                    style="font-size:0.9rem;"><i
                                        class="primary-icon fa-solid fa-bars"></i>Menu</span></button>

                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <!-- LOGO AND CLOSE UP BUTTON-->
                                    <div class="logo2 d-flex justify-content-between align-items-center">
                                        <img src="../assets/img/Logo-COLORATO-BOOLEVEROO-.png" alt="logo-deliveroo"
                                            class="img-fluid w-50">

                                        <button type="button" class="btn-close m-0" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>


                                </div>

                                <div class="offcanvas-body text-center">
                                    <hr>
                                    <!-- OFFCANVAS SIGN UP BUTTON -->
                                    <div class="my-5 ">
                                        <a href="http://127.0.0.1:8000/login" class="sign-up-button">Accedi o Registrati</a>
                                    </div>

                                    <!-- OFFCANVAS MENU -->
                                    <div class="container-fluid off-canvas-menu">
                                        <div class="row text-start">

                                            <!-- CART -->
                                            <div class="col-12 mb-3">
                                                <router-link v-if="$store.state.cart.length" class="p-0 m-0 nav-but"
                                                    aria-current="page" :to="{ name: 'cart', params: { component: Cart } }">
                                                    <i class="pe-3 fa-solid fa-cart-shopping text-secondary"></i>
                                                    Vai al Carrello

                                                    <span v-if="$store.state.cart.length > 0">
                                                        + <i
                                                            :class="`fa-beat fa-xs fa-solid fa-${$store.state.cart.length}`"></i>
                                                    </span>
                                                </router-link>
                                            </div>

                                            <!-- FAQS -->
                                            <div class="col-12">

                                                <router-link :to="{ name: 'faqs_page', params: { component: FaqsPage } }">
                                                    <a href="#"><span><i
                                                                class="fa-solid fa-circle-question pe-3 text-secondary"></i>FAQs</span></a>
                                                </router-link>

                                            </div>

                                            <figure class="d-flex justify-content-center">
                                                <img class="img-fluid p-3 my-rounded"
                                                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                    alt="sidebar-img">
                                            </figure>



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

    .logo2 {
        width: 350px;
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

    .my-rounded {
        margin-top: 5px;
        border-radius: 33px;
        padding: 2rem;
        width: 85%;
    }
}
</style>