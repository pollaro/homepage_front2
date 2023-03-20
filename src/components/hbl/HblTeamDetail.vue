<template>

</template>

<script>
import { usePlayersStore } from '@/stores/usePlayersStore'
import { mapActions } from 'pinia'

export default {
  name: "HblTeamDetail",
  data() { return {loading: false} },
  methods: {
    ...mapActions(usePlayersStore, ['getPlayers']),
    getTeamDetail(teamId) {
      this.loading = true
      this.getPlayers(teamId)
      this.loading = false
    }
  },
}
</script>

<style scoped>

</style>