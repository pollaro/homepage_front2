<script setup>
import { RouterView } from 'vue-router'</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/hbl">HBL</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
