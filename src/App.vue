

<script setup>

import { ref } from 'vue'

const activeNav = ref(false)

function toggleNav(){
  activeNav.value = !activeNav.value
}

const navLinks = [
  {
    name : "Home",
    to : "/",
  },
  {
    name : "About Us",
    to : "/about",
  },
  {
    name : "Landscape development",
    to : "/landscapes",
  },

  {
    name : "Soil Stabilization",
    to : "/soil",
  },
  {
    name : "Ad Block",
    to : "/adblock",
  },
  {
    name : "Projects",
    to : "/projects",
  },
  {
    name : "Contact",
    to : "/contact",
  },
]

</script>
<template>
  <div class="loading">
    <div class="loading-box">
      <img class="img-fluid one" src="./assets/images/logo/load.webp" alt="01 Logo">
    </div>
  </div>

  <!-- :: All Navbar -->
  <header class="all-navbar fixed-top">
    <!-- :: Navbar -->
    <nav class="nav-bar">
      <div class="container">
        <div class="content-box d-flex align-items-center justify-content-between">
          <div class="logo">
            <a href="index.html" class="logo-nav">
              <img class="img-fluid one" src="https://gulfelite.b-cdn.net/logos/01_logo.png" alt="01 Logo">
              <img class="img-fluid two" src="https://gulfelite.b-cdn.net/logos/02_logo.png" alt="02 Logo">
            </a>
            <a href="#open-nav-bar-menu" @click.prevent="toggleNav" class="open-nav-bar">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div class="nav-bar-links "  :class="{  'active' : activeNav}" id="open-nav-bar-menu">
            <ul class="level-1">
              <li class="item-level-1" v-for="(link , index) in navLinks" :key="inde">
                <router-link :to="link.to" class="link-level-1 " :class="{'color-active' : ($route.to == link.to)}">{{link.name}}</router-link>
              </li>
            </ul>
          </div>
          <ul class="nav-bar-tools d-flex align-items-center justify-content-between">
           
            <li class="item phone">
              <div class="nav-bar-contact">
                <i class="ar-icons-phone"></i>
                <div class="content-box">
                  <span>Call us </span>
                  <a href="tel:+0539521904">053 952 1904</a>
                </div>
              </div>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  </header>



  <main>
    <router-view />
  </main>
  <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="logo">
                            <img class="img-fluid" src="https://gulfelite.b-cdn.net/logos/01_logo.png" alt="Gulf elite logo">
                            <p>Gulf Elite is a full-service landscape firm that offers soil stablilzation, as well as AD Block gypsum blocks for building and landscaping. With a focus on quality and sustainability, Gulf Elite helps bring outdoor visions to life.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="footer-title">
                            <h4>Quick Link</h4>
                        </div>
                        <ul class="links">
                            <li><router-link to="/about">About Us</router-link></li>
                            <li><router-link to="/projects">Projects</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                            
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="footer-title">
                            <h4>Industries</h4>
                        </div>
                        <ul class="links">
                            <li><router-link to="/Landscapes">Landscape Development</router-link></li>
                            <li><router-link to="/Soil">Soil Stablilzation</router-link></li>
                            <li><router-link to="/ADblock">AD Block</router-link></li>
                
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    <p>@ 202 Gulf Elite Chemicals. With Love developed by <a href="https://melonlabs.ga" target="_blank">Melon studios</a></p>
           
                </div>
            </div>
        </footer>
        
</template>


