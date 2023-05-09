import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false
  }),
  actions: {
    login() {
      return axios.post('/api/hbl/login/', {}).then((response) => {
        let win = window.open(response.data)
        let checkWin = setInterval(() => {
          if (!win || !win.closed) {
            return
          }
          clearInterval(checkWin)
          this.loggedIn = true
        }, 500)
      })
    },
    logout() {
      this.loggedIn = false
    },
    check() {
      return axios.get('/api/hbl/check').then((response) => {
        this.loggedIn = response.data
      })
    }
  }
})
