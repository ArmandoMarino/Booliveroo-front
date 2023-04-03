<script>
import RestaurantForm from '../components/RestaurantForm.vue';

export default {
    name: "ContactPage",
    components: { RestaurantForm }
};
</script>

<template>
    <div class="container my-5">
        <restaurant-form></restaurant-form>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
</style>