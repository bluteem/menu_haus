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
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/tables",
		component: DashboardTables,
		meta: {
			title: "Menu.Haus Dashboard Tables",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/menu-categories",
		component: DashboardMenuCategories,
		meta: {
			title: "Menu.Haus Dashboard Menu Categories",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/menu-items",
		component: DashboardMenuItems,
		meta: {
			title: "Menu.Haus Dashboard Menu Items",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/team",
		component: DashboardTeam,
		meta: {
			title: "Menu.Haus Dashboard Team",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/settings",
		component: DashboardSettings,
		meta: {
			title: "Menu.Haus Dashboard Settings",
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard/account",
		component: DashboardAccount,
		meta: {
			title: "Menu.Haus Dashboard Account",
			requiresAuth: false,
		},
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

export default router;
