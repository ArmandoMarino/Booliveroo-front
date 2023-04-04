<script>
// LOGIN
import axios from 'axios';
const apiBaseUrl = "http://127.0.0.1:8000/";

export default {
    name: "AppLogin",
    data: () => ({
        form: {
            email: '',
            password: '',
        },
    }),
    methods: {
        handleLogin() {
            const endpoint = apiBaseUrl + "login";
            axios.post(endpoint, this.form)
                .then(() => {
                    this.email = this.form.value.email;
                    this.password = this.form.value.email;
                })
                .catch(() => {
                    this.$router.push({ name: "home" });
                });
        },
    },
    async onMounted() {
        this.handleLogin();
    },
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center ">
            <div id="login" class="col-4 my-5">
                <h1 class="my-3">Login</h1>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <!-- <div class="mb-3 form-check">
                                                                                                                                                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                                                                                                                                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                                                                                                                                                                </div> -->
                    <button type="submit" class="btn btn-primary">Accedi</button>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
#login {
    min-height: 400px;
}
</style>