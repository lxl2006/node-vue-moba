import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import router from './router'

// vue-awesome-swiper
import VueAwesomeSwiper from  'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
