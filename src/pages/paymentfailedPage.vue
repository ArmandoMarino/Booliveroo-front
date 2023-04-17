<script>
export default {
    name: "PaymentfailedPage",
};
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center vh-100">
        <h4 class="mb-5">
            <i class="me-3 fa-solid fa-2xl text-danger fa-circle-xmark fa-shake"></i>
            Qualcosa è adato storto, il pagamento non è andato a buon fine.
        </h4>
        <router-link class="btn btn-sm btn-secondary" :to="{ name: 'home', params: { component: HomePage } }">
            Torna alla Home
        </router-link>
    </div>
</template>



