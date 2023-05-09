import axios from 'axios'
import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: {}
  }),
  actions: {
    getRoster(team_id) {
      if (!(team_id in this.players)) {
        return axios.get('/api/hbl/roster/' + team_id).then((response) => {
          this.players[team_id] = JSON.parse(response.data)
        })
      }
    }
  }
})
