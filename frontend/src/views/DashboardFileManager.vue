<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<FileManager />
	</div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import FileManager from "../components/FileManager.vue";

export default {
	components: {
		// DashboardNavbar,
		Sidebar,
		FileManager,
	},
};
</script>

<style></style>
