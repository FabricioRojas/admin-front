import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MaterialKit from './plugins/material-kit'
import MaterialDashboard from './material-dashboard'

Vue.config.productionTip = false

Vue.use(MaterialKit)
Vue.use(MaterialDashboard)

const NavbarStore = {
  showNavbar: false
}

Vue.mixin({
  data () {
    return {
      NavbarStore
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
