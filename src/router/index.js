import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'

import ConfirmInformation from "@/components/views/CreateAccount/ConfirmInformation.vue"
import PersonalInformation from "@/components/views/CreateAccount/PersonalInformation.vue"
import UploadCard from "@/components/views/CreateAccount/UploadCard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccountView,
      children:[
        {
          path: 'personl-information',
          name: 'personl-information',
          component: PersonalInformation,
        },

        {
          path: 'upload-card',
          name: 'upload-card',
          component: UploadCard,
        },
        {
          path: 'confirm-information',
          name: 'confirm-information',
          component: ConfirmInformation,
        }
      ]
    }

    // {
    //   path: '/about',
    //   name: 'about'
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
