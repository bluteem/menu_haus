<!-- MenuItems.vue -->
<template>
	<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10">
		<h1 class="text-3xl font-bold mb-4">Account</h1>

		<div class="border-b border-gray-300 mt-6"></div>

		<ul>
			<li
				v-for="userData in allUserData"
				:key="userData._id"
				class="flex items-center border-b border-gray-300 pt-2 pb-4">
				<div class="flex">
					<div class="w-3/6 px-4"></div>
					<div class="w-1/6">
						<button
							type="button"
							class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
							Edit
						</button>
					</div>
				</div>
			</li>
		</ul>
	</main>

	<Alert ref="Alert" />
</template>

<script>
import { ref } from "vue";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Alert from "@/components/Alert.vue";

export default {
	components: {
		Alert,
	},
	setup() {
		const allUserData = ref({
			email: "",
			password: [],
			fullName: "",
			profilePicture: "",
		});

		// Fetch menu items when the component is mounted
		/* 		onMounted(async () => {
			try {
				const response = await axios.get(`http://localhost:5000/api/users/${currentUser.value._id}`);
				allUserData.value = response.data.userData;
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		}); */

		// Update a menu item
		/* 		const updateUser = async (alertRef) => {
			try {
				const response = await axios.put(`http://localhost:5000/api/users/${currentUser.value._id}`, currentUser.value);
				const updatedUser = response.data.menuItem;
				const updatedItemIndex = menuItems.value.findIndex((item) => item._id === updatedMenuItem._id);
				if (updatedItemIndex !== -1) {
					menuItems.value.splice(updatedItemIndex, 1, updatedMenuItem);
				}
				// Show success alert
				alertRef.showAlert("User updated successfully!");
			} catch (error) {
				console.error("Error updating user:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update user info. Please try again later.");
			}
		}; */

		// Function to fetch user information based on the authenticated user's ID
		const fetchUserInfo = async () => {
			try {
				// Decode JWT token to extract user's ID
				const token = localStorage.getItem("token");
				const decodedToken = jwt_decode(token);
				const userId = decodedToken.userId;

				// Send request to backend API to fetch user information
				/* 				const response = await axios.get(`/api/users/${userId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}); */

				// Return user information
				return userId;
			} catch (error) {
				console.error("Error fetching user information:", error);
				throw error; // Handle error appropriately in the calling code
			}
		};

		// Example usage
		fetchUserInfo()
			.then((userInfo) => {
				console.log("User information:", userInfo);
				// Do something with user information
			})
			.catch((error) => {
				// Handle error
			});

		return {
			allUserData,
			// updateUser,
			fetchUserInfo,
		};
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
