<script>

export default {
    name: "Careers",
    data() {
        return {
            currentIndex: 0,
            roleLinks: [
                {
                    link: 'All department',
                    isClicked: true,
                    role: [
                        { id: 1, name: 'CRM Assistant', location: 'Roma', job: 'CRM Team' },
                        { id: 2, name: 'Local Growth Marketing Manager', location: 'Roma', job: 'Local Marketing Team' },
                        { id: 3, name: 'Content Specialist, Customer Care', location: 'Roma', job: 'Policy and Automation Team' },
                        { id: 4, name: 'Workforce Planning Manager', location: 'Roma', job: 'Ctrl Workforce Management Team' },
                        { id: 5, name: 'Warehouse Supervisor', location: 'Roma', job: 'Dark Stores Site Operations Team' },
                        { id: 6, name: 'Marketing & Merchandising Operations', location: 'Roma', job: 'Dark Stores HQ Team' },
                        { id: 7, name: 'Global Operations Manager', location: 'Roma', job: 'Ctrl Rider Onboarding Team' },
                        { id: 8, name: 'Senior operations Strategy Associate', location: 'Roma', job: 'Local Operations Strategy Team' },
                    ]
                },
                {
                    link: 'Consumer',
                    isClicked: false,
                    role: [
                        { id: 1, name: 'CRM Assistant', location: 'Roma', job: 'CRM Team' },
                        { id: 2, name: 'Local Growth Marketing Manager', location: 'Roma', job: 'Local Marketing Team' },
                    ]
                },
                {
                    link: 'Customer Care',
                    isClicked: false,
                    role: [
                        { id: 1, name: 'Content Specialist, Customer Care', location: 'Roma', job: 'Policy and Automation Team' },
                        { id: 2, name: 'Workforce Planning Manager', location: 'Roma', job: 'Ctrl Workforce Management Team' },
                    ]
                },
                {
                    link: 'Dark store',
                    isClicked: false,
                    role: [
                        { id: 1, name: 'Warehouse Supervisor', location: 'Roma', job: 'Dark Stores Site Operations Team' },
                        { id: 2, name: 'Marketing & Merchandising Operations', location: 'Roma', job: 'Dark Stores HQ Team' },
                    ]
                },
                {
                    link: 'Delivery Operations',
                    isClicked: false,
                    role: [
                        { id: 1, name: 'Global Operations Manager', location: 'Roma', job: 'Ctrl Rider Onboarding Team' },
                        { id: 2, name: 'Senior operations Strategy Associate', location: 'Roma', job: 'Local Operations Strategy Team' },
                    ]
                },
            ],
        }
    },
    methods: {
        showSpecificRole(i) {
            this.currentIndex = i;
            this.roleLinks[this.currentIndex].isClicked = true;
            this.roleLinks.forEach(element => {
                if (element.isClicked === true) {
                    element.isClicked = false;
                    this.roleLinks[this.currentIndex].isClicked = true;
                }
            });

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
            <div class="row mb-5">
                <h1 class="text-center fw-bold my-5">Our values</h1>
                <div class="col-12 col-sm-6 col-lg-3 mt-4">
                    <div class="card h-card">
                        <img src="https://wp.salesforce.com/blog/wp-content/uploads/sites/2/2019/06/customer-focus-header.jpg"
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
                        <img src="https://www.imsa-search.com/wp-content/uploads/2020/10/culture-pf-trust.jpg"
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
                        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/570901-gettyimages-655478994-e9c1dc00920195f65bade67c9ce7c2ff.jpg"
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
                        <img src="data:image/jpeg;base64,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"
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
                        <img src="https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-team-work-cartoon-illustration-image_1427069.jpg"
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
                        <img src="https://previews.123rf.com/images/rawpixel/rawpixel1604/rawpixel160408007/54706665-business-plan-strategy-vision-objective-planning-concept.jpg"
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
                        <img src="https://saasbpm.com/wp-content/uploads/2021/07/How-to-Design-an-Onboarding-Process-That-Improve-Business-Results-1130x662.png"
                            class="card-img-top" alt="results">
                        <div class="card-body">
                            <h3 class="card-title">We deliver results</h3>
                            <p class="card-text">We take ownership for the tasks at hand and deliver high quality. We’re
                                accountable and follow through.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section id="roles">
        <div class="container">
            <h1 class="text-center fw-bold available-roles">Available roles</h1>
            <nav class="navbar bg-body-tertiary mt-5">
                <div class="container-fluid">
                    <button v-for="(link, i) in roleLinks" :key="link.link" @click="showSpecificRole(i)"
                        class="btn-role fw-semibold navbar-brand border-0 rounded-2 my-2">{{ link.link
                        }}</button>
                </div>
            </nav>
            <section v-for="link in roleLinks" :key="link.link">
                <div v-if="link.isClicked" class="row">
                    <div v-for="role in link.role" :key="role.id" class="col-sm-6 col-12">
                        <!-- <div>{{ role.name }}</div> -->
                        <div class="card my-3 card-role">
                            <div class="card-body">
                                <h5 class="card-title">{{ role.name }}</h5>
                                <div class="card-text">
                                    <p class="fs-4 location"><i class="fs-5">city: </i>{{ role.location }}</p>
                                    <p class="fs-4 job"><i class="fs-5">role: </i>{{ role.job }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    background-color: $background-color;
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
    min-height: 390px;

    img {
        height: 180px;
    }
}

.available-roles {
    margin: 6rem auto 3rem;
}

.btn-role {
    background-color: $background-color;
    color: $primary;
}

.card-role {
    min-height: 230px;
    background-color: $background-color;

    .location,
    .job {
        color: $primary;

        i {
            color: black;
        }
    }
}
</style>