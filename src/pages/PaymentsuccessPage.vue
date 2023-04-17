<script>
export default {
    name: "PaymentsuccessPage",
};
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center vh-100">
        <h4 class="mb-5">
            <i class="me-3 fa-solid fa-2xl text-success fa-circle-check fa-bounce"></i>
            Pagamento avvenuto con successo
        </h4>
        <router-link class="btn btn-sm btn-secondary" :to="{ name: 'home', params: { component: HomePage } }">
            Torna alla Home
        </router-link>
    </div>
</template>