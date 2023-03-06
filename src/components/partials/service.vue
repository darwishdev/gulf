<script setup>
const props = defineProps({
    service: Object
})
</script>


<template>
    <div class="services-carousel-item item-1 " >
        <a href="02_services.html" class="services-item-img-box"
        :style="{ 'background-image': `url(${service.img})` }"><span></span></a>
        <div class="item-box">
            <!-- <i class="ar-icons-tank"></i> -->
            <div class="content-box">
                <h4>{{ service.name }}</h4>
                <p>{{ service.breif }}</p>
                <router-link v-if="$route.path == '/'" class="more" :to="service.slug">Read More</router-link>
            </div>
        </div>
    </div>
</template>
