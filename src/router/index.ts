import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import page1 from '@/views/page1.vue';
import page2 from '@/views/page2.vue';
import page3 from '@/views/page3.vue';
import Error403 from '@/views/error/403.vue';
import Error404 from '@/views/error/404.vue';

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
        component: Error404,
      },
      {
        path: '403',
        name: 'Error403',
        meta: { title: '403' },
        component: Error403,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;