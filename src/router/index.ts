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
      return { path: `/${to.params.id}/request` };
    },
  },
  {
    path: '/:id/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "request" */ '../views/RequestView.vue'),
  },
  {
    path: '/:id/create/order',
    name: 'create-order',
    component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue'),
  },
  {
    path: '/:id/create/deliver',
    name: 'create-deliver',
    component: () => import(/* webpackChunkName: "create-deliver" */ '../views/CreateDeliver.vue'),
  },
  {
    path: '/:id/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "create" */ '../views/CreateView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
