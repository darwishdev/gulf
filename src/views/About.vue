<script setup>
import Team from '../components/partials/member.vue'
import SliderItem from '../components/partials/slider.vue'
import data from './home'
import { ref, onMounted } from 'vue'
import About from '../components/about.vue'

import {useAnimation} from '../composables/useAnimation.js'
useAnimation()


</script>

<template>
   
        <!-- :: Breadcrumb Header -->
        <section class="breadcrumb-header" id="page" style="background-image: url(https://gulfelite.b-cdn.net/slider/lo9.jpeg)">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="banner">
                            <h1>About US</h1>
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><i class="fas fa-angle-right"></i></li>
                                <li>About US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		
        <about :content="data.aboutSection" />


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
                <Team v-for="(member, index) in data.members" :key="index" :member="member" class=" animate__animated invisible"
                    animation="zoomIn" />
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
                            <!-- <i class="ar-icons-idea"></i> -->
                            <h4>{{ feature.title }}</h4>
                            <p v-html="feature.content"></p>
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
                                            <a class="mail" href="mailto:polymer@gulfelite.sa">polymer@gulfelite.sa</a>
                                            <a class="mail" href="mailto:landscape@gulfelite.sa">landscape@gulfelite.sa</a>
                                            
                                            
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