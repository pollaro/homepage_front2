import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: {}
  }),
  actions: {
    getPlayers() {}
  }
})
