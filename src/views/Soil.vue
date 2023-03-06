<script setup>
import Team from '../components/partials/member.vue'
import Service from '../components/partials/service.vue'
import Project from '../components/partials/project.vue'
import SliderItem from '../components/partials/slider.vue'
import data from './home'
import { ref, onMounted } from 'vue'

import mixitup from 'mixitup';
let mixer
const projectsCats = ref(null)
// function filterProjects(){
//     console.log("asnd")
//     mixer.filter('.building')
// }
onMounted(() => {
    mixer = mixitup(projectsCats.value, {
        selectors: {
            target: '.col-md-6'
        },
        animation: {
            duration: 300
        }
    })
    $('.projects-list .list-name-projects li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.sponsors-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 30,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            991: {
                items: 6
            }
        }
    })
    $('.services-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        // autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="ar-icons-left-chevron"></i>', '<i class="ar-icons-right-chevron"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 3
            },
            1399: {
                items: 3
            }
        }

    })

    $('.header .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        items: 3,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="ar-icons-left-chevron"></i>', '<i class="ar-icons-right-chevron"></i>'],
        dotsClass: ['container', 'owl-dots'],
        onInitialized: function () {
            setTimeout(function () {
                $('.owl-carousel').trigger('refresh.owl.carousel');
            }, 1000);
        },
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    })

    for (const animationElem of $('body .animate__animated')) {
        observer.observe(animationElem)
    }
})
const features = [
    
]
const sliderRefs = ref([])
const carousleRef = ref(null)
function handleSlideStart(data) {
    const active = sliderRefs.value[data.slidingToIndex]
    // active.addClass('banner')
    // console.log(sliderRefs.value.length)
}
const members = [
    { name: 'Hamada Ghaith', img: 'https://gulfelite.b-cdn.net/01_team-min.jpg', title: 'Founder, CEO' },
    { name: 'Abdulmajid Majdy', img: 'https://gulfelite.b-cdn.net/02_team-min.jpg', title: 'Head of AD Block Dept' },
    { name: 'Sameh Mostafa', img: 'https://gulfelite.b-cdn.net/03_team-min.jpg', title: 'Head of Landscape Development' },
]


const sliders = [
    {
        img: "https://gulfelite.b-cdn.net/slider/01_header-min.jpg",
        logo: "https://gulfelite.b-cdn.net/logos/GEL-Home.png",
        content: "Our landscape development service specializes in transforming dull, underutilized outdoor spaces into beautiful, functional areas for relaxation, recreation, and entertaining.",
        route: "landscapes",
        headline: "Maximizing the Potential of Your Outdoor Space.",
        topHeadline: "Landscape development",
        features: [
            '100% Satisfaction Guarantee',
            'Quality Control System',
        ]
    },
    {
        img: "https://gulfelite.b-cdn.net/slider/03_header-min.jpg",
        logo: "https://gulfelite.b-cdn.net/logos/GES-Home.png",
        content: "Our soil stabilization service is designed to improve the strength and stability of your soil, ensuring that it is able to support the construction of roads, buildings, and other structures",
        route: "soil",
        headline: "Ensuring the Longevity and Integrity of Your Soil.",
        topHeadline: "Soil stabilization",
        features: [
        ]
    },
    {
        img: "https://gulfelite.b-cdn.net/slider/02_header-min.jpg",
        logo: "https://gulfelite.b-cdn.net/logos/AD-Home.png",
        content: "Looking for a more affordable way to build? AD Blocks are durable, affordable, and easy to use. Contact us today to learn more about AD Blocks.",
        route: "adblock",
        headline: "Affordable, Durable, & Easy to Install",
        topHeadline: "AD Blocks",
        features: [
            'Water resistant',
            'Noise cancelling',
        ]
    },
]




const box1 = ref(null)
const box2 = ref(null)
const box3 = ref(null)

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`animate__${entry.target.getAttribute('animation')}`)
            entry.target.classList.remove('invisible')
        }
    })
})

</script>

<template>
    <!-- :: Header -->

    <section class="header" id="page">
        <div class="owl-carousel owl-theme" ref="carousleRef">
            <slider-item v-for="(slider, index) in sliders" :key="slider" :slider="slider" class="carousel__item" />
        </div>
    </section>


    <!-- :: About US -->
    <section class="about-us home-2 py-100" id="start">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="about-us-text-box">
                        <div class="sec-title home-2">
                            <h2 class="animate__animated invisible" animation="fadeInLeft">Welcome to Gulf Elite</h2>
                            <h3 class="animate__animated invisible animate__delay-1s" animation="fadeInLeft">Best technology
                                and awesome service we offer.</h3>
                            <p class="sec-explain animate__animated invisible animate__delay-2s" animation="fadeInLeft">Gulf
                                Elite Group is a premier company in the field of landscape development, soil stablilzation,
                                and the manufacturing of high-quality Gypsum blocks known as AD Blocks. Founded in 2003 by
                                engineer Hamada Ghaith</p>
                        </div>
                        <div class="features-style-2">
                            <div class="row">
                                <div class="col-sm-6  animate__animated invisible animate__delay-3s" animation="zoomIn">
                                    <div class="item">
                                        <i class="ar-icons-toolbox"></i>
                                        <div class="content-box">
                                            <h5>environment friendly</h5>
                                            <p>The company understands the importance of protecting the environment and
                                                works hard to minimize its impact on the natural world. This includes using
                                                eco-friendly materials, implementing recycling programs, and more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6  animate__animated invisible animate__delay-3s" animation="zoomIn">
                                    <div class="item">
                                        <i class="ar-icons-trolley"></i>
                                        <div class="content-box">
                                            <h5>10+ Years Experience</h5>
                                            <p>Gulf Elite has been in business for more than 10 years, and we're really good
                                                at making landscapes look great, stabilizing soil, and creating innovative
                                                building solutions with AD Block.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="about-quote  animate__animated invisible animate__delay-3s" animation="fadeInUp">Gulf
                            Elite is proud to offer a unique and innovative technology to give our customers the best
                            experience with our services.</p>
                        <div class="about-btn   animate__animated invisible animate__delay-4s" animation="fadeInBottomLeft">
                            <a href="02_about-us.html" class="btn-1 btn-3"><span>More About Us</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5  animate__animated invisible " animation="fadeInRight">
                    <div class="about-us-img-box">
                        <div class="img-box" style="background-image: url(https://gulfelite.b-cdn.net/about2.png)"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- :: Services -->
    <section class="services home-2">
        <div class="bg-section">
            <div class="overlay overlay-2"></div>
        </div>
        <div class="container">
            <div class="sec-title home-2">
                <div class="row">
                    <div class="col-lg-5  animate__animated invisible" animation="fadeInLeft">
                        <h2>Services we offer</h2>
                        <h3>High quality services of multiple Industries</h3>
                    </div>
                    <div class="col-lg-5 d-flex align-items-center  animate__animated invisible" animation="fadeInRight">
                        <p class="sec-explain">Gulf Elite offers services that can improve soil stability, make landscapes
                            look better, and provide innovative building solutions. We work closely with our clients to
                            provide high-quality service that is tailored to their specific needs.</p>
                    </div>
                </div>
            </div>
            <div class="services-carousel owl-carousel owl-theme">
                <Service v-for="(service, index)  in data.services" :service="service" :key="index" />
            </div>
        </div>
    </section>




    <section class="team py-100-70">
        <div class="container">
            <div class="sec-title">
                <div class="row">
                    <div class="col-lg-5 animate__animated invisible" animation="fadeInLeft">
                        <h2>Expert Members</h2>
                        <h3>Meet our experts</h3>
                    </div>
                    <div class="col-lg-5 d-flex align-items-center animate__animated invisible" animation="fadeInRight">
                        <p class="sec-explain">Our team at Gulf Elite is the backbone of our company. With their expertise
                            and dedication, we are able to provide high quality solutions and services to our clients.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <Team v-for="(member, index) in members" :key="index" :member="member" class=" animate__animated invisible"
                    animation="zoomIn" />
            </div>
        </div>
    </section>

    <section class="projects home-2 py-100-70">
        <div class="container">
            <div class="sec-title home-3">
                <div class="row">
                    <div class="col-lg-5">
                        <h2>We work with global Industries!</h2>
                        <h3>our successful projects </h3>
                    </div>
                    <div class="col-lg-5 d-flex align-items-center">
                        <p class="sec-explain">Discover some of our projects and see the Gulf Elite difference. Browse
                            through our portfolio to see the quality of our work </p>
                    </div>
                </div>
            </div>
            <div class="projects-list text-center">
                <ul class="list-name-projects">
                    <li data-filter="all" class="active mixitup-control-active">All</li>
                    <li data-filter=".National" class="">National projects</li>
                    <li data-filter=".Landscapes" class="">Landscape projects</li>
                    <li data-filter=".Retouching" class="">Retouching</li>
                </ul>
            </div>
            <div class="row all-projects" ref="projectsCats" style="">
                <project v-for="(project , index) in data.projects" :key="index" :project="project"/> 
               
            </div>
        </div>
    </section>

    <!-- :: Provide -->
    <section class="provide">
        <div class="bg-section">
            <div class="overlay overlay-3"></div>
        </div>
        <div class="container">
            <div class="sec-title">
                <div class="row">
                    <div class="col-lg-5 animate__animated invisible" animation="fadeInLeft">
                        <h3>Gulf Elite Group Provides The Best Service For Sustainable Progress</h3>
                    </div>
                    <div class="col-lg-5 d-flex align-items-center animate__animated invisible" animation="fadeInRight">
                        <p class="sec-explain">Gulf Elite: A landscape development company that expertly handles soil
                            stablilzation and offers AD Block gypsum blocks for sustainable building solutions. Transforming
                            outdoor spaces.</p>
                    </div>
                </div>
            </div>
            <div class="provide-core-list">
                <div class="row">
                    <div class="col-md-6 col-lg-3 animate__animated invisible" animation="zoomIn"
                        v-for="(feature, index) in data.features" :key="index">
                        <div class="provide-core-list-item">
                            <i class="ar-icons-idea"></i>
                            <h4>{{ feature.title }}</h4>
                            <p>{{ feature.content }} </p>
                        </div>
                    </div>

                </div>
            </div>

            <!-- :: Qoute Box -->
            <div class="quote-box">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sec-title">
                            <h3>Get Every Updates!</h3>
                            <p class="sec-explain">We are always ready to assist you in any way possible. If you have any
                                questions, comments, or concerns, please do not hesitate to contact us. Our team is
                                dedicated to providing the best possible service to you</p>
                        </div>
                        <div class="contact-info">
                            <h4>this is how you can find us</h4>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="contact-box">
                                        <i class="ar-icons-call"></i>
                                        <div class="box">
                                            <a class="phone" href="tel:0201212843661">053 952 1904</a>
                                            <a class="phone" href="tel:0201029134630">053 132 2499</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="contact-box">
                                        <i class="ar-icons-email"></i>
                                        <div class="box">
                                            <a class="mail" href="mailto:info@gulfelite.sa">info@gulfelite.sa</a>
                                            <a class="mail" href="mailto:Support@gulfelite.sa">Support@gulfelite.sa</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="contact-box last">
                                        <i class="ar-icons-location"></i>
                                        <div class="box">
                                            <p>GEC Plant, 4844 Hassan Ibn Thabet</p>
                                            <p>Alriyadh 14236.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- :: Sponsors -->
    <div class="sponsors">
        <div class="container">
            <div class="sponsors-carousel owl-carousel owl-theme">
                <div class="sponsors-box-item" v-for="i in 7">
                    <img class="img-fluid" :src="`https://gulfelite.b-cdn.net/logos/0${i + 1}.png`"
                        alt="gulf elite partner">
                </div>

            </div>
        </div>
    </div>



   </template>