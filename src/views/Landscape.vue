<script setup>
import Service from '../components/partials/service.vue'
import SliderItem from '../components/partials/pageSlider.vue'
import data from './home'
import { ref, onMounted } from 'vue'
import Projects from '../components/projects.vue'
import About from '../components/about.vue'

import {useAnimation} from '../composables/useAnimation.js'
import mixitup from 'mixitup';

useAnimation()
let mixer
const projectsCats = ref(null)

onMounted(() => {
    
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
})


</script>

<template>
    <!-- :: Header -->

   <!-- :: Breadcrumb Header -->
   <section class="breadcrumb-header" id="page" style="background-image: url(https://gulfelite.b-cdn.net/slider/01_header-min.jpg)">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="banner">
                            <h1>Landscape development</h1>
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><i class="fas fa-angle-right"></i></li>
                                <li>Landscape development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <!-- :: About US -->
    <about :content="data.landscapeAboutSection" />
    


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
                        <h3>Our High quality services</h3>
                    </div>
                    <div class="col-lg-5 d-flex align-items-center  animate__animated invisible" animation="fadeInRight">
                        <p class="sec-explain">we specialize in creating stunning outdoor landscapes that enhance the beauty and functionality of your property. Our expert team can help transform your backyard or commercial space into an inviting oasis that you'll love spending time in</p>
                    </div>
                </div>
            </div>
            <div class="services-carousel owl-carousel owl-theme">
                <Service v-for="(service, index)  in data.landScapeServices" :service="service" :key="index" />
            </div>
        </div>
    </section>
    





    <Projects cat="Landscapes" :sectionHeader="data.landscapeProjectsSectionHeader"/>



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