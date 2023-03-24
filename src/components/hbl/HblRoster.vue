<template>
  <div class="container">
    <div class='row row-cols-1 mx-1'>
      <select v-model="teamId" @change="getPlayers(teamId)" style="width:auto;" aria-label="HBL team select">
        <option disabled value="">Select an HBL Team</option>
        <option v-for="team in this.teams" :value="team.team_id" :key="team.team_id">{{team.name}}</option>
      </select>
    </div>
    <div class="row">
      <table class="table" v-show="!loading">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pos</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr>
            <HblPlayer v-for="p in this.players" :key="p.player_id" :player="p" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HblPlayer from '@/components/hbl/HblPlayer.vue'
import { usePlayersStore } from '@/stores/usePlayersStore'
import { useTeamsStore } from '@/stores/useTeamsStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: "HblRoster",
  components: { HblPlayer },
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
    getPlayers(teamId) {
      this.loading = true
      this.getRoster(teamId)
      this.loading = false
    },
  },
  created() {
    if (typeof(this.teamId) === 'undefined') {
      this.teamId = 0
    }
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
  }
}
</script>

<style scoped>

</style>