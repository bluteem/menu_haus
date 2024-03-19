import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import DashboardHome from "../views/DashboardHome.vue";
import DashboardTables from "../views/DashboardTables.vue";
import DashboardMenuCategories from "../views/DashboardMenuCategories.vue";
import DashboardMenuItems from "../views/DashboardMenuItems.vue";
import DashboardTeam from "../views/DashboardTeam.vue";
import DashboardSettings from "../views/DashboardSettings.vue";
import DashboardAccount from "../views/DashboardAccount.vue";
import FrontendHome from "../views/FrontendHome.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{
		path: "/login",
		component: Login,
		meta: {
			title: "Menu.Haus Login",
			requiresAuth: false, // This route does not require authentication
		},
	},
	{
		path: "/dashboard",
		component: DashboardHome,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true, // This route requires authentication
		},
		children: [
			// Nested routes for dashboard pages
			{ path: "tables", component: DashboardTables },
			{ path: "menu-categories", component: DashboardMenuCategories },
			{ path: "menu-items", component: DashboardMenuItems },
			{ path: "team", component: DashboardTeam },
			{ path: "settings", component: DashboardSettings },
			{ path: "account", component: DashboardAccount },
		],
	},
	{
		path: "/",
		component: FrontendHome,
		meta: {
			title: "Menu.Haus Home", // Meta title for the Home page
			requiresAuth: false, // This route does not require authentication
		},
	},
	{
		// Catch-all route for 404 errors
		path: "/:catchAll(.*)",
		component: NotFound,
		meta: {
			title: "Page Not Found", // Meta title for the 404 page
			requiresAuth: false, // This route does not require authentication
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
		// Check if the user is authenticated (you can implement your own logic here)
		const isAuthenticated = isTokenValid(localStorage.getItem("token")); // Implement token validation

		if (!isAuthenticated) {
			// If the user is not authenticated, redirect to the login page
			next("/login");
		} else {
			// If the user is authenticated, proceed to the route
			next();
		}
	} else {
		// If the route does not require authentication, proceed to the route
		next();
	}
});

export default router;
