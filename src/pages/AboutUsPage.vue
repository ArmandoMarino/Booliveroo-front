<script>

export default {
    name: "AboutUs",
}
</script>


<template>
    <div id="about-us">
        <div class="container">

            <div class="pt-5">
                <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary mt-2 ">TORNA ALLA HOME</router-link>
            </div>
            <h1 class="text-white fw-bold py-3">About Us</h1>
        </div>

        <div class="container">

            <div class="d-flex justify-content-between">
                <div class="list-group navbar-aboutus">
                    <a href="#" class="list-group-item list-group-item-action py-3">The Story of Booliveroo</a>
                    <a href="#" class="list-group-item list-group-item-action py-3">Riders</a>
                    <a href="#" class="list-group-item list-group-item-action py-3">Driven by technology</a>
                    <a href="#" class="list-group-item list-group-item-action py-3">Innovation, delivered</a>
                    <a href="#" class="list-group-item list-group-item-action py-3">Our Values</a>
                </div>
                <div class="section rounded-2">
                    <section id="story">
                        <h2>The Story of Booliveroo</h2>
                        <img src="https://i0.wp.com/www.fruitbookmagazine.it/wp-content/uploads/2020/11/aldi-deliveroo.jpg?fit=1200%2C800&ssl=1"
                            class="img-fluid" alt="founder">
                        <p class="py-3">When Booliveroo's founder and CEO Will Shu moved to London in 2013 he discovered a
                            city full of
                            great restaurants, but he was amazed that so few of them delivered food. He made it his personal
                            mission to bring the best local restaurants direct to people’s doors.

                            Today, Booliveroo operates a hyperlocal three-sided marketplace, connecting local consumers,
                            restaurants and grocers, and riders to fulfill a mission critical, emotional purchase in under
                            30 minutes. By offering fast and reliable delivery which consumers can track online, Booliveroo
                            has grown rapidly. Booiveroo now operates in 11 markets worldwide, working with thousands of
                            restaurants and grocers, thousands of riders, and serving millions of consumers.</p>
                    </section>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#about-us {
    // height: 100vh;
    background-image: linear-gradient($primary 37%, whitesmoke 15%, whitesmoke);

}

.navbar-aboutus {
    flex-basis: 34%;
}

.section {
    flex-basis: 64%;
    background-color: whitesmoke;
    padding: 2rem;
}
</style>