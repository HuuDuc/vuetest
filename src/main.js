import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import store from './vuex/index'
import wysiwyg from "vue-wysiwyg"

import './assets/css/style.css'

Vue.use(VueMoment);

Vue.use(wysiwyg, {
  // { [module]: boolean (set true to hide) }
  hideModules: { "bold": true },
  iconOverrides: { "bold": "<i class=\"your-custom-icon\"></i>" },
  image: {
    uploadURL: "/api/myEndpoint",
    dropzoneOptions: {}
  },
  maxHeight: "500px"
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
