
import SideBar from './components/SidebarPlugin'

import './assets/scss/material-dashboard.scss'

// library auto imports
import 'es6-promise/auto'


export default {
  install(Vue) {
    Vue.use(SideBar)
  }
}
