<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<Account />
	</div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import Account from "../components/Account.vue";

export default {
	components: {
		// DashboardNavbar,
		Sidebar,
		Account,
	},
};
</script>

<style></style>
