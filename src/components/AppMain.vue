<script>
import { sliderImages } from '../data/images'
export default {
    name: 'AppMain',
    props: {
        restaurants: Array,
        categories: Array,
    },
    data() {
        return {
            sliderImages
        }
    }

}
</script>

<template>
    <!--! JUMBOTRON -->
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <!-- MAIN-TEXT -->
                <div class="col-9 text-lg-center mx-lg-auto">
                    <h1 class="main-text my-4">I piatti che ami, a <span class="primary-color">domicilio.</span>
                    </h1>
                    <p class="postal-code-text">Inserisci il tuo indirizzo per trovare ristoranti nei dintorni</p>

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

                    <p class="login-text pt-3"><span class="primary-color">Accedi </span>per visualizzare i tuoi indirizzi
                        recenti.</p>

                </div>
            </div>
        </div>
    </div>

<!--! DYNAMIC IMAGES COLLECTION -->
<div class="dynamic-img-collection">
    <div class="slider">
        <div class="slide-track mb-3">
            <!-- <div v-for="image in sliderImages" :class="`slide ${image.type}`"
                :style="{ 'background-image': url(image.url) }"></div> -->
            <!-- 
            <div v-for="image in sliderImages" :class="`slide ${image.type}`"
                :style="`background-image:url(${image.url})`"></div> -->
        </div>
    </div>
</div>




<!-- ! DELIVEROO'S SELECTION
    <div class="deliveroo-selection  my-5 ">
        <div class="container ">
            <h2 class="selection-title m-0 py-4">La selezione di Booliveroo</h2>

            SELECTION-COLLECTION
            <div class="row selection-collection d-flex justify-content-center">



                COMFORT FOOD
                <div class="col-12 col-sm-6 col-lg-5">
                    <a href="#">
                        <div class="selection-card mb-5">
                            CARD-IMG
                            <div class="selection-img">
                                <h3 class="img-text text-center">Comfort Food</h3>
                            </div>

                            CARD-TEXT
                            <div class="card-body">
                                <p class="card-description my-2">I grandi classici che scaldano il cuore, perfetti in ogni
                                    momento.</p>
                                <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                DOLCI E DESSERT
                                <div class="col-12 col-sm-6 col-lg-7">
                                    <a href="#">
                                        <div class="selection-card mb-5">
                                            CARD-IMG
                                            <div class="selection-img">
                                                <h3 class="img-text text-center">Dolci e dessert</h3>
                                            </div>

                                            CARD-TEXT
                                            <div class="card-body">
                                                <p class="card-description my-2">Dolci piaceri per rendere la giornata ancora più gustosa.
                                                </p>
                                                <p class="discover-link"><a href="#">Scopri Dolci e dessert</a></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                PERFETTI DA CONDIVIDERE
                                <div class="col-12 col-sm-6 col-lg-7">
                                    <a href="#">
                                        <div class="selection-card mb-5">
                                            CARD-IMG
                                            <div class="selection-img">
                                                <h3 class="img-text text-center">Perfetti da condividere </h3>
                                            </div>

                                            CARD-TEXT
                                            <div class="card-body">
                                                <p class="card-description my-2">Serve una scusa per stare insieme? Ordina dai ristoranti
                                                    che trasformeranno la tua serata in una vera festa.</p>
                                                <p class="discover-link"><a href="#">Scopri Perfetti da condividere</a></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                                ESCLUSIVA DELIVEROO
                                <div class="col-12 col-sm-6 col-lg-5">
                                    <a href="#">
                                        <div class="selection-card mb-5">
                                                                                                    CARD-IMG
                                                                                                    <div class="selection-img">
                                                                                                        <h3 class="img-text text-center">Esclusiva Booliveroo</h3>
                                                                                                    </div>

                                                                                                                                                        CARD-TEXT
                                                                                                                                                                                <div class="card-body">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p class="card-description my-2">I più famosi, i più buoni, i preferiti. Quelli che trovi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                solo su Booliveroo</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p class="discover-link"><a href="#">Scopri Esclusiva Boolivero</a></p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div> -->

    <!--!RESTAURANTS CATEGORIES-->
    <div class="restaurants-categories my-5">
        <div class="container">
            <h2 class="categories-title my-4">Le nostre cucine</h2>

            <!-- RESTAURANTS CATEGORIES COLLECTION -->
            <div class="row categories-collection d-flex justify-content-center">

                <!-- CATEGORIES -->
                <div v-for="category in categories" :key="category.id" class="col-12 col-sm-6 col-lg-4">
                    <router-link :to="{ name: 'categories-restaurants', params: { id: category.id } }">
                        <div class="categories-card mb-5">
                            <!-- CATEGORIES CONTENT -->
                            <div class="categories-content">
                                <!-- IMG -->
                                <div class="categories-img">
                                    <img :src="category.image" class="img-fluid" :alt="category.name">
                                </div>
                                <!-- BUTTON -->
                                <div class="categories-button">
                                    <!-- <h1 class="categories-text">{{ category.label }}</h1> -->
                                    <button>Scopri di più</button>
                                </div>
                                <!-- TEXT -->
                                <h2 class="categories-text">{{ category.label }}</h2>

                            </div>

                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!--! NEWS -->
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
                            <p>Clienti o colleghi affamati? Il nostro team Corporate ti può aiutare.</p>
                            <a href="#" class="primary-button">Contattaci</a>
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
                                <h4>Hai già la nostra app?</h4>
                            </div>
                            <div class="d-none d-md-block ">
                                <p>Scaricala ora - disponibile su Apple Store e Google Play!</p>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-3">
                                        <a href="#">
                                            <img class="img-fluid download "
                                                src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                                alt="download-appstore">
                                        </a>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-3">
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


<!--! WORK WITH DELIVEROO -->
<div class="work-with-deliveroo my-5">
    <div class="container">
        <h2 class="work-title py-4">Lavora con Booliveroo</h2>

        <div class="row">

            <!-- RIDER
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #FF483B;">
                        <div class="p-0 work-card">

                            CARD-IMG
                                                                                    <div class="work-img">
                                                                                        <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                                                                            class="img-fluid mb-2" alt="...">
                                                                                    </div>

                                                                                                                                                        CARD-TEXT
                                                                                                                                                                                <div class="card-body p-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3>Rider</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="card-description py-3">Diventa un rider:flessibilità, ottimi guadagni e un mondo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            di
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            vantaggi per te.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <a href="#" class="primary-button">Unisciti a noi</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div> -->





                <!-- RESTAURANTS-->
                <div class="col-12 ">
                    <div class="mb-5" style="background-color: #FF8100;">
                        <div class="p-0 work-card pb-4">

                            <!-- CARD-IMG -->
                            <div class="work-img">

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


            <!-- CAREERS
                                <div class="col-12 col-md-4 ">
                                    <div class="mb-5" style="background-color: #BAC3C3;">
                                        <div class="p-0 work-card">

                                            CARD-IMG
                                                                                                    <div class="work-img">
                                                                                                        <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                                                                                            class="img-fluid mb-2" alt="...">
                                                                                                    </div>

                                                                                                                                                        CARD-TEXT
                                                                                                                                                                                <div class="card-body p-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3>Lavora con noi</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="card-description py-3">La nostra missione è trasformare il modo in cui le persone
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            mangiano. È un obiettivo ambizioso, come noi, e ci servono persone che ci aiutino a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            raggiungerlo..</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <a href="#" class="primary-button">Scopri di più</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div> -->


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


li {
    list-style-type: none;
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
    min-height: 200px;
    position: relative;

    // Animation
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-2120px)
        }
    }


    // Styling
    .slider {
        margin: auto;
        overflow: hidden;
        display: grid;
        position: absolute;
        top: -50px;


        .slide-track:first-child {
            animation: scroll 15s linear infinite;

        }

        .slide-track:last-child {
            animation: scroll 25s linear infinite;

        }


        .slide-track {
            display: flex;
            width: 4240px;
        }


        .slide {
            height: 130px;
            margin-left: 15px;
            display: flex;
            align-items: center;


            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
        }

        .slide.square {
            width: 130px;
        }

        .slide.rect {
            width: 270px;
        }

        .slide img {
            max-width: 100%;
            min-height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }




}


// DELIVEROO'S SELECTION
.deliveroo-selection {
    background-color: black;
    color: white;

    .selection-card {
        a {
            color: white;
        }

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


// RESTAURANTS CATEGORIES

.categories-card {
    transition: 0.8s;


    .categories-content {
        position: relative;
        transition: 0.8s;


        &:hover {
            scale: 0.9;
        }

        .categories-img {}

        .categories-img img {}


        .categories-button {

            &:hover {
                opacity: 1;

            }

            background: linear-gradient(0deg, rgba(0, 0, 0, 0.6)0%, rgba(0, 0, 0, 0)80%);
            color: white;
            opacity: 0;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: 0.5s;

            button {
                background-color: transparent;
                padding: 10px 20px;
                border: 2px solid white;
                color: white;
                transition: 0.6s;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.6);
                }
            }

        }
    }

    &:hover .categories-text {
        opacity: 0;
    }

    .categories-text {
        text-align: center;
        color: white;
        background-color: black;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 5px;

        transition: 0.5s;
    }



}




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

        .work-img {
            height: 300px;
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }


}
</style>