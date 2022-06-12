import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ui-kit',
    name: 'UIKit',
    component: () => import('../views/UIKit/UIKit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router