<script setup>
const props = defineProps({
  project: Object
})
</script>


<template>
    <div class="col-md-6 project-partial col-lg-4 mix  "  :class="project.cat" style="">
                    <div class="projects-item">
                        <span style="top: -24.1px; left: 139px;"></span>
                        <div class="img-box">
                            <img class="img-fluid projects-item-img" :src="project.img"
                                alt="01 projects">
                        </div>
                        <div class="hover-box">
                            <div class="text-box">
                                <div class="tags"><a href="03_projects.html">{{ project.name }} </a><a
                                        href="03_projects.html">{{ project.cat }}</a></div>
                                <h4><a href="03_projects.html">{{ project.desc }}</a></h4>
                            </div>
                           
                        </div>
                    </div>
                </div>
</template>