<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<Tables />
	</div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import Tables from "../components/Tables.vue";

export default {
	components: {
		// DashboardNavbar,
		Sidebar,
		Tables,
	},
};
</script>

<style></style>
