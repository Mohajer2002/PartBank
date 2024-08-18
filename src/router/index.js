import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('@/views/CreateAccountView.vue'),
      children: [
        {
          path: 'personal-information',
          name: 'personal-information',
          component: () => import('@/components/views/CreateAccount/PersonalInformation.vue'),
          meta: {
            headerTitle: 'اطلاعات فردی',
            nextStep: 'upload-card',
            previousStep: 'personal-information'
          }
        },

        {
          path: 'upload-card',
          name: 'upload-card',
          component: () => import('@/components/views/CreateAccount/UploadCard.vue'),
          meta: {
            headerTitle: 'تصویر کارت ملی',
            nextStep: 'confirm-information',
            previousStep: 'personal-information'
          }
        },
        {
          path: 'confirm-information',
          name: 'confirm-information',
          component: () => import('@/components/views/CreateAccount/ConfirmInformation.vue'),
          meta: {
            headerTitle: 'تایید اطلاعات',
            nextStep: 'confirm-information',
            previousStep: 'upload-card'
          }
        }
      ]
    }
  ]
})

export default router
