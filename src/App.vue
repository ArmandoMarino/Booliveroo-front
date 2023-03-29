<script>
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: { AppFooter }
}
</script>


<template>
  <RouterView />
  <app-footer></app-footer>
</template>

<style></style>