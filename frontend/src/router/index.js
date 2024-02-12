import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Dashboard from '../views/Dashboard.vue';
import DashboardTables from '../views/DashboardTables.vue';
import DashboardMenuCategories from '../views/DashboardMenuCategories.vue';
import DashboardMenuItems from '../views/DashboardMenuItems.vue';
import DashboardTeam from '../views/DashboardTeam.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/dashboard/tables',
    component: DashboardTables,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/dashboard/menu-categories',
    component: DashboardMenuCategories,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/dashboard/menu-items',
    component: DashboardMenuItems,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/dashboard/team',
    component: DashboardTeam,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Menu.Haus Home' // Meta title for the Home page
    }
  },
  {
    // Catch-all route for 404 errors
    path: '/:catchAll(.*)',
    component: NotFound,
    meta: {
      title: 'Page Not Found' // Meta title for the 404 page
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Set up navigation guards to update the meta title for each route
router.beforeEach((to, from, next) => {
  // Check if the route has a meta title defined
  if (to.meta.title) {
    document.title = to.meta.title; // Set the document title to the meta title of the route
  }
  next(); // Proceed with the navigation
});

export default router;
