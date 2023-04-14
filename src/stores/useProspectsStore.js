import axios from 'axios'
import { defineStore } from 'pinia'

export const useProspectsStore = defineStore('prospects', {
  state: () => ({
    prospects: {}
  }),
  actions: {
    getProspectList(team_id = 0) {
      if (team_id === 0) {
        this.prospects = {}
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
    },
    addProspect(prospectName, mlbTeam, position) {
      const prospectSplit = prospectName.split(' ')
      const firstName = prospectSplit.shift()
      const lastName = prospectSplit.join(' ')
      return axios
        .post('/hbl/prospects/add', {
          first_name: firstName,
          last_name: lastName,
          mlb_team: mlbTeam,
          position: position
        })
        .then((response) => {
          this.prospects.push({
            first_name: firstName,
            last_name: lastName,
            team_name: mlbTeam,
            display_positions: position
          })
          return response
        })
        .catch((error) => {
          return error
        })
    },
    removeProspect(prospectName, mlbTeam, position) {
      const prospectSplit = prospectName.split(' ')
      const firstName = prospectSplit.shift()
      const lastName = prospectSplit.join(' ')
      return axios
        .post('/hbl/prospects/remove', {
          first_name: firstName,
          last_name: lastName,
          mlb_team: mlbTeam,
          position: position
        })
        .then((response) => {
          this.prospects.filter(
            (prospect) =>
              prospect.first_name != firstName &&
              prospect.last_name != lastName &&
              prospect.team_name != mlbTeam
          )
          return response
        })
        .catch((error) => {
          return error
        })
    }
  }
})
