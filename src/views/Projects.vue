<script setup>
import data from './home'
import Projects from '../components/projects.vue'

</script>

<template>
  <!-- :: Breadcrumb Header -->
  <section class="breadcrumb-header" id="page" style="background-image: url(https://gulfelite.b-cdn.net/about2.png)">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="banner">
            <h1>Projects</h1>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><i class="fas fa-angle-right"></i></li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

 <projects :sectionHeader="data.landscapeProjectsSectionHeader"/>
</template>