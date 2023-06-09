import AboutComponent from '@/components/AboutComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import HblProspectRoster from '@/components/hbl/HblProspectRoster.vue'
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
      component: HomeView,
      children: [
        {
          path: 'about',
          name: 'about',
          component: AboutComponent
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactComponent
        }
      ]
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
        },
        {
          path: 'prospects',
          name: 'prospect home',
          component: HblProspectRoster
        },
        {
          path: 'prospects/:id',
          name: 'prospect list',
          component: HblProspectRoster
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
})

export default router
