import axios from "axios";

// Sample implementation for authentication service
const authService = {
	// Method to check if the user is authenticated
	isAuthenticated() {
		// Extract all cookies as an array of strings
		const cookies = document.cookie.split(";");

		// Iterate through each cookie to check if the 'token' cookie exists
		for (let cookie of cookies) {
			// Remove any leading spaces from the cookie string
			cookie = cookie.trim();

			// Check if the cookie starts with 'token='
			if (cookie.startsWith("token=")) {
				// 'token' cookie found, return true indicating authentication
				return true;
			}
		}

		// 'token' cookie not found, return false indicating not authenticated
		return false;
	},

	// Method to log the user out
	logout() {
		// Send a request to the backend to clear the authentication token
		axios
			.post("/auth/logout")
			.then((response) => {
				// If the logout request is successful, you can perform additional actions if needed
				console.log(response.data.message); // Log the logout message
				// Perform any other actions, such as redirecting the user to the login page
			})
			.catch((error) => {
				// Handle errors if the logout request fails
				console.error("Logout failed:", error);
				// Perform appropriate error handling, such as displaying an error message to the user
			});
	},
};

export default authService;
