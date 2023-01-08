import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () => import('../views/Materials.vue')  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
