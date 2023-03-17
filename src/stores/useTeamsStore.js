import axios from 'axios'
import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: []
  }),
  actions: {
    getAllTeams() {
      return axios.get('/hbl/teams').then((response) => {
        this.teams = response.data
        return this.teams
      })
    }
  }
})
