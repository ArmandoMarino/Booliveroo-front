<script>
import axios from 'axios';
import CartAddRemove from '../components/CartAddRemove.vue';
import Payment from '../components/Payment.vue';
export default {
    components: { CartAddRemove, Payment },
    data() {
        return {
            tokenApi: '',
            isLoading: false,
            isOpenedUserForm: false,
            isOpenedPayForm: false,
            name: '',
            address: '',
            email: '',
            phone: '',
        }
    },
    methods: {
        removeItem(item) {
            this.$store.commit('addRemoveCart', { product: item, toAdd: false })
        },

        emptyCart() {
            this.$store.commit('emptyCart', this.$store.state)
        },

        openUserForm() {
            this.isOpenedUserForm = true;
        },

        openPayForm() {
            this.isOpenedUserForm = false;
            this.isOpenedPayForm = true;
        }
    },

    mounted() {
        this.isLoading = true;
        axios.get('http://127.0.0.1:8000/api/ctoken').then(res => {
            this.isLoading = false;
            this.tokenApi = res.data;
        })
    }
}
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <section v-else class="h-100 h-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card border-0">
                        <div class="card-body p-4">

                            <div class="row">
                                <div class="col-lg-7">
                                    <h5 class="mb-3"><button @click="$router.back()"
                                            class="btn btn-sm btn-info text-body"><i
                                                class="text-white fas fa-long-arrow-alt-left me-2"></i>
                                            <span class="text-white fw-bold">Continua su Boolivero</span>
                                        </button>
                                    </h5>
                                    <hr>

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-0">
                                                <span
                                                    v-if="$store.state.cart.length > 1 || $store.state.cart.length < 1">Hai
                                                    <strong class="me-2"> {{
                                                        $store.state.cart.length
                                                    }}</strong>oggetti nel
                                                    tuo carrello.</span>

                                                <span v-else>Hai <strong class="me-2">{{
                                                    $store.state.cart.length }}</strong>oggetto nel
                                                    tuo carrello.</span>
                                            </p>

                                        </div>

                                        <div v-if="!isOpenedUserForm && !isOpenedPayForm" class="disabled">
                                            <button class="btn btn-sm btn-danger" @click="emptyCart()">Svuota
                                                carrello</button>
                                        </div>
                                    </div>

                                    <div v-for="item in $store.state.cart" class="card mb-3 shadow-sm border-0"
                                        :key="item.id">
                                        <div class="card-body">

                                            <div class="w-100 w-md-50 mb-3 info-food">{{ item.label }}</div>

                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img :src="item.image" class="img-fluid rounded-3"
                                                            alt="Shopping item" style="width: 65px;">

                                                    </div>
                                                    <div class="ms-3">
                                                        <p>{{ item.name }}</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div v-if="!isOpenedUserForm && !isOpenedPayForm" class="disabled">
                                                        <CartAddRemove :product="item" />
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <h5 class="mb-0"><i class="fa-solid fa-euro me-2"></i>{{
                                                            item.price * item.quantity }}</h5>
                                                        <small v-if="item.hasDiscount"
                                                            class="text-muted text-decoration-line-through"><i
                                                                class="bi bi-currency-dollar"></i>{{ item.price }}</small>
                                                    </div>
                                                    <a role="button" @click="removeItem(item)" class="ms-4"
                                                        style="color: #cecece;"><i
                                                            class="fa-solid fa-trash-can text-danger h4"
                                                            v-if="!isOpenedUserForm && !isOpenedPayForm"
                                                            :class="disabled"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-5">

                                    <!-- CART DETAILS -->
                                    <div class="card bg-primary text-white rounded-0 border-0">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Carrello</h5>
                                                <i class="bi bi-cart3 h1"></i>
                                            </div>
                                            <hr class="my-4">

                                            <!--* TOTAL -->
                                            <div class="d-flex justify-content-between mb-4">
                                                <h5 class="mb-2"><strong>Totale</strong></h5>
                                                <p class="mb-2 fw-bold"><i class="fa-solid fa-euro me-2"></i>{{
                                                    $store.state.cartTotal }}</p>
                                            </div>
                                            <hr>



                                            <button
                                                v-if="!isOpenedUserForm && !isOpenedPayForm && $store.state.cart.length > 0"
                                                type="button" class="btn btn-sm btn-info btn-block btn-lg"
                                                @click="openUserForm()">Procedi</button>

                                        </div>

                                        <!-- form after "procedi" -->
                                        <div v-if="isOpenedUserForm" class="row px-3">

                                            <!-- title -->
                                            <div class="col-12 mb-4 mt-3">
                                                <h3 class="text-center">Inserisci i tuoi dati per procedere al pagamento
                                                </h3>
                                            </div>

                                            <!-- name field -->
                                            <div class="col-12">
                                                <div class="mb-4">
                                                    <input type="text" class="form-control" v-model="name" required>
                                                    <div class="form-text text-white">Inserisci il tuo nome</div>
                                                </div>
                                            </div>

                                            <!-- email field -->
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <input type="email" class="form-control" v-model="email" required>
                                                    <div class="form-text text-white">Inserisci la tua email</div>
                                                </div>
                                            </div>

                                            <!-- address field -->
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <input type="text" class="form-control" v-model="address" required>
                                                    <div class="form-text text-white">Inserisci il tuo indirizzo</div>
                                                </div>
                                            </div>

                                            <!-- phone field -->
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <input type="text" class="form-control" v-model="phone" required>
                                                    <div class="form-text text-white">Inserisci il tuo numero di telefono
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- open payment button -->
                                            <div class="col-12">
                                                <div class="mb-3 d-flex justify-content-end">
                                                    <button @click="openPayForm()" class="btn btn-sm btn-success">Procedi al
                                                        pagamento</button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- payment component -->
                                        <div class="px-3 pb-3" v-if="tokenApi && isOpenedPayForm">
                                            <Payment :tokenApi="tokenApi" :address="address" :phone="phone" :email="email"
                                                :name="name" />
                                        </div>

                                    </div>

                                </div>



                            </div>

                            <hr>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
 