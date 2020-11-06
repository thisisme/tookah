import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

import { makeServer } from './server'

import '@/assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
