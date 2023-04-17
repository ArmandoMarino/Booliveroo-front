<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
  async mounted() {
    await this.$store.commit('initialiseStore')
  },
}
</script>


<template>
  <app-header></app-header>
  <div class="wrapper">
    <RouterView />

  </div>
  <app-footer></app-footer>
</template>

<style>
.wrapper {
  min-height: calc(100vh - 584.13px);
}
</style>