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
            this.item.qty = 1
            this.$store.commit('addRemoveCart', { product: this.item, toAdd: this.toAdd })
            let toasMSG;
            this.toAdd ?
                toasMSG = 'Added to cart' : toasMSG = 'Removed from cart'
            toast(toasMSG, {
                autoClose: 1000,
            });
            this.toAdd = !this.toAdd
        }
    },
    mounted() {
        console.log(this.$store.state.cart)
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
    <button type="button" @click="addOrRemove()" class="cart-btn btn btn-sm me-2">
        <i :class="toAdd ? 'fa-solid fa-cart-plus' : 'fa-solid fa-trash-can text-danger'"></i>
    </button>
    <CartAddRemove v-if="!toAdd" :product="item" />
</template>


<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.cart-btn {
    width: 40px;
    height: 38px;
}

.plus-minus input {
    max-width: 50px;
}

.fa-cart-plus {
    color: $secondary;
}
</style>