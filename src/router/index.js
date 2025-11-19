import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/post/:id',
    name: 'BlogPost',
    component: () => import('@/views/BlogPostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
