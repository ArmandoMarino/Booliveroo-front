<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';
export default {
    name: "RestaurantForm",
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
        }
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form).then(() => {
                this.form = {
                    email: '',
                    subject: '',
                    message: '',
                }
            }).catch(err => { console.error(err) }).then(() => {

            });
        }
    }
};
</script>

<template>
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
            <textarea class="form-control" name="message" id="message" rows="5" v-model.trim="form.text"></textarea>
        </div>

        <div class="d-flex justify-content-between align-items-center my-3">
            <!-- <router-link :to="{ name: 'home' }" class="btn btn-secondary mt-2 ">TORNA INDIETRO</router-link> -->
            <button @click="$router.back()" class="btn btn-secondary mt-2 ">Torna indietro</button>
            <button type="submit" class="btn btn-primary px-3">Invia</button>
        </div>
    </form>
    <!-- <div class="mb-5 d-flex justify-content-end">

                                            </div> -->
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
</style>