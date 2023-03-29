<script>
export default {
    name: "NotFoundPage",
};
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 class="mb-5">404 | Not Found</h1>
        <h4 class="mb-5">
            Ops, Sembra che tu abbia richiesto una pagina inesistente
        </h4>
        <button class="btn btn-sm btn-secondary" @click="$router.back()">
            Torna Indietro
        </button>
    </div>
</template>
