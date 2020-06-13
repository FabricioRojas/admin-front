<template>
  <div id="app">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/css/tailwind.min.css';
</style>
