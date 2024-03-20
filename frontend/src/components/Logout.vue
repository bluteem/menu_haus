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
				const response = await axios.post(
					"http://localhost:5000/auth/logout",
					{},
					{
						withCredentials: true, // Send cookies with the request
						timeout: 10000, // Set the timeout to 10 seconds (adjust as needed)
					}
				);

				// Check for successful response (status code 200)
				if (response.status === 200) {
					console.log("Logout successful from backend");
					// Clear local storage or other mechanisms if needed
					localStorage.removeItem("token"); // Replace with your token key

					router.push("/login").catch((error) => {
						console.error("Navigation error:", error);
						// Handle specific errors like 401 Unauthorized if needed
					});
				} else {
					console.error("Unexpected response:", response.status, response.data);
					// Handle unexpected responses (e.g., show error message)
				}
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
