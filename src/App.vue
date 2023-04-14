<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter }
}
</script>


<template>
  <app-header></app-header>
  <div id="main-wrapper">
    <RouterView />
  </div>
  <app-footer></app-footer>
</template>

<style>
#main-wrapper {
  min-height: 800px;
}
</style>