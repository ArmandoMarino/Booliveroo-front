<script>

export default {
    name: "Careers",
    data() {
        return {
            // isClicked: false,
            roleLinks: [
                { link: 'All department', isClicked: false },
                { link: 'Consumer', isClicked: false },
                { link: 'Customer Care', isClicked: false },
                { link: 'Dark store', isClicked: false },
                { link: 'Delivery Operations', isClicked: false },
            ],
        }
    },
    methods: {
        showSpecificRole(i) {
            if (this.roleLinks[i].isClicked) {
                this.roleLinks[i].isClicked = false;
            } else {
                this.roleLinks.isClicked = true;
            }
        }
    }

}
</script>


<template>
    <div id="jumbotron">
        <div class="d-flex justify-content-end">
            <div class="jumbo-claim text-white me-5 pt-3">
                <h1 class="fw-bold">Ready for a new challenge?</h1>
                <p class="fs-3">Find a fulfilling career at Booliveroo</p>
            </div>
        </div>
    </div>
    <section id="experience">
        <div class="container">
            <div class="py-5">
                <h1 class="text-center fw-bold pb-3">A taste of life at Booliveroo</h1>
                <p class="fs-4">We're building the definitive online food company, transforming the way the world eats by
                    making
                    food more convenient and accessible. It's a big task, but it creates the perfect environment to build a
                    definitive career, driven by impact.</p>
            </div>
            <div class="row">
                <div class="col-md-4 col-12 p-4 mt-3">
                    <div class="small-col rounded-3">
                        <div class="img-wrapper">
                            <img src="https://economia24news.com/wp-content/uploads/2020/05/come-lavorare-per-deliveroo.jpg"
                                alt="grow">
                        </div>
                        <div class="text-center text-card">
                            <h3>Grow faster</h3>
                            <p>Gain experience at pace, working with talented people to build an exciting brand in a
                                complex,
                                competitive space.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 p-4 mt-3">
                    <div class="small-col rounded-3">
                        <div class="img-wrapper">
                            <img src="data:image/jpeg;base64,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"
                                alt="grow">
                        </div>
                        <div class="text-center text-card">
                            <h3>Leave your mark</h3>
                            <p>Enjoy the space and opportunity to do career-defining work on problems that have never been
                                solved before.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 p-4 mt-3">
                    <div class="small-col rounded-3">
                        <div class="img-wrapper">
                            <img src="http://www.sito.liceipoliziani.com/wp-content/uploads/2018/10/conferenza.jpg"
                                alt="grow">
                        </div>
                        <div class="text-center text-card">
                            <h3>Be part of something bigger</h3>
                            <p>Pioneer an industry while positively contributing to the world around you, through food and
                                beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="values">
        <div class="container">
            <div class="row">
                <h1 class="text-center fw-bold my-5">Our values</h1>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="customer">
                        <div class="card-body">
                            <h3 class="card-title">We are customer obsessed</h3>
                            <p class="card-text">Our customers are at the heart of everything we do – no two are alike. We
                                walk in their shoes to drive decisions.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="trust">
                        <div class="card-body">
                            <h3 class="card-title">We build trust</h3>
                            <p class="card-text">We actively listen, we’re straightforward, and we treat our teams and
                                colleagues with respect.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="think big">
                        <div class="card-body">
                            <h3 class="card-title">We think big</h3>
                            <p class="card-text">We imagine what’s seemingly impossible, not what’s been done before. We’re
                                changing the way people eat and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="difference">
                        <div class="card-body">
                            <h3 class="card-title">We celebrate difference</h3>
                            <p class="card-text">Diverse perspectives drive better outcomes for both Deliveroo and our
                                customers. We value all contributions.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="solutions">
                        <div class="card-body">
                            <h3 class="card-title">We get to the bottom of things</h3>
                            <p class="card-text">We get to the root cause of an issue as quickly as we can using intuition
                                and data to develop our solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="team">
                        <div class="card-body">
                            <h3 class="card-title">We work as a team</h3>
                            <p class="card-text">We demonstrate respect and practice empathy to drive our people and our
                                teams closer together.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="obstacles">
                        <div class="card-body">
                            <h3 class="card-title">We're relentless</h3>
                            <p class="card-text">There will be lots of unfamiliar obstacles. We either knock them down or
                                figure out a way to get around them.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="results">
                        <div class="card-body">
                            <h3 class="card-title">We deliver results</h3>
                            <p class="card-text">We take ownership for the tasks at hand and deliver high quality. We’re
                                accountable and follow through.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="simplify">
                        <div class="card-body">
                            <h3 class="card-title">We simplify</h3>
                            <p class="card-text">We simplify our explanations, processes, and approach. We frame issues for
                                those who don’t have context.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="embrace">
                        <div class="card-body">
                            <h3 class="card-title">We embrace change</h3>
                            <p class="card-text">We plan for the long term and short term, and adapt where needed. The road
                                is full of twists and turns.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="frugal">
                        <div class="card-body">
                            <h3 class="card-title">We're frugal</h3>
                            <p class="card-text">We spend wisely. We prioritise carefully and spend the company’s resources,
                                time and money efficiently.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://images.ctfassets.net/gg4ddi543f5b/25bBkGrwyh2plLSk2caNgu/d0657bc7f169ea0b25e09afa8596260c/9-Ways-to-Build-Trust-in-a-Team-3.jpeg"
                            class="card-img-top" alt="no my job">
                        <div class="card-body">
                            <h3 class="card-title">We never say "it's not my job"</h3>
                            <p class="card-text">We’re shopkeepers. We have ownership over our own things, but we do what we
                                can to run the best shop in town.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>
    <section id="roles">
        <div class="container">
            <h1 class="text-center fw-bold my-5">Available roles</h1>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid"> <button class="navbar-brand border-0 rounded-2">Delivery Operations</button>
                    -->
                    <button v-for="(link, i) in roleLinks" :key="link.link" @click="showSpecificRole(i)"
                        class="navbar-brand border-0 rounded-2">{{ link.link
                        }}</button>

                </div>
            </nav>
            <section id="all-roles">
                <h1>all roles</h1>
            </section>
            <section id="consumer-role">
                <h1>Consumer</h1>
            </section>
            <section id="customer-role">
                <h1>Customer</h1>
            </section>
            <section id="darkstore-role">
                <h1>Dark stores</h1>
            </section>
            <section id="delivery-role">
                <h1>Delivery operations</h1>
            </section>
        </div>
    </section>
</template>

<style coped lang="scss">
@use '../assets/scss/partials/variables' as *;

#jumbotron {
    height: 500px;
    background-image: url('https://www.italiaatavola.net/images/contenutiarticoli/sushi-milano-maiora.jpg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
}

.small-col {
    min-height: 250px;
    position: relative;
    background-color: #ebebeb;
    padding: 1rem;

}

.img-wrapper {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        max-width: 100%;
        height: 100%;
        border-radius: 50%;

    }
}

.text-card {
    padding-top: 4rem;
}

.h-card {
    min-height: 380px;
}
</style>