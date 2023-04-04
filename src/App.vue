<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

// LOGIN
// import { ref, onMounted } from 'vue';
import axios from "axios";
const apiBaseUrl = "http://127.0.0.1:8000/api/";
// const user = ref();


export default {
  name: "App",
  components: { AppHeader, AppFooter },
  data: () => ({
    user: {},
  }),
  methods: {
    getUser() {
      const endpoint = apiBaseUrl + "user/";
      axios.get(endpoint)
        .then((res) => {
          this.user = res.data;
          console.log(this.user, 'QUIIIIIIII');
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        });
    },
  },
  async onMounted() {
    this.getUser();
  },
}
</script>


<template>
  <app-header></app-header>
  <RouterView />
  <app-footer></app-footer>
</template>

<style></style>