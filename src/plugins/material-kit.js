import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'

import '@/assets/scss/material-kit.scss'
import '@/assets/css/demo.css'

export default {
  install (Vue) {
    Vue.use(VueMaterial)
  }
}
