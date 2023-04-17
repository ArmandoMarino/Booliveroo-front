<script>
export default {
    name: "PaymentsuccessPage",
};
</script>

<template>
    <div id="payment-success" class="d-flex flex-column align-items-center justify-content-center">
        <h4 class="mb-5">
            <i class="me-3 fa-solid fa-2xl text-success fa-circle-check fa-bounce"></i>
            Pagamento avvenuto con successo
        </h4>
        <router-link class="btn btn-sm btn-secondary" :to="{ name: 'home', params: { component: HomePage } }">
            Torna alla Home
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
#payment-success {
    min-height: 400px;
}
</style>