import axios from 'axios'
import { defineStore } from 'pinia'

export const useProspectsStore = defineStore('prospects', {
  state: () => ({
    prospects: {}
  }),
  actions: {
    getProspectList(team_id = 0) {
      if (team_id === 0) {
        return axios.get('/hbl/prospects').then((response) => {
          return JSON.parse(response.data).forEach((prospect) => {
            if (prospect.hbl_team.id in this.prospects) {
              this.prospects[prospect.hbl_team.id].push(prospect)
            } else {
              this.prospects[prospect.hbl_team.id] = [prospect]
            }
            return this.prospects
          })
        })
      } else if (!(team_id in this.prospects)) {
        return axios.get('/hbl/prospects/' + team_id).then((response) => {
          this.prospects[team_id] = JSON.parse(response.data)
        })
      }
    }
  }
})
