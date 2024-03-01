import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/requests',
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => import(/* webpackChunkName: "requests" */ '../views/RequestsView.vue'),
  },
  {
    path: '/:id',
    redirect: (to) => {
      return { path: `/${to.params.id}/requests` };
    },
  },
  {
    path: '/:id/requests',
    name: 'request',
    component: () => import(/* webpackChunkName: "request" */ '../views/RequestView.vue'),
  },
  {
    path: '/:id/create',
    children: [
      {
        path: '',
        name: 'create',
        component: () => import(/* webpackChunkName: "create" */ '../views/CreateView.vue'),
      },
      {
        path: 'order',
        name: 'create-order',
        component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue'),
      },
      {
        path: 'deliver',
        name: 'create-deliver',
        component: () =>
          import(/* webpackChunkName: "create-deliver" */ '../views/CreateDeliver.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
