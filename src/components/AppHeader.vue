<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <header>
        <div class="container">
            <section class="logo">
                <img src="https://1000marche.net/wp-content/uploads/2021/01/Deliveroo-logo.png" alt="logo-deliveroo"
                    class="img-fluid">
            </section>
            <section class="menu"></section>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

header {
    height: 100px;
    background-color: black;
}
</style>