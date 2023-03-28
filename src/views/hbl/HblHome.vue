<template>
  <div class="container">
    <HblLogin v-if='!this.loggedIn' />
    <div v-if='this.loggedIn'>
      <div class="row justify-content-center">
        <div class="h2 col-6">Huckleberry Baseball League</div>
      </div>
      <nav class="navbar navbar-expand-lg mb-2 mb-lg-0">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class='nav-link' to='/hbl/teams'>Teams</router-link></li>
          <li class="nav-item"><router-link class='nav-link' to='/hbl/roster'>Rosters</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<script>
import HblLogin from '@/components/hbl/HblLogin.vue'
import { useUserStore } from '@/stores/useUserStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: "HblHome",
  components: { HblLogin },
  computed: {
    ...mapState(useUserStore, ['loggedIn'])
  },
  methods: {
    ...mapActions(useUserStore, ['check'])
  },
  created() {
    this.check()
  }
}
</script>

<style scoped>
  .nav-item {
    font-size: 1rem;
  }
</style>