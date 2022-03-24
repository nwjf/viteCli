import { createRouter, createWebHistory } from 'vue-router';
import page1 from '@/views/page1.vue';
import page2 from '@/views/page2.vue';

const routes = [
  {
    path: '/page1',
    component: page1,
  },
  {
    path: '/page2',
    component: page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;