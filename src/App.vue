<script setup>
import { RouterView } from 'vue-router'</script>

<template>
  <header>

  </header>
    <div class="container">
      <nav class="navbar navbar-expand-lg sticky-top mb-2 mb-lg-0">
        <router-link class="nav-item mx-1" to="/">Home</router-link>
        <router-link class="nav-item mx-1" to="/hbl">HBL</router-link>
      </nav>
    </div>
  <router-view />
</template>

<style scoped>

</style>
