<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<router-link :to="{ name: 'Hello' }">Home</router-link>-->
    <router-link to="/kanban">Kanban view</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import './assets/css/tailwind.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
