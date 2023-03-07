<script setup>
import data from '../views/home'
import mixitup from 'mixitup';
import { ref, onMounted } from 'vue'
import Project from './partials/project.vue'
const projectsCats = ref(null)
const activeCat = ref('all')
function filter(e){
    // activeCat.value = e.
    console.log(e)
}
let mixer


const props = defineProps({
  content: Object
})

</script>


<template>
   <!-- :: About US -->
   <section class="about-us home-2 py-100" id="start">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="about-us-text-box">
                        <div class="sec-title home-2">
                            <h2 class="animate__animated invisible" animation="fadeInLeft">{{ content.headline }}</h2>
                            <h3 class="animate__animated invisible" animation="fadeInLeft">{{ content.title }}</h3>
                            <p class="sec-explain animate__animated invisible animate__delay-1s" animation="fadeInLeft">{{ content.breif }}</p>
                        </div>
                        <div class="features-style-2">
                            <div class="row">
                                <div class="col-sm-6  animate__animated invisible animate__delay-2s" animation="zoomIn" v-for="(feature , index) in content.features">
                                    <div class="item">
                                        <img :src="feature.icon" style="width:50px"/>
                                        <div class="content-box">
                                            <h5>{{feature.title}}</h5>
                                            <p v-html="feature.content"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="about-quote  animate__animated invisible animate__delay-1s" animation="fadeInUp">{{ content.summary }}</p>
                        <div class="about-btn   animate__animated invisible animate__delay-1s" animation="fadeInBottomLeft">
                            <router-link to="/" class="btn-1 btn-3" v-if="content.hasAboutButton"><span>More About Us</span></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5  animate__animated invisible " animation="fadeInRight">
                    <div class="about-us-img-box">
                        <div class="img-box" :style="{ 'background-image': `url(${content.img})` }"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>