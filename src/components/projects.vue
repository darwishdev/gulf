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
onMounted(() => {
    mixer = mixitup(projectsCats.value, {
        selectors: {
            target: '.project-partial'
        },
        animation: {
            duration: 300
        }
    })
})
</script>


<template>
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
                    <li  v-for="(cat , index) in data.projectsCategories" :key="index"  :data-filter="cat.class" class="mixitup-control-active" :class="{'active' : (activeCat == cat.class)}" @click=" $e => activeCat = cat.class">{{ cat.name }}</li>
                </ul>
            </div>
            <div class="row all-projects" ref="projectsCats" style="">
                <project v-for="(project , index) in data.projects" :key="index" :project="project"/> 
               
            </div>
        </div>
    </section>
</template>