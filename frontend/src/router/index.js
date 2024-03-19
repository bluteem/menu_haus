import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
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

const routes = [
	{
		path: "/login",
		component: Login,
		meta: {
			title: "Menu.Haus Login",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard",
		component: DashboardHome,
		meta: {
			title: "Menu.Haus Dashboard",
			requiresAuth: true,
		},
		children: [
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
			title: "Menu.Haus Home",
			requiresAuth: false,
		},
	},
	{
		path: "/:catchAll(.*)",
		component: NotFound,
		meta: {
			title: "Page Not Found",
			requiresAuth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const isAuthenticated = store.state.isAuthenticated;
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

	if (requiresAuth && !isAuthenticated) {
		next("/login");
	} else {
		next();
	}
});

export default router;
