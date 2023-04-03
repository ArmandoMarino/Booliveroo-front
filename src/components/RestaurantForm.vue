<script>
import axios from 'axios';
const endpoint = '';
export default {
    name: "RestaurantForm",
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
            subscription: false,
        }
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form).then(() => {
                this.form = {
                    email: '',
                    subject: '',
                    message: '',
                    subscription: false,
                }
            }).catch(err => { console.error(err) }).then(() => {

            });
        }
    }
};
</script>

<template>
    <div class="my-5">

        <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary mt-2 ">TORNA ALLA HOME</router-link>
    </div>
    <form @submit.prevent="sendForm">
        <div class="mb-3">
            <label for="email" class="form-label">Inidirizzo Email<sup class="text-danger">*</sup> </label>
            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com"
                v-model.trim="form.email" required>
            <small class="text-muted form-text">La tua email. Sarai ricontattato a questo indirizzo</small>
        </div>
        <!-- oggetto -->

        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail<sup class="text-danger">*</sup></label>
            <input class="form-control" name="subject" id="subject" rows="3" v-model.trim="form.subject">
        </div>
        <!-- contenuto -->

        <div class="mb-3">
            <label for="message" class="form-label">Contenuto del messaggio<sup class="text-danger">*</sup></label>
            <textarea class="form-control" name="message" id="message" rows="5" v-model.trim="form.message"></textarea>
        </div>
        <!-- check -->

        <!-- <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="subscription" id="subscription" value="1"
                        v-model.trim="form.subscription">
                    <label class="form-check-label" for="subscription">Iscriviti alla Newsletter!</label>
                </div> -->

        <div class="d-flex justify-content-end my-3">
            <button type="submit" class="btn btn-primary">INVIA</button>
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
</style>