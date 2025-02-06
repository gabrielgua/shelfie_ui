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
          redirect: '/products/list',
          component: () => import('../views/products/ProductsView.vue'),
          children: [
            {
              path: 'list',
              name: 'Listar',
              component: () => import('../views/products/ProductListView.vue'),
            },
            {
              path: ':productId(\\d+)',
              name: 'Visualizar',
              component: () => import('../views/products/ProductDetailsView.vue'),
            },
          ],
        },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

export default router
