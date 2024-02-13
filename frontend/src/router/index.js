import { createRouter, createWebHistory } from 'vue-router';
import FrontendHome from "../views/FrontendHome.vue";
import DashboardHome from '../views/DashboardHome.vue';
import DashboardTables from '../views/DashboardTables.vue';
import DashboardMenuCategories from '../views/DashboardMenuCategories.vue';
import DashboardMenuItems from '../views/DashboardMenuItems.vue';
import DashboardTeam from '../views/DashboardTeam.vue';
import DashboardSettings from '../views/DashboardSettings.vue';
import DashboardAccount from '../views/DashboardAccount.vue';
import NotFound from '../views/NotFound.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      title: 'Menu.Haus Login'
    }
  },
  {
    path: '/dashboard',
    component: DashboardHome,
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
    path: '/dashboard/settings',
    component: DashboardSettings,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/dashboard/account',
    component: DashboardAccount,
    meta: {
      title: 'Menu.Haus Dashboard'
    }
  },
  {
    path: '/',
    component: FrontendHome,
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
