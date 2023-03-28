<script setup>
import { RouterView } from 'vue-router'</script>

<template>
  <header>

  </header>
    <div class="container">
      <nav class="navbar navbar-expand-lg sticky-top mb-2 mb-lg-0">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/hbl">HBL</router-link></li>
        </ul>
      </nav>
    </div>
  <router-view />
</template>

<style scoped>
  .nav-item {
    font-size: 1.5rem;
  }
</style>
