import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
      component: () => import('../views/DefaultView.vue'),
      children: [
        { path: '/home', name: 'Home', component: () => import('../views/HomeView.vue') },
        {
          path: '/products',
          name: 'Produtos',
          component: () => import('../views/ProductView.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

export default router
