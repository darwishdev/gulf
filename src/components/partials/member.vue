<script setup>
const props = defineProps({
  member: Object
})
</script>


<template>
    <div class="col-md-6 col-lg-4">
        <div class="team-box">
            <div class="img-box">
                <img class="img-fluid" :src="props.member.img" alt="gulf elite team member">

            </div>
            <div class="text-box text-left">
                <h5><a href="01_team.html">{{props.member.name}}</a></h5>
                <span>{{props.member.title}}</span>
                <p class=" mt-4">{{ props.member.breif }}</p>
            </div>
        </div>
    </div>
</template>