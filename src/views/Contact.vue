<script setup>
import Team from '../components/partials/member.vue'
import SliderItem from '../components/partials/slider.vue'
import data from './home'
import { ref, onMounted } from 'vue'

import { useAnimation } from '../composables/useAnimation.js'
useAnimation()


</script>

<template>
  <!-- :: Breadcrumb Header -->
  <section class="breadcrumb-header" id="page" style="background-image: url(https://gulfelite.b-cdn.net/about2.png)">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="banner">
            <h1>Contact US</h1>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><i class="fas fa-angle-right"></i></li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- :: contact us -->
  <div class="contact-us py-100">
    <div class="container">
      <div class="contact-info-content">
        <div class="row">
          <div class="col-md-6 col-lg-4 animate__animated invisible" animation="fadeInUp">
            <div class="contact-box">
              <i class="ar-icons-call"></i>
              <div class="box">
                <a class="phone" href="tel:0539521904">053 952 1904</a>
                <a class="phone" href="tel:0531322499">053 132 2499</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 animate__animated invisible" animation="fadeInUp">
            <div class="contact-box">
              <i class="ar-icons-email"></i>
              <div class="box">
                <a class="mail" href="mailto:support@gulfelite.sa">Support@gulfelite.sa</a>
                <a class="mail" href="mailto:info@gulfelite.sa">info@gulfelite.sa</a>
                <a class="mail" href="mailto:polymer@gulfelite.sa">polymer@gulfelite.sa</a>
                <a class="mail" href="mailto:landscape@gulfelite.sa">landscape@gulfelite.sa</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 animate__animated invisible" animation="fadeInUp">
            <div class="contact-box">
              <i class="ar-icons-location"></i>
              <div class="box">
                <p>GEC Plant, 4844 Hassan Ibn Thabet</p>
                <p>Alriyadh 14236.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <!-- :: Map -->
          <div class="map-box animate__animated invisible" animation="fadeInUp">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9334894410254!2d46.83401851536145!3d24.72916355659677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2faa1ceabcc959%3A0x73a762607a50affb!2s4844%20Hassan%20Ibn%20Thabet%2C%20An%20Nasim%20Al%20Gharbi%2C%20Riyadh%2014234%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1676386274454!5m2!1sen!2seg"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>