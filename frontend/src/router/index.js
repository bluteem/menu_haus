import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Dashboard from '../views/Dashboard.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/',
    component: Home
  },
  {
    // Catch-all route for 404 errors
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
