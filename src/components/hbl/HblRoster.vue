<template>
  <div class="container">
    <select v-model="teamId" class="form-select" aria-label="HBL team select">
      <option disabled value="">Select an HBL Team</option>
      <option v-for="team in this.teams" :value="team.team_id">{{team.name}}</option>
    </select>
  </div>
</template>

<script>
import { usePlayersStore } from '@/stores/usePlayersStore'
import { useTeamsStore } from '@/stores/useTeamsStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: "HblRoster",
  data() { return {loading: false, teamId: 0} },
  computed: {
    ...mapState(useTeamsStore, ['teams']),
    ...mapState(usePlayersStore, ['players'])
  },
  methods: {
    ...mapActions(usePlayersStore, ['getRoster']),
    ...mapActions(useTeamsStore, ['getAllTeams']),
    getTeams() {
      this.loading = true
      this.getAllTeams()
      this.loading = false
    },
    getPlayers() {
      this.loading = true
      this.getRoster()
      this.loading = false
    }
  },
  created() {
    if (this.teams.length === 0) {
      this.loading = true
      this.getTeams()
      this.loading = false
    }
    if (this.teamId > 0) {
      this.loading = true
      this.getPlayers(this.teamId)
      this.loading = false
    }
  },
  beforeUpdate() {
    if (!(this.teamId in this.players)) {
      this.loading = true
      this.getPlayers(this.teamId)
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>