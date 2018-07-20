import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import store from './vuex/index'

Vue.use(VueMoment);

import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
