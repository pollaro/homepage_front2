import HblRoster from '@/components/hbl/HblRoster.vue'
import HblTeams from '@/components/hbl/HblTeams.vue'
import HblHome from '@/views/hbl/HblHome.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hbl',
      name: 'hbl home',
      component: HblHome,
      children: [
        {
          path: 'teams',
          name: 'hbl teams',
          component: HblTeams
        },
        {
          path: 'roster',
          name: 'roster home',
          component: HblRoster
        },
        {
          path: 'roster/:id',
          name: 'team roster',
          component: HblRoster
        }
      ]
    }
  ]
})

export default router
