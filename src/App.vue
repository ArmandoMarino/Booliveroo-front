<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import axios from "axios";
export default {
  name: "App",
  components: { AppHeader, AppFooter },
  methods: {
    async mounted() {
      await this.$store.commit('initialiseStore')
    },
  }
}
</script>


<template>
  <app-header></app-header>
  <RouterView />
  <app-footer></app-footer>
</template>

<style></style>