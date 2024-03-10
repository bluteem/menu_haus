<template>
	<div>
		<button @click="logout">Logout</button>
	</div>
</template>

<script>
import { useRouter } from "vue-router"; // Import useRouter from vue-router

export default {
	setup() {
		const router = useRouter(); // Get the router instance

		// Logout method
		const logout = () => {
			localStorage.removeItem("token");
			// Redirect to the login page
			router.push("/login");
		};

		// Return the logout method to be used in the template
		return {
			logout,
		};
	},
};
</script>
