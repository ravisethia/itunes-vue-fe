import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueUiFramework from '../'
import '../dist/vue-ui.css'
import '../dist/font-awesome.min.css'
import '../dist/bootstrap.min.css'

Vue.use(VueUiFramework)

Vue.config.productionTip = false

Vue.prototype.log = (...args) => {
  console.log(...args)
}

new Vue({
  router,
  ...App,
}).$mount('#app')
