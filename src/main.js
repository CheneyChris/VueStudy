import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, /*{ default global options }*/);
// axios.defaults.baseURL = 'https://www.boomore.cn';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
	render: h => h(App),
}).$mount('#app');
