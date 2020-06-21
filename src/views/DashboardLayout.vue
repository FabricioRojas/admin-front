<template>
  <div class="wrapper nav-open">
  <!-- <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }"> -->
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard/test">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'
// import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
// import MobileMenu from '@/pages/Layout/MobileMenu.vue'
// import FixedPlugin from './Extra/FixedPlugin.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent
    // ContentFooter,
    // MobileMenu,
    // FixedPlugin
  },
  data () {
    return {
      sidebarBackground: 'green',
      sidebarBackgroundImage: 'black'
    }
  }
}
</script>
