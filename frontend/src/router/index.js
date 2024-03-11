import { createRouter, createWebHistory } from "vue-router";
import authService from "../services/authService.js";
import FrontendHome from "../views/FrontendHome.vue";
import DashboardHome from "../views/DashboardHome.vue";
import DashboardTables from "../views/DashboardTables.vue";
import DashboardMenuCategories from "../views/DashboardMenuCategories.vue";
import DashboardMenuItems from "../views/DashboardMenuItems.vue";
import DashboardTeam from "../views/DashboardTeam.vue";
import DashboardSettings from "../views/DashboardSettings.vue";
import DashboardAccount from "../views/DashboardAccount.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";

const routes = [
	{
		path: "/login",
		component: Login,
		meta: {
			title: "Menu.Haus Login",
		},
	},
	{
		path: "/dashboard",
		component: DashboardHome,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/tables",
		component: DashboardTables,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/menu-categories",
		component: DashboardMenuCategories,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/menu-items",
		component: DashboardMenuItems,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/team",
		component: DashboardTeam,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/settings",
		component: DashboardSettings,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/account",
		component: DashboardAccount,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
	},
	{
		path: "/",
		component: FrontendHome,
		meta: {
			title: "Menu.Haus Home", // Meta title for the Home page
		},
	},
	{
		// Catch-all route for 404 errors
		path: "/:catchAll(.*)",
		component: NotFound,
		meta: {
			title: "Page Not Found", // Meta title for the 404 page
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Set up navigation guards to update the meta title and check authentication status for each route
router.beforeEach((to, from, next) => {
	// Update the document title if the route has a meta title defined
	if (to.meta.title) {
		document.title = to.meta.title;
	}

	// Check if the route requires authentication
	if (to.meta.requiresAuth) {
		// Check if the user is authenticated
		if (!authService.isAuthenticated()) {
			// Redirect to the login page if not authenticated
			next("/login");
		} else {
			// Proceed to the route if authenticated
			next();
		}
	} else {
		// If the route does not require authentication, proceed to the route
		next();
	}
});

export default router;
