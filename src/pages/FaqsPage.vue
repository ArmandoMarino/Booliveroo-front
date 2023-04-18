<script>
import { questions } from '../data/questions'

export default {
    name: "Faqs",
    data() {
        return {
            questions
        }

    },
}
</script>


<template>
    <div class="container">
        <!-- TITLE -->
        <h1 class="my-5">Domande piu frequenti</h1>


        <!-- FREQUENTLY ASKED QUESTIONS -->
        <div class="questions">

            <div class="accordion accordion-flush" id="accordionFlushExample">

                <!-- V-FOR QUESTIONS -->
                <div v-for="question in questions" class="accordion-item">
                    <h2 class="accordion-header" :id="'flush-heading' + question.id">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#flush-collapse' + question.id" aria-expanded="false"
                            :aria-controls="'flush-collapse' + question.id">
                            {{ question.title }}
                        </button>
                    </h2>
                    <div :id="'flush-collapse' + question.id" class="accordion-collapse collapse"
                        :aria-labelledby="'flush-heading' + question.id" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">{{ question.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end my-4">
            <router-link :to="{ name: 'home', params: { component: HomePage } }">
                <button class="btn btn-secondary">Torna Indietro</button>
            </router-link>
        </div>


    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;



.accordion-button:not(.collapsed) {
    background-color: $primary;
    color: white;
}

h1 {
    color: $primary;
}
</style>