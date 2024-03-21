<!-- MenuItems.vue -->
<template>
	<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10">
		<h1 class="text-3xl font-bold mb-4">Account</h1>

		<div class="border-b border-gray-300 my-6"></div>

		<form>
			<div class="mb-4">
				<label for="email" class="block mb-1">Email:</label>
				<input
					type="text"
					id="email"
					v-model="allUserData.email"
					readonly
					class="w-full px-3 py-2 border border-gray-300 rounded-md" />
			</div>
			<div class="mb-4">
				<label for="password" class="block mb-1">Password:</label>
				<input
					type="password"
					id="password"
					v-model="allUserData.password"
					readonly
					class="w-full px-3 py-2 border border-gray-300 rounded-md" />
			</div>
			<div class="mb-4">
				<label for="fullName" class="block mb-1">Full Name:</label>
				<input
					type="text"
					id="fullName"
					v-model="allUserData.fullName"
					readonly
					class="w-full px-3 py-2 border border-gray-300 rounded-md" />
			</div>
			<div class="mb-4">
				<label for="profilePicture" class="block mb-1">Profile Picture:</label>
				<input
					type="text"
					id="profilePicture"
					v-model="allUserData.profilePicture"
					readonly
					class="w-full px-3 py-2 border border-gray-300 rounded-md" />
			</div>
			<div class="mb-4">
				<label for="profilePicture" class="block mb-1">Profile Picture:</label>
				<input
					type="text"
					id="profilePicture"
					v-model="allUserData.role"
					readonly
					class="w-full px-3 py-2 border border-gray-300 rounded-md" />
			</div>
		</form>
		<button
			type="button"
			class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
			Edit
		</button>
	</main>

	<Alert ref="Alert" />
</template>

<script>
import { ref, onMounted } from "vue";
import { jwtDecode } from "jwt-decode";
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
			role: "",
			profilePicture: "",
		});

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				// Decode JWT token to extract user's ID
				const token = localStorage.getItem("token");
				const decodedToken = jwtDecode(token);
				const userId = decodedToken.userId;

				const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				allUserData.value = response.data.userData;
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		});

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

		return {
			allUserData,
			// updateUser,
		};
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
