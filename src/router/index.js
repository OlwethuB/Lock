import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vid',
    name: 'Educational Videos',
    component: () => import( '../views/EducationalView.vue')
  },
  {
    path: '/vault',
    name: 'Vault',
    component: () => import( '../views/VaultView.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('../views/SurveyView.vue')
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import('../views/BudgetView.vue')
  },
  {
    path: '/calc',
    name: 'Calculator',
    component: () => import('../views/CalculatorView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/phone',
    name: 'Phone',
    component: () => import( '../views/PhoneView.vue')
  },
  {
    path: '/load',
    name: 'Loading',
    component: () => import('../views/LoadingPage.vue')
  },
  {
    path: '/reg',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/log',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
