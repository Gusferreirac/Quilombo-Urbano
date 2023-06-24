import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: (to) => {
      return { path: '/inicio' };
    },
  },

  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/inicio/cadastro',
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: '/inicio/entrar',
        component: () => import('pages/SignIn.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
