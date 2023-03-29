<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">

            <!-- logo -->
            <a class="navbar-brand" href="#"><img class="img-fluid logo"
                    src="https://1000marche.net/wp-content/uploads/2021/01/Deliveroo-logo.png" alt="deliveboo.logo"></a>

            <!-- bars -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fa-solid fa-2x fa-bars"></i></span>
            </button>


            <!-- navbar menu -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <!-- partners -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle nav-but" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Partner with us
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Riders</a></li>
                            <li><a class="dropdown-item" href="#">Restaurants</a></li>
                            <li><a class="dropdown-item" href="#">Careers</a></li>
                            <li><a class="dropdown-item" href="#">Deliveroo for Work</a></li>
                        </ul>
                    </li>

                    <!-- cart -->
                    <li class="nav-item">
                        <a class="nav-link nav-but" aria-current="page" href="#">
                            <span><i class="fa-solid fa-cart-shopping"></i>$0.00</span>

                        </a>
                    </li>

                    <!-- sign up or log in -->
                    <li class="nav-item">
                        <a class="nav-link nav-but" href="#">
                            <span><i class="fa-solid fa-house"></i>Sign up or log in</span>
                        </a>
                    </li>

                    <!-- menu -->
                    <li class="nav-item">
                        <button class="nav-but" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                            aria-controls="offcanvasTop"><span><i class="fa-solid fa-bars"></i></span> Menu</button>

                        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                ...
                            </div>
                        </div>
                    </li>

                </ul>
            </div>



        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;


.navbar {
    background-color: black;
    padding: 10px 0;


    .logo {
        width: 140px;
    }


    .nav-but {
        background-color: white;
        padding: 8px 20px;
        border-radius: 6px;
        margin-left: 10px;
    }

    .fa-solid {
        color: $primary;
        padding-right: 6px;
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