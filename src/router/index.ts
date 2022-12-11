import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import("@/views/discoverMusic/discoverMusic.vue")
        },
        {
          path:'/test',
          component:() =>import("@/layout/testg.vue")
        }
      ]
    }
  ]
})

export default router
