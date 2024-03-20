<template>
	<div>
		<button @click="logout">Logout</button>
	</div>
</template>

<script>
import { useRouter } from "vue-router"; // Import useRouter from vue-router
import axios from "axios";

export default {
	setup() {
		const router = useRouter(); // Get the router instance

		const logout = async () => {
			try {
				localStorage.removeItem("token"); // Replace with your token key

				router.push("/login").catch((error) => {
					console.error("Navigation error:", error);
					// Handle specific errors like 401 Unauthorized if needed
				});
			} catch (error) {
				console.error("Logout failed", error);
				// Handle network errors or other exceptions
			}
		};

		// Return the logout method to be used in the template
		return {
			logout,
		};
	},
};
</script>
