<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    props: ['product'],
    components: { CartAddRemove },
    data() {
        return {
            toAdd: true,
            item: []
        }
    },
    methods: {
        async addOrRemove() {
            this.item.quantity = 1;
            let restaurantId = this.item.restaurant_id;
            let cart = this.$store.state.cart;
            let sameRestaurant = true;

            cart.forEach((item) => {
                if (item.restaurant_id !== restaurantId) {
                    sameRestaurant = false;
                }
            });

            if (sameRestaurant) {
                // clear toast waiting queue
                toast.clearAll();

                // call the store method
                this.$store.commit('addRemoveCart', { product: this.item, toAdd: this.toAdd });

                if (this.toAdd) {
                    // clear toast waiting queue
                    toast.clearAll();

                    // show the toast
                    toast.success('Articolo aggiunto al carrello', {
                        autoClose: 1000,
                        position: "top-center",
                        limit: 1
                    })
                } else {
                    // clear toast waiting queue
                    toast.clearAll();

                    // show the toast
                    toast.warning('Articolo rimosso dal carrello', {
                        autoClose: 1000,
                        position: "top-center",
                        limit: 1
                    })
                }

                this.toAdd = !this.toAdd;
            } else {

                //clear toast waiting queue
                toast.clearAll();

                // show the toast
                toast.error('Non puoi ordinare da più di un ristorante alla volta, clicca qui per svuotare il carrello', {
                    autoClose: false,
                    onClick: () => {
                        this.$store.commit('emptyCart', this.$store.state)

                        // Se volessimo indirizzare al carrello
                        // this.$router.push({ name: 'cart' })
                    },
                    limit: 1,
                    position: "top-center"
                })
            }
        },
    },
    mounted() {
        // console.log(this.$store.state.cart)
        let cart = this.$store.state.cart
        let obj = cart.find(o => o.id === this.product.id);
        if (obj) {
            this.toAdd = false
            this.item = obj
        }
        else {
            this.item = this.product
            this.toAdd = true
        }
    }
}
</script>

<template>
    <div class="d-flex align-items-center">
        <button type="button" @click="addOrRemove()"
            class="d-flex justify-content-center align-items-center cart-btn btn btn-sm me-2">
            <i :class="toAdd ? 'fa-solid fa-cart-plus me-2' : 'fa-solid fa-trash-can text-danger'"></i>
            <span v-if="toAdd">Aggiungi</span>
        </button>
        <CartAddRemove v-if="!toAdd" :product="item" />
    </div>
</template>


<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.cart-btn {
    width: 100px;
    height: 38px;
}

.plus-minus input {
    max-width: 50px;
}

.fa-cart-plus {
    color: $secondary;
}
</style>