import axios from 'axios'
import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: [],
    teamDetails: {}
  }),
  actions: {
    getAllTeams() {
      if (this.teams.length == 0) {
        return axios.get('/api/hbl/teams').then((response) => {
          this.teams = response.data
        })
      }
    },
    getTeamDetails(teamId) {
      if (!(teamId in this.teamDetails)) {
        return axios.get('/api/hbl/team/' + teamId).then((response) => {
          this.teamDetails[teamId] = response.data
        })
      }
    }
  }
})
