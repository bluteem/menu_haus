<!-- MenuItems.vue -->
<template>
	<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-100">
		<h1 class="text-3xl font-bold mb-4">Menu Categories</h1>

		<!-- Add Menu Item Button -->
		<button
			@click="showModal1 = true"
			class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 border-b border-gray-300 mb-4">
			Add New Category
		</button>

		<div class="flex flex-col">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div class="overflow-hidden">
						<table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
							<thead class="border-b font-medium dark:border-neutral-500">
								<tr>
									<th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
									<th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Description</th>
									<th scope="col" class="px-6 py-4"></th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="menuCategory in allMenuCategoriesData"
									:key="menuCategory._id"
									class="border-b dark:border-neutral-500">
									<td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
										<div class="text-gray-900">{{ menuCategory.name }}</div>
									</td>
									<td class="border-r px-6 py-4 dark:border-neutral-500">
										<div class="text-gray-900">{{ menuCategory.description }}</div>
									</td>
									<td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
										<button
											@click="getUser(menuCategory._id, $refs.Alert)"
											type="button"
											class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
											Edit
										</button>
										<button
											@click="deleteUser(menuCategory._id, $refs.Alert)"
											class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
											Delete
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Show message if there are no menu items -->
		<p v-if="allMenuCategoriesData.length === 0" class="text-gray-600 mt-3">No category available</p>
	</main>

	<!-- Modal for adding a new user -->
	<div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
			<!-- Modal content -->
			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Add New Category</h3>
					<div class="mt-5">
						<!-- Add User Form -->
						<form @submit.prevent="addUser($refs.Alert)">
							<div class="mb-4">
								<label for="newName" class="block text-sm font-medium text-gray-700">Name:</label>
								<input
									type="text"
									v-model="newMenuCategory.name"
									id="newName"
									required
									class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
							</div>

							<div class="mb-4">
								<label for="newEmail" class="block text-sm font-medium text-gray-700">Email:</label>
								<input
									type="email"
									v-model="newMenuCategory.description"
									id="newEmail"
									required
									class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
							</div>

							<button
								type="submit"
								class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
								Add Category
							</button>
						</form>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<button
						@click="
							showModal1 = false;
							resetForm();
						"
						type="button"
						class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
						Close
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal for editing menu item -->
	<div :style="{ display: showModal2 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Edit Category Info</h3>
					<div class="mt-5">
						<form @submit.prevent="updateUser($refs.Alert)">
							<div class="mb-4">
								<label for="editName" class="block text-sm font-medium text-gray-700">Full Name:</label>
								<input
									type="text"
									v-model="newMenuCategory.name"
									id="editName"
									required
									class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
							</div>

							<div class="mb-4">
								<label for="editEmail" class="block text-sm font-medium text-gray-700">Email:</label>
								<input
									type="email"
									v-model="newMenuCategory.desription"
									id="editEmail"
									required
									class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
							</div>

							<button
								type="submit"
								class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
								Save
							</button>
						</form>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<button
						@click="
							showModal2 = false;
							resetForm();
						"
						type="button"
						class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
						Close
					</button>
				</div>
			</div>
		</div>
	</div>

	<Alert ref="Alert" />
</template>

<script>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Alert from "@/components/Alert.vue";

export default {
	components: {
		Alert,
	},
	setup() {
		// Reactive variables
		const showModal1 = ref(false);
		const showModal2 = ref(false);
		const newMenuCategory = ref({
			name: "",
			description: "",
		});
		const allMenuCategoriesData = ref([]);

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/menucategories");
				allMenuCategoriesData.value = response.data.menuCategoryData;
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		});

		// Add a new menu item
		const addCategory = async (alertRef) => {
			try {
				const response = await axios.post("http://localhost:5000/api/menucategories", {
					email: newUser.value.email,
					password: newUser.value.password,
					fullName: newUser.value.fullName,
					role: newUser.value.role,
				});
				allMenuCategoriesData.value.push(response.data.menuCategoryData);
				showModal1.value = false;
				resetForm();
				// Show success alert using the passed alertRef
				alertRef.showAlert("User added successfully!");
			} catch (error) {
				console.error("Error adding user:", error);
				// Show error alert using the passed alertRef if failed to add menu item
				alertRef.showAlert("Failed to add user. Please try again later.");
			}
		};

		// Fetch a single menu item
		const getCategory = async (itemId, alertRef) => {
			try {
				const response = await axios.get(`http://localhost:5000/api/menucategories/${itemId}`);
				const variable = response.data.menuCategoryData;
				newMenuCategory.value = {
					_id: variable._id,
					email: variable.email,
					password: variable.password,
					fullName: variable.fullName,
					role: variable.role,
				};
				showModal2.value = true;
			} catch (error) {
				console.error("Error fetching user:", error);
				// Show alert if failed to fetch menu item details
				alertRef.showAlert("Failed to fetch user details. Please try again later.");
			}
		};

		// Update a user info
		const updateCategory = async (alertRef) => {
			try {
				// Send a PUT request to update user info
				const response = await axios.put(
					`http://localhost:5000/api/menucategories/${newMenuCategory.value._id}`,
					newUser.value
				);
				// Extract updated user data from the response
				const updatedMenuCategory = response.data.menuCategoryData;
				// Find the index of the updated user in the users array
				const updatedMenuCategoryIndex = allMenuCategoriesData.value.findIndex(
					(item) => item._id === updatedMenuCategory._id
				);
				// If the updated user index is found
				if (updatedMenuCategoryIndex !== -1) {
					allMenuCategoriesData.value.splice(updatedMenuCategoryIndex, 1, updatedMenuCategory);
				}
				// Hide the modal for editing user info
				showModal2.value = false;
				resetForm();
				// Show success alert
				alertRef.showAlert("User info updated successfully!");
			} catch (error) {
				console.error("Error updating user info:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update user info. Please try again later.");
			}
		};

		// Delete a menu item
		const deleteCategory = async (itemId, alertRef) => {
			try {
				await axios.delete(`http://localhost:5000/api/menucategories/${itemId}`);
				allMenuCategoriesData.value = allMenuCategoriesData.value.filter((item) => item._id !== itemId);
				// Show success alert
				alertRef.showAlert("User deleted successfully!");
			} catch (error) {
				console.error("Error deleting user:", error);
				// Show error alert if failed to delete menu item
				alertRef.showAlert("Failed to delete user. Please try again later.");
			}
		};

		// Reset form fields
		const resetForm = () => {
			newUser.value = {
				_id: null,
				email: "",
				password: "",
				fullName: "",
				role: "",
			};
		};

		return {
			showModal1,
			showModal2,
			newMenuCategory,
			allMenuCategoriesData,
			getCategory,
			updateCategory,
			addCategory,
			deleteCategory,
			resetForm,
		};
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
