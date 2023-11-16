import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AmazonNano',
      component: () => import('../components/AmazonNano.vue')
    },

  ]
})


export default router