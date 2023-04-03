<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import SideBar from "./components/SideBar.vue";

import axios from "axios";
export default {
  name: "App",
  components: { AppHeader, AppFooter, SideBar }

}
</script>


<template>
  <app-header></app-header>
  <!-- <side-bar></side-bar> -->
  <RouterView />
  <app-footer></app-footer>
</template>

<style></style>