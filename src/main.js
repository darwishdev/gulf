import { createApp } from 'vue'
import 'animate.css';
import './assets/css/bootstrap.min.css'
import './assets/css/ion.rangeSlider.min.css'
import './assets/css/lity.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/nice-select.css'
import './assets/fonts/fontawesome/css/all.min.css'
import './assets/fonts/flaticon/style.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import 'vue3-carousel/dist/carousel.css'
import 'owl.carousel/dist/assets/owl.carousel.css';



import './assets/js/jquery-3.6.0.min.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/lity.min.js'
import './assets/js/jquery.nice-select.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/jquery.counterup.min.js'
import './assets/js/jquery.magnific-popup.min.js'
// import './assets/js/owl.carousel.min.js'
import './assets/js/mixitup.min.js'
import 'owl.carousel';
import './assets/js/main.js'

import scrollTopOnRouteChange from './scrollTopOnRouteChange.js'











import App from './App.vue'
import router from './router'

createApp(App).use(router).use(scrollTopOnRouteChange).mount('#app')
