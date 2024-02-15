<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<MenuCategories />
	</div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import MenuCategories from "../components/MenuCategories.vue";

export default {
	components: {
		// DashboardNavbar,
		Sidebar,
		MenuCategories,
	},
};
</script>

<style></style>
