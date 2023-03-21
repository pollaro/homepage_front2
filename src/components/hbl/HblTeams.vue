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
          <td><a href="#" v-on:click="">{{team.name}}</a></td>
          <td>{{team.managers.manager.nickname}}</td>
        </tr>
      </tbody>
    </table>
    <span v-show="loading" class="spinner-border spinner-border-sm" />
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