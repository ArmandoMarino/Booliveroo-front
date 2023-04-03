<script>
export default {
    name: 'AppMain'
}
</script>

<template>
    <!-- JUMBOTRON -->
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <!-- MAIN-TEXT -->
                <div class="col-9 text-lg-center mx-lg-auto">
                <h1 class="main-text my-4">Restaurant food,takeaway and groceries.<span
                        class="primary-color">Delivered.</span></h1>
                <p class="postal-code-text">Enter a postcode to see what we deliver</p>

                    <!-- TODO INPUT PASSERA' I DATI NELLA RestaurantPage -->
                    <!-- <div class="input-group mb-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="text" class="form-control search-input" aria-label="Sizing example input"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        aria-describedby="inputGroup-sizing-default">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span class="input-group-text search-button" id="inputGroup-sizing-default">Search</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div> -->

                    <router-link class="search-button "
                        :to="{ name: 'restaurants', params: { component: RestaurantPage } }">
                        Search
                    </router-link>

                    <p class="login-text pt-3"><span class="primary-color">Log in </span>for your recent addresses</p>

                </div>
            </div>
        </div>
    </div>

    <!-- DYNAMIC IMAGES COLLECTION -->
    <div class="dynamic-img-collection text-center">
        <h1>images collection</h1>
    </div>



    <!-- DELIVEROO'S SELECTION -->
    <div class="deliveroo-selection  my-5 ">
        <div class="container ">
            <h2 class="selection-title m-0 py-4">La selezione di Booliveroo</h2>

            <!-- SELECTION-COLLECTION -->
            <div class="row selection-collection d-flex justify-content-center">



                <!-- COMFORT FOOD -->
                <div class="col-12 col-sm-6 col-lg-5">
                    <div class="selection-card mb-5">
                        <!-- CARD-IMG -->
                        <div class="selection-img">
                            <h3 class="img-text text-center">Comfort Food</h3>
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <p class="card-description m-0">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                        </div>
                    </div>
                </div>

                <!-- COMFORT FOOD -->
                <div class="col-12 col-sm-6 col-lg-7">
                    <div class="selection-card">
                        <!-- CARD-IMG -->
                        <div class="selection-img">
                            <h3 class="img-text text-center">Comfort Food</h3>
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <p class="card-description m-0">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                        </div>
                    </div>
                </div>

                <!-- COMFORT FOOD -->
                <div class="col-12 col-sm-6 col-lg-7">
                    <div class="selection-card">
                        <!-- CARD-IMG -->
                        <div class="selection-img">
                            <h3 class="img-text text-center">Comfort Food</h3>
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <p class="card-description m-0">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                        </div>
                    </div>
                </div>


                <!-- COMFORT FOOD -->
                <div class="col-12 col-sm-6 col-lg-5">
                    <div class="selection-card">
                        <!-- CARD-IMG -->
                        <div class="selection-img">
                            <h3 class="img-text text-center">Comfort Food</h3>
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <p class="card-description m-0">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- FAVOURITES RESTAURANTS-->
    <div class="favourite-restaurants my-5">
        <div class="container">
            <h2 class="favourite-rest-title">I tuoi piatti preferiti, consegnati da noi</h2>

            <!-- FAVOURITES RESTAURANTS COLLECTION -->
            <div class="row selection-collection d-flex justify-content-center">

                <!-- COMFORT FOOD -->
                <div class="col-12 col-md-4">
                    <div class="selection-card mb-5">
                        <!-- CARD-IMG -->
                        <div class="card-img">
                            <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                class="img-fluid mb-2" alt="...">
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <h5>McDonald's</h5>
                        </div>
                    </div>
                </div>

                <!-- COMFORT FOOD -->
                <div class="col-12 col-md-4">
                    <div class="selection-card mb-5">
                        <!-- CARD-IMG -->
                        <div class="card-img">
                            <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                class="img-fluid mb-2" alt="...">
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <h5>McDonald's</h5>
                        </div>
                    </div>
                </div>

                <!-- COMFORT FOOD -->
                <div class="col-12 col-md-4">
                    <div class="selection-card mb-5">
                        <!-- CARD-IMG -->
                        <div class="card-img">
                            <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                class="img-fluid mb-2" alt="...">
                        </div>

                        <!-- CARD-TEXT -->
                        <div class="card-body">
                            <h5>McDonald's</h5>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>

    <!-- OTHER-FOODS -->
    <div class="other-foods">
        <div class="container">
            <h2 class="other-foods-title">Cerchi qualcos'altro?</h2>
        </div>
    </div>

    <!-- NEWS -->
    <div class="news my-5 pb-4">
        <div class="container">
            <h2 class="news-title py-3">Novità dalla nostra cucina</h2>


            <div class="news-card mb-4">
                <!-- DELIVEROO FOR WORK -->
                <div class="row deliveroo-for-work align-items-center">

                    <div class="col-6">
                        <div class="news-img"></div>
                    </div>

                    <div class="col-6">
                        <div class="card-text">
                            <h4>Deliveroo for Work</h4>
                            <p>Hungry clients or hungry staff, our corporate team can help.</p>
                            <a href="#" class="primary-button">Enquire</a>
                        </div>
                    </div>

                </div>
            </div>


            <div class="news-card">
                <!-- DELIVEROO APP -->
                <div class="row deliveroo-app align-items-center">

                    <div class="col-6">

                        <div class="card-text ps-3 row">

                            <div class="col-12">
                                <h4>Have you got the app?</h4>
                            </div>
                            <div class="d-none d-md-block ">
                                <p>Get yours now - available on the iOS and Android app stores!</p>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#">
                                            <img class="img-fluid download"
                                                src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                                alt="download-appstore">
                                        </a>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#">
                                            <img class="img-fluid download"
                                                src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                                alt="download-appstore">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-6">
                        <div class="news-img"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <!-- WORK WITH DELIVEROO -->
    <div class="work-with-deliveroo my-5">
        <div class="container">
            <h2 class="work-title py-4">Lavora con Booliveroo</h2>

            <div class="row g-3">

                <!-- RIDER-->
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #FF483B;">
                        <div class="p-0 work-card">

                            <!-- CARD-IMG -->
                            <div class="work-img">
                                <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                    class="img-fluid mb-2" alt="...">
                            </div>

                            <!-- CARD-TEXT -->
                            <div class="card-body p-3">
                                <h3>Rider</h3>
                                <p class="card-description py-3">Diventa un rider:flessibilità, ottimi guadagni e un mondo
                                    di
                                    vantaggi per te.</p>
                                <a href="#" class="primary-button">Unisciti a noi</a>
                            </div>

                        </div>
                    </div>
                </div>





                <!-- RESTAURANTS-->
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #FF8100;">
                        <div class="p-0 work-card">

                            <!-- CARD-IMG -->
                            <div class="work-img">
                                <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                    class="img-fluid mb-2" alt="...">
                            </div>

                            <!-- CARD-TEXT -->
                            <div class="card-body p-3">
                                <h3>Ristoranti</h3>
                                <p class="card-description py-3">Diventa partner di Booliveroo e raggiungi sempre più
                                    clienti. Ci
                                    occupiamo noi della consegna, così che la tua unica preoccupazione sia continuare a
                                    preparare il miglior cibo.</p>
                                <a href="#" class="primary-button">Diventa partner</a>
                            </div>

                        </div>
                    </div>
                </div>


                <!-- CAREERS-->
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #BAC3C3;">
                        <div class="p-0 work-card">

                            <!-- CARD-IMG -->
                            <div class="work-img">
                                <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                    class="img-fluid mb-2" alt="...">
                            </div>

                            <!-- CARD-TEXT -->
                            <div class="card-body p-3">
                                <h3>Lavora con noi</h3>
                                <p class="card-description py-3">La nostra missione è trasformare il modo in cui le persone
                                    mangiano. È un obiettivo ambizioso, come noi, e ci servono persone che ci aiutino a
                                    raggiungerlo..</p>
                                <a href="#" class="primary-button">Scopri di più</a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as*;

// ****** GENERAL******
.primary-button {
    padding: 10px 20px;
    border-radius: 4px;

    color: white;
    background-color: $primary;
}

.primary-color {
    color: $primary;
}

a {
    text-decoration: none;
}



// JUMBOTRON
.jumbotron {
    min-height: 470px;
    background-image: url('https://c4.wallpaperflare.com/wallpaper/646/592/902/black-background-sandwich-hamburger-bokeh-fast-food-hd-wallpaper-preview.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;


    .main-text {
        font-size: 40px;
        font-weight: 700;
    }


    .search-button {
        border-radius: 20px;
        padding: 10px 20px;
        background-color: $primary;
        color: white;
    }


}

// DYNAMIC IMAGES COLLECTION
.dynamic-img-collection {
    height: 100px;
    background-color: black;
    color: white;
}


// DELIVEROO'S SELECTION
.deliveroo-selection {
    background-color: black;
    color: white;

    .selection-card {

        .selection-img {
            position: relative;
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150px;

            .img-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .card-body {
            .discover-link {
                a {
                    color: $primary;
                }
            }
        }
    }
}


// FAVOURITES RESTAURANTS

.favourite-restaurants {}




// NEWS
.news {
    min-height: 300px;
    background-color: #F9FAFA;

    .news-card {
        background-color: white;

        .download {
            width: 100px;
        }

        .news-img {
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150px;
        }
    }
}


// WORK WITH DELIVEROO

.work-with-deliveroo {

    .work-card {
        color: white;
        height: 600px;



        .work-img {
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }


}
</style>