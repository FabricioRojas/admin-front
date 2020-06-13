<template>
  <div class="hello">
    <parallax class="page-header header-filter bg-gray-600" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow" />
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow" />
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow" />
            <div class="brand">
              <h1>Task Manager</h1>
              <h3>Good shit.</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <h1>{{ msg }}</h1>
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Hello World</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    signupImage () {
      return {
        backgroundImage: `url(${this.signup})`
      }
    }
  }
}
</script>
