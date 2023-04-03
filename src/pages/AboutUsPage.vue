<script>

export default {
    name: "AboutUs",
}
</script>


<template>
    <div id="about-us">

        <div class="container">
            <h1 class="text-white fw-bold py-5">About Us</h1>
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
                        <img src="https://j7a5u2n2.stackpathcdn.com/wp-content/uploads/2022/04/Richard-Liu-148552-detailp.png"
                            class="img-fluid w-100" alt="founder">
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
                    <section id="riders">
                        <h2>Riders</h2>
                        <img src="https://i0.wp.com/www.fruitbookmagazine.it/wp-content/uploads/2020/11/aldi-deliveroo.jpg?fit=1200%2C800&ssl=1"
                            class="img-fluid" alt="rider">
                        <p class="py-3">We build our proposition for riders based on the things they tell us they value
                            most.

                            This understanding of what riders care about most has helped us to develop an offer that
                            prioritises the things they value: flexible work, good earnings and security. Booliveroo was
                            amongst the first food delivery platforms to provide free personal accident and third-party
                            liability insurance to all self-employed riders globally. This cover is provided free of charge
                            and protects riders from their very first order with Booliveroo.

                            Our founder and CEO, Will, was the very first rider and worked doing deliveries full time for
                            the first year of running the business. Along with team members right across Booliveroo, he
                            still
                            completes deliveries regularly today.</p>
                    </section>
                    <section id="technology">
                        <h2>Driven by technology</h2>
                        <img src="https://fooda-wordpress.s3.amazonaws.com/blog2/wp-content/uploads/2018/06/23180453/phone-lunch-1024x464.jpg"
                            class="img-fluid" alt="technology">
                        <p class="py-3">Booliveroo has built technology to enable us to simultaneously complete hundreds of
                            thousands of orders right across the globe – in a way that is intuitive and reliable for riders,
                            restaurants and grocers.

                            Our technology has opened up new opportunities for restaurant and grocery partners to grow their
                            businesses through delivery, often for the first time; for riders to access flexible work
                            opportunities; and to ultimately deliver a great experience for consumers.

                            Booliveroo's pioneering logistics technology is based on intelligent machine learning which
                            allows us to continually improve the nuances of delivering neighbourhood by neighbourhood.
                            Booliveroo deploys technology, such as our Frank algorithm, to find the best way of connecting
                            riders, restaurants, and customers to deliver a best-in-class logistics service. Frank is
                            continuously improving its knowledge-learning capabilities, such as how long it takes a
                            restaurant to prepare a meal to the time it takes to travel a certain route at different times
                            of the day, to make the service even more efficient.</p>
                    </section>
                    <section id="innovation">
                        <h2>Innovation, delivered</h2>
                        <img src="https://sialamerica.com/wp-content/uploads/2022/05/MicrosoftTeams-image-13-scaled.jpg"
                            class="img-fluid" alt="innovation">
                        <p class="py-3">Booliveroo is passionate about food and bringing people evermore choice.

                            But Booliveroo’s mission is not only to make sure that the restaurants and grocers in your area
                            are available to you when and where you want them - we want to go further and bring new
                            restaurants to your area so you have even more choice of amazing food.

                            Booliveroo’s delivery-only kitchens concept, ‘Editions’, is an innovation we pioneered that
                            helps
                            restaurants expand to new areas at lower cost and with lower risk. We help restaurants to set up
                            delivery-only kitchens in new areas without the upfront costs of a high-street premise.
                            Deliveroo provides restaurants with data insights so that they know which cuisines will be
                            popular in specific local areas - meaning restaurants grow faster and customers have wider
                            choice.

                            Booliveroo is also investing in expanding our on-demand grocery service, offering delivery from
                            national supermarkets as well as providing rapid delivery from our own network of delivery-only
                            sites, called Booliveroo ‘Hop’, which is being rolled out in several markets</p>
                    </section>
                    <section id="values">
                        <h2>Our values</h2>
                        <img src="https://i0.wp.com/www.creativityandchange.ie/wp-content/uploads/2018/01/Values.gif?fit=730%2C350&ssl=1&resize=940,650"
                            class="img-fluid" alt="values">
                        <p class="py-3">At Booliveroo, our values are at the core of everything we do. They guide how we
                            work
                            together and make decisions, whether it be recruitment or the evolution and development of our
                            people, teams and products</p>
                    </section>

                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-end">

            <div class="pt-5">
                <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary mt-2 ">TORNA ALLA HOME</router-link>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#about-us {
    // height: 100vh;
    background-image: linear-gradient($primary 10%, whitesmoke 15%, whitesmoke);

}

.navbar-aboutus {
    flex-basis: 34%;
}
