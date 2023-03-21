import axios from 'axios'
import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: {}
  }),
  actions: {
    getRoster(team_id) {
      if (!(team_id in this.players)) {
        return axios.get('/hbl/roster/' + team_id).then((response) => {
          this.players[team_id] = response.data
        })
      }
    }
  }
})
