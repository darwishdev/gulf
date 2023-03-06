<script setup>
const props = defineProps({
    service: Object
})
</script>


<template>
    <div class="services-carousel-item item-1   animate__animated invisible animate__delay-1s" animation="zoomIn" >
        <a href="02_services.html" class="services-item-img-box"
        :style="{ 'background-image': `url(${service.img})` }"><span></span></a>
        <div class="item-box">
            <i class="ar-icons-tank"></i>
            <div class="content-box">
                <h4>{{ service.name }}</h4>
                <p>{{ service.breif }}</p>
                <a class="more" href="02_services.html">Read More</a>
            </div>
        </div>
    </div>
</template>
