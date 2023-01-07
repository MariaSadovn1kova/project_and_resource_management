import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Projects from '../views/Projects.vue'
import ProjectsNavbar from '../components/Navbar.vue'

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
