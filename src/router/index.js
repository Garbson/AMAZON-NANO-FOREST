import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'AmazonNano',
      component: () => import('../views/AmazonNanoView.vue')
    },
    {
      path: '/NanoFruit',
      name: 'nanofruit',
      component: () => import('../views/NanoFruitView.vue')
    },
    {
      path: '/NanoCaphair',
      name: 'nanocaphair',
      component: () => import('../views/NanoCaphairView.vue')
    },
    {
      path: '/GoldSerum',
      name: 'nanoserum',
      component: () => import('../views/GoldSerumView.vue')
    },
  ]
})


export default router