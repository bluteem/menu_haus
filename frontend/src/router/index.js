import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
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

// Function to check if the user is authenticated
const isAuthenticated = async () => {
	// Retrieve the token from local storage
	const token = localStorage.getItem("token");
	console.log(token);

	if (!token) {
		return false; // No token found, user is not authenticated
	}

	try {
		// Send the token to the server for verification
		const response = await axios.get("http://localhost:5000/auth/verify-token", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.status === 200; // Return true if token is valid
	} catch (error) {
		console.error("Token verification failed", error.message);
		return false; // Token verification failed, user is not authenticated
	}
};

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
			title: "Menu.Haus Dashboard Tables",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/menu-categories",
		component: DashboardMenuCategories,
		meta: {
			title: "Menu.Haus Dashboard Menu Categories",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/menu-items",
		component: DashboardMenuItems,
		meta: {
			title: "Menu.Haus Dashboard Menu Items",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/team",
		component: DashboardTeam,
		meta: {
			title: "Menu.Haus Dashboard Team",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/settings",
		component: DashboardSettings,
		meta: {
			title: "Menu.Haus Dashboard Settings",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/account",
		component: DashboardAccount,
		meta: {
			title: "Menu.Haus Dashboard Account",
			requiresAuth: true,
		},
	},
	{
		path: "/",
		component: FrontendHome,
		meta: {
			title: "Menu.Haus Home",
		},
	},
	{
		path: "/:catchAll(.*)",
		component: NotFound,
		meta: {
			title: "Page Not Found",
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Vue Router's navigation guards to check if a route requires authentication and verify the user's authentication status before navigating to the route
router.beforeEach(async (to, from, next) => {
	// Check if the route requires authentication
	if (to.meta.requiresAuth) {
		try {
			// Retrieve the token from local storage
			const token = localStorage.getItem("token");

			if (!token) {
				// If there's no token and the route requires authentication, redirect to login
				next("/login");
				return;
			}

			// Send a GET request to the server to verify the token
			const response = await axios.get("http://localhost:5000/auth/verify-token", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				// Token is valid, proceed to the route
				next();
			} else {
				// Token verification failed, redirect to login
				next("/login");
			}
		} catch (error) {
			console.error("Error checking authentication:", error);
			next("/login"); // Redirect to login page if an error occurs during authentication check
		}
	} else if (to.path === "/login") {
		// If the route is '/login' and the user is already authenticated, redirect to dashboard
		const authenticated = await isAuthenticated();
		if (authenticated) {
			next("/dashboard");
		} else {
			next();
		}
	} else {
		// Route does not require authentication, proceed to the route
		next();
	}
});

export default router;
