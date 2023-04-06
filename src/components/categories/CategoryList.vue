<script>
import CategoryCard from './CategoryCard.vue';
export default {
    name: 'CategoryList',
    components: { CategoryCard },
    props: {
        restaurants: Object,
        // category : Object,
    },

}
</script>


<template>
    <div class="category-list">
        <div class="container">
            <section class="categories">
                <h4>Lista Categorie</h4>
                <div class="row">
                    <category-card v-for="category in categories" :key="category.name" :category="category"></category-card>
                </div>
            </section>
            <section class="row new"></section>
            <section class="row top-rated"></section>
        </div>
    </div>
</template>


<style></style>