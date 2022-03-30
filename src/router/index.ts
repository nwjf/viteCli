import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import page1 from '@/views/page1.vue';
import page2 from '@/views/page2.vue';

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/error/404',
    name: 'Index',
  },
  {
    path: '/error',
    component: Layout,
    redirect: '404',
    meta: { title: '错误页面' },
    children: [
      {
        path: '404',
        name: 'Error404',
        meta: { title: '404' },
        component: page1,
      },
      {
        path: '403',
        name: 'Error403',
        meta: { title: '403' },
        component: page1,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;