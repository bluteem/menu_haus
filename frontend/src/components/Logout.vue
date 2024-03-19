<template>
	<div>
		<button @click="logout">Logout</button>
	</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter from vue-router
import axios from "axios";

export default {
	setup() {
		const router = useRouter(); // Get the router instance

		const logout = async () => {
			try {
				// Send a request to logout endpoint on the backend
				await axios.post(
					"http://localhost:5000/auth/logout",
					{},
					{
						withCredentials: true, // Include cookies in the request
					}
				);

				// Clear any local storage or session data related to authentication
				localStorage.removeItem("token"); // Clear token stored in localStorage

				// Redirect the user to the login page
				router.push("/login");
			} catch (error) {
				console.error("Logout failed:", error);
				// Handle logout failure if needed
			}
		};

		// Return the logout method to be used in the template
		return {
			logout,
		};
	},
};
</script>
