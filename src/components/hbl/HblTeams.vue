<template>
  <div class="container">
    <div>

    </div>
  </div>
</template>

<script>
import { useTeamsStore } from '@/stores/useTeamsStore'
import { mapActions } from 'pinia'

export default {
  name: "HblTeams",
  data() { return {loading: false} },
  methods: {
    ...mapActions(useTeamsStore, ['getAllTeams']),
    getTeams() {
      this.loading = true
      this.getAllTeams()
      this.loading = false
    }
  },
  created() {
    this.getTeams()
  }
}
</script>

<style scoped>

</style>