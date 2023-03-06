<script setup>
const props = defineProps({
  slider: Object
})
</script>


<template>
      <div class="carousel__item">
                <div class="sec-hero display-table" :style="{ 'background-image': `url(${slider.img})` }">
                    <div class="table-cell">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="banner text-left" ref="sliderRefs">
                                        <div class="banner-wrapper">
                                            <div class="banner-logo animate__animated invisible  " animation="lightSpeedInLeft"><img
                                                    class="img-fluid one" :src="slider.logo" :alt="slider.topHeadline"></div>
                                            <div
                                                class="columns animate__animated invisible  animate__delay-1s" animation="lightSpeedInRight">
                                                <div class="top-handline">{{ slider.topHeadline }}</div>
                                                <h1 class="handline">{{ slider.headline }}</h1>
                                                <p class="about-website">{{ slider.content }}</p>
                                                <ul class="header-list-features">
                                                    <li class="item" v-for="(feature, index) in slider.features"
                                                        :key="index">
                                                        <i class="fas fa-check"></i>
                                                        <h5>{{ feature }}</h5>
                                                    </li>
                                                </ul>
                                                <div
                                                    class="btn-box animate__animated invisible  animate__delay-3s" animation="bounceInRight">
                                                    <router-link class="btn-1 btn-2" :to="slider.route">explore</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</template>