<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: 'CartAddRemove',
    props: ['product'],
    data() {
        return {
            quantity: 1,
            loading: false
        }
    },
    methods: {
        async addOrRemove(number) {
            this.loading = true
            if (number == 1) {
                if (this.quantity < 10) {
                    this.quantity++
                    this.product.quantity = this.quantity
                    await this.$store.commit('updateCart', { product: this.product })
                } else {
                    // clear toast waiting queue
                    toast.clearAll();

                    toast.error('Hai raggiunto il limite massimo consentito!', {
                        autoClose: 3000,
                        position: "top-center",
                        limit: 1
                    });
                }
            }
            if (number == -1) {
                if (this.quantity > 1) {
                    this.quantity--
                    this.product.quantity = this.quantity
                    await this.$store.commit('updateCart', { product: this.product })
                } else {
                    // clear toast waiting queue
                    toast.clearAll();

                    toast.error('Non puoi selezionare una quantità inferiore!', {
                        autoClose: 3000,
                        position: "top-center",
                        limit: 1
                    });
                }
            }
            this.loading = false
        }
    },
    mounted() {
        this.quantity = this.product.quantity
    }
}
</script>

<template>
    <div v-if="product" class="input-group plus-minus">
        <button class="btn btn-outline-secondary " :class="loading ? 'disabled' : ''" @click="addOrRemove(-1)" type="button"
            id="button-addon1">-</button>
        <input type="number" v-model="quantity" disabled class="form-control form-control-sm" placeholder=""
            aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary" :class="loading ? 'disabled' : ''" @click="addOrRemove(1)" type="button"
            id="button-addon1">+</button>
    </div>
</template>
 
<style>
.plus-minus input {
    max-width: 50px;
}
</style>