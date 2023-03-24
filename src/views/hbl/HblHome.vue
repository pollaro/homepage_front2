<template>
  <div class="container">
    <HblLogin v-if='!this.loggedIn' />
    <div v-if='this.loggedIn'>
      <span class="mx-1">Huckleberry Baseball League</span>
      <nav class="navbar navbar-expand-lg mb-2 mb-lg-0">
        <router-link class='nav-item mx-1' to='/hbl/teams'>Teams</router-link>
        <router-link class='nav-item mx-1' to='/hbl/roster'>Rosters</router-link>
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

</style>