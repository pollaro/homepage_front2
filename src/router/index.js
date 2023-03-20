import HblTeamDetail from '@/components/hbl/HblTeamDetail.vue'
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
          path: 'teams/:id',
          name: 'team detail',
          component: HblTeamDetail
        }
      ]
    }
  ]
})

export default router
