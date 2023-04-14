import mlbTeams from '@/plugins/mlbTeams'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
import router from './router'

const app = createApp(App)

app.provide('mlbTeams', mlbTeams)

app.use(createPinia())
app.use(router)

app.mount('#app')
