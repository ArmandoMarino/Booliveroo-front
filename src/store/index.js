import { createStore } from "vuex";
/* eslint-disable */
export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
  },
  mutations: {
    async initialiseStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      }
      if (localStorage.getItem("cartTotal")) {
        state.cartTotal = parseFloat(localStorage.getItem("cartTotal"));
      }
      return true;
    },
    addRemoveCart(state, payload) {
      //add or remove item
      payload.toAdd
        ? state.cart.push(payload.product)
        : (state.cart = state.cart.filter(function (obj) {
            return obj.id !== payload.product.id;
          }));

      //calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return (
          parseFloat(accumulator) + parseFloat(object.price * object.quantity)
        );
      }, 0);

      //saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCart(state, payload) {
      //update quantity
      state.cart.find((o) => o.id === payload.product.id).quantity =
        payload.product.quantity;

      //calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return (
          parseFloat(accumulator) + parseFloat(object.price * object.quantity)
        );
      }, 0);

      //saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    emptyCart(state) {
      state.cart = [];
      state.cartTotal = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("cartTotal");
    },
  },
  actions: {},
  modules: {},
});
