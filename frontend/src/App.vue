<!-- App.vue -->
<template>
	<div id="app">
		<router-view />
		<Logout v-if="isAuthenticated" />
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Logout from "./components/Logout.vue";

export default {
	name: "App",
	components: {
		Logout,
	},
	setup() {
		const store = useStore();
		const isAuthenticated = computed(() => store.state.isAuthenticated);

		return {
			isAuthenticated,
		};
	},
};
</script>

<style></style>
