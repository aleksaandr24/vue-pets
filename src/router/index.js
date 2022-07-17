import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'loading',
    redirect: {
      name: 'UIKit'
    }
  },
  {
    path: '/ui-kit',
    name: 'UIKit',
    component: () => import('@/views/UIKit/UIKit.vue'),
    meta: {
      layout: 'default-layout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router