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
				await axios.post(
					"http://localhost:5000/auth/logout",
					{},
					{
						withCredentials: true, // Send cookies with the request
					}
				);
				console.log("Logout successful");
				// Redirect to login or other route upon successful logout
			} catch (error) {
				console.error("Logout failed", error.response.data.message);
			}
		};

		// Return the logout method to be used in the template
		return {
			logout,
		};
	},
};
</script>
