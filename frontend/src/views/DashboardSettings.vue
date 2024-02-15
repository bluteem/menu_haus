<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<Settings />
	</div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import Settings from "../components/Settings.vue";

export default {
	components: {
		// DashboardNavbar,
		Sidebar,
		Settings,
	},
};
</script>

<style></style>
