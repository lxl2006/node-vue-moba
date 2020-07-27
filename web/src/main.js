import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/font/iconfont.css'
import './assets/scss/style.scss'
import router from './router'

// vue-awesome-swiper
import VueAwesomeSwiper from  'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'
import 'swiper/dist/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// my components Card
import Card from './components/Card.vue'
Vue.component('m-card', Card)
// my components ListCard
import ListCard from './components/ListCard.vue';
Vue.component('m-list-card', ListCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
