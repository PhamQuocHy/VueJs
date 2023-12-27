import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import Home from '../views/Home.vue';
import CMS from '../views/CMS.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cms', component: CMS }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp().use(router).mount('#app');

export default router;