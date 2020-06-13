<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Task Manager</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <router-link to="/">
                <md-list-item href="javascript:void(0)">
                  <i class="material-icons">home</i>
                  <p>Home</p>
                </md-list-item>
              </router-link>

              <router-link to="/dashboard">
                <md-list-item href="javascript:void(0)">
                  <i class="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </md-list-item>
              </router-link>

              <router-link to="/kanban">
                <md-list-item href="javascript:void(0)">
                  <i class="material-icons">view_column</i>
                  <p>Kanban view</p>
                </md-list-item>
              </router-link>

              <router-link to="/login">
                <md-list-item href="javascript:void(0)">
                  <i class="material-icons">fingerprint</i>
                  <p>Login</p>
                </md-list-item>
              </router-link>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import MobileMenu from '@/layout/MobileMenu'

let resizeTimeout
function resizeThrottler (actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
    }, 66)
  }
}

export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator (value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      extraNavClasses: '',
      toggledClass: false
    }
  },
  computed: {
    showDownload () {
      const excludedRoutes = ['login', 'landing', 'profile']
      return excludedRoutes.every(r => r !== this.$route.name)
    }
  },
  methods: {
    bodyClick () {
      let bodyClick = document.getElementById('bodyClick')

      if (bodyClick === null) {
        const body = document.querySelector('body')
        const elem = document.createElement('div')
        elem.setAttribute('id', 'bodyClick')
        body.appendChild(elem)

        bodyClick = document.getElementById('bodyClick')
        bodyClick.addEventListener('click', this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile () {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll () {
      const scrollValue = document.body.scrollTop || document.documentElement.scrollTop
      const navbarColor = document.getElementById('toolbar')
      this.currentScrollValue = scrollValue
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove('md-transparent')
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = ''
          navbarColor.classList.add('md-transparent')
        }
      }
    },
    scrollListener () {
      resizeThrottler(this.handleScroll)
    },
    scrollToElement () {
      const elementId = document.getElementById('downloadSection')
      if (elementId) {
        elementId.scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  }
}
</script>
