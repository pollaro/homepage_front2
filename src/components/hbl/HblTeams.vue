<template>
  <div class="container">
    <table class="table table-striped" v-show="!loading">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr v-for="team in this.teams" :key="team.team_id">
          <td><a href="#" v-on:click="getDetails(team.team_id)">{{team.name}}</a></td>
          <td>{{team.managers.manager.nickname}}</td>
        </tr>
      </tbody>
    </table>
    <span v-show="loading" class="spinner-border spinner-border-sm" />
    <table class="table table-striped" v-show="!detailsLoading && teamId > 0">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td>Waiver Priority</td>
          <td>{{this.teamDetails[teamId].waiver_priority}}</td>
        </tr>
        <tr>
          <td># of Moves</td>
          <td>{{this.teamDetails[teamId].number_of_moves}}</td>
        </tr>
        <tr>
          <td># of Trades</td>
          <td>{{this.teamDetails[teamId].number_of_trades}}</td>
        </tr>
      </tbody>
    </table>
    <span v-show="detailsLoading && teamId > 0" class="spinner-border spinner-border-sm" />
  </div>
</template>

<script>
import { useTeamsStore } from '@/stores/useTeamsStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: "HblTeams",
  data() { return {loading: false, detailsLoading: false, teamId: 0} },
  computed: {
    ...mapState(useTeamsStore, ['teams', 'teamDetails']),
  },
  methods: {
    ...mapActions(useTeamsStore, ['getAllTeams', 'getTeamDetails']),
    getTeams() {
      this.loading = true
      this.getAllTeams()
      this.loading = false
    },
    getDetails(teamID) {
      this.teamId = teamID
      this.detailsLoading = true
      this.getTeamDetails(teamID)
      this.detailsLoading = false
    }
  },
  created() {
    this.getTeams()
  }
}
</script>

<style scoped>

</style>