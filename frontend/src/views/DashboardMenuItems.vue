<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-200">
			<h1 class="text-3xl font-bold mb-4">Menu Items</h1>

			<!-- Add Menu Item Button -->
			<button
				@click="showModal1 = true"
				class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 border-b border-gray-300">
				Add Menu Item
			</button>

			<div class="border-b border-gray-300 mt-6"></div>

			<ul>
				<li
					v-for="menuItem in allMenuItemsData"
					:key="menuItem._id"
					class="flex items-center border-b border-gray-300 pt-2 pb-4">
					<div class="flex">
						<!-- Left column for the image -->
						<div class="xs:w-2/6 md:w-1/6 px-4">
							<img
								:src="'http://localhost:5000/uploads/' + menuItem.images[0]"
								:alt="menuItem.name"
								class="w-full object-cover rounded-md" />
						</div>
						<!-- Right column for the text content -->
						<div class="xs:w-2/6 md:w-4/6 px-2">
							<h2 class="text-xl font-semibold">{{ menuItem.name }}</h2>
							<p class="text-gray-600"><span class="font-bold">Category:</span> {{ menuItem.category }}</p>
							<p class="text-gray-600"><span class="font-bold">Price:</span> ${{ menuItem.price.toFixed(2) }}</p>
							<!-- Edit and Delete buttons -->
						</div>
						<div class="w-2/6">
							<button
								@click="
									getMenuItem(menuItem._id, $refs.Alert);
									imageDisplayOn();
								"
								type="button"
								class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
								Edit
							</button>
							<button
								@click="deleteMenuItem(menuItem._id, $refs.Alert)"
								class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
								Delete
							</button>
						</div>
					</div>
				</li>
			</ul>
			<!-- Show message if there are no menu items -->
			<p v-if="allMenuItemsData.length === 0" class="text-gray-600 mt-3">No menu items available</p>
		</main>

		<!-- Modal for adding -->
		<div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Add New Menu Item</h3>
						<div class="mt-5">
							<form @submit.prevent="addMenuItem($refs.Alert)">
								<div class="mb-4">
									<label for="name" class="block font-medium text-gray-700">Name:</label>
									<input
										type="text"
										v-model="newMenuItem.name"
										id="name"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<div class="mb-4">
									<label for="images" class="block font-medium text-gray-700">Images:</label>
									<input
										type="file"
										id="images"
										ref="fileInputRef"
										multiple
										@change="handleFileUpload"
										class="block w-full mt-2 py-2 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" />
									<div v-if="uploadedFiles.length > 0">
										<p class="block font-medium text-gray-700 my-2">Uploaded Files:</p>
										<ul>
											<li v-for="(fileName, index) in uploadedFiles" :key="index">{{ fileName }}</li>
										</ul>
									</div>
									<!-- Hidden input to store file names for submission -->
									<input type="hidden" name="fileNames" :value="fileNamesString" />
								</div>

								<div class="mb-4">
									<label for="category" class="block font-medium text-gray-700">Category:</label>
									<select
										v-model="newMenuItem.categoryId"
										id="category"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full">
										<option disabled selected>Select Category</option>
										<option v-for="category in allMenuCategoriesData" :key="category._id" :value="category._id">
											{{ category.name }}
										</option>
									</select>
								</div>

								<div class="mb-4">
									<label for="description" class="block font-medium text-gray-700">Description:</label>
									<textarea
										v-model="newMenuItem.description"
										id="description"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
								</div>

								<div class="mb-4">
									<label for="price" class="block font-medium text-gray-700">Price:</label>
									<input
										type="number"
										step="0.01"
										v-model.number="newMenuItem.price"
										id="price"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<button
									type="submit"
									class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
									Add Item
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

		<!-- Modal for editing -->
		<div :style="{ display: showModal2 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Edit Menu Item</h3>
						<div class="mt-5">
							<form @submit.prevent="updateMenuItem($refs.Alert)">
								<!-- Form fields go here -->
								<div class="mb-4">
									<label for="name" class="block font-medium text-gray-700">Name:</label>
									<input
										type="text"
										v-model="newMenuItem.name"
										id="name"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<div class="mb-4">
									<label for="images" class="block font-medium text-gray-700 mb-1">Current Images:</label>
									<div class="flex mb-4" v-show="showImages">
										<img
											v-for="(image, index) in newMenuItem.images"
											:key="index"
											:src="'http://localhost:5000/uploads/' + image"
											:alt="newMenuItem.name"
											class="w-24 h-18 object-cover rounded-md mr-2" />
									</div>

									<p class="block font-medium text-gray-700 mb-1">Replace the Images:</p>

									<input
										type="file"
										ref="fileInputRef2"
										multiple
										@change="editFileUpload"
										@click="imageDisplayOff"
										class="block w-full mt-2 py-2 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500" />

									<div v-if="uploadedFiles2.length > 0">
										<p class="block font-medium text-gray-700 my-2">Uploaded Files:</p>
										<ul>
											<li v-for="(fileName, index) in uploadedFiles2" :key="index">{{ fileName }}</li>
										</ul>
									</div>
									<!-- Hidden input to store file names for submission -->
									<input type="hidden" name="fileNames" :value="fileNamesString2" />
								</div>

								<div class="mb-4">
									<label for="category" class="block font-medium text-gray-700">Category:</label>

									<select
										v-model="newMenuItem.categoryId"
										id="category"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full">
										<option disabled selected>Select Category</option>
										<option v-for="category in allMenuCategoriesData" :key="category._id" :value="category._id">
											{{ category.name }}
										</option>
									</select>
								</div>

								<div class="mb-4">
									<label for="description" class="block font-medium text-gray-700">Description:</label>
									<textarea
										v-model="newMenuItem.description"
										id="description"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
								</div>

								<div class="mb-4">
									<label for="price" class="block font-medium text-gray-700">Price:</label>
									<input
										type="number"
										step="0.01"
										v-model.number="newMenuItem.price"
										id="price"
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
	</div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Alert from "@/components/Alert.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
	components: {
		Sidebar,
		Alert,
	},
	setup() {
		// Reactive variables
		const showModal1 = ref(false);
		const showModal2 = ref(false);
		const newMenuItem = ref({
			name: "",
			images: [],
			category: "",
			description: "",
			price: null,
			categoryId: "",
		});
		const allMenuItemsData = ref([]);
		const allMenuCategoriesData = ref([]);

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/menuitems");
				allMenuItemsData.value = response.data.menuItemData;
			} catch (error) {
				console.error("Error fetching menu items:", error);
			}
			try {
				const response = await axios.get("http://localhost:5000/api/menucategories");
				allMenuCategoriesData.value = response.data.menuCategoryData;
			} catch (error) {
				console.error("Error fetching menu categories:", error);
			}
		});

		// Add a new menu item
		const addMenuItem = async (alertRef) => {
			try {
				const response = await axios.post("http://localhost:5000/api/menuitems", {
					name: newMenuItem.value.name,
					images: uploadedFiles.value, // Include the images field
					description: newMenuItem.value.description,
					price: newMenuItem.value.price,
					categoryId: newMenuItem.value.categoryId,
				});
				allMenuItemsData.value.push(response.data.menuItemData);
				showModal1.value = false;
				resetForm();
				// Show success alert using the passed alertRef
				alertRef.showAlert("Menu item added successfully!", "success");
			} catch (error) {
				console.error("Error adding menu item:", error);
				// Show error alert using the passed alertRef if failed to add menu item
				alertRef.showAlert("Failed to add menu item. Please try again later.", "error");
			}
		};

		// Fetch a single menu item
		const getMenuItem = async (itemId, alertRef) => {
			try {
				const response = await axios.get(`http://localhost:5000/api/menuitems/${itemId}`);
				const variable = response.data.menuItemData;
				newMenuItem.value = {
					_id: variable._id,
					name: variable.name,
					images: variable.images,
					categoryId: variable.categoryId,
					description: variable.description,
					price: variable.price,
				};
				showModal2.value = true;
			} catch (error) {
				console.error("Error fetching menu item:", error);
				// Show alert if failed to fetch menu item details
				alertRef.showAlert("Failed to fetch menu item details. Please try again later.", "error");
			}
		};

		// Update a menu item
		const updateMenuItem = async (alertRef) => {
			try {
				const response = await axios.put(
					`http://localhost:5000/api/menuitems/${newMenuItem.value._id}`,
					newMenuItem.value
				);
				const updatedMenuItem = response.data.menuItemData;
				const updatedItemIndex = allMenuItemsData.value.findIndex((item) => item._id === updatedMenuItem._id);
				if (updatedItemIndex !== -1) {
					allMenuItemsData.value.splice(updatedItemIndex, 1, updatedMenuItem);
				}
				showModal2.value = false;
				resetForm();
				// Show success alert
				alertRef.showAlert("Menu item updated successfully!", "success");
			} catch (error) {
				console.error("Error updating menu item:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update menu item. Please try again later.", "error");
			}
		};

		// Delete a menu item
		const deleteMenuItem = async (itemId, alertRef) => {
			try {
				await axios.delete(`http://localhost:5000/api/menuitems/${itemId}`);
				allMenuItemsData.value = allMenuItemsData.value.filter((item) => item._id !== itemId);
				// Show success alert
				alertRef.showAlert("Menu item deleted successfully!", "success");
			} catch (error) {
				console.error("Error deleting menu item:", error);
				// Show error alert if failed to delete menu item
				alertRef.showAlert("Failed to delete menu item. Please try again later.", "error");
			}
		};

		// Reset form fields
		const resetForm = () => {
			newMenuItem.value = {
				_id: null,
				name: "",
				images: "",
				category: "",
				description: "",
				price: 0.0,
			};
			uploadedFiles.value = []; // Clear the uploaded files
			uploadedFiles2.value = []; // Clear the uploaded files

			// Reset the file input field
			if (fileInputRef.value) {
				fileInputRef.value.value = ""; // Reset the value of the file input field
			}
			if (fileInputRef2.value) {
				fileInputRef2.value.value = ""; // Reset the value of the file input field
			}
		};

		const uploadedFiles = ref([]);
		const fileInputRef = ref(null);

		// Handle file upload
		const handleFileUpload = async () => {
			const files = fileInputRef.value.files;
			const formData = new FormData();

			for (let i = 0; i < files.length; i++) {
				formData.append("files", files[i]);
			}
			try {
				const response = await axios.post("http://localhost:5000/api/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				const uploadedFileNames = response.data.fileNames;
				uploadedFiles.value = uploadedFileNames;
				newMenuItem.value.images = uploadedFileNames;
				console.log("Files uploaded successfully:", uploadedFileNames);
			} catch (error) {
				console.error("Error uploading files:", error);
			}
		};

		// Computed property to generate comma-separated string of file names
		const fileNamesString = computed(() => uploadedFiles.value.join(","));

		const uploadedFiles2 = ref([]);
		const fileInputRef2 = ref(null);

		// Edit file upload
		const editFileUpload = async () => {
			const files = fileInputRef2.value.files;
			const formData = new FormData();

			for (let i = 0; i < files.length; i++) {
				formData.append("files", files[i]);
			}
			try {
				const response = await axios.post("http://localhost:5000/api/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				const uploadedFileNames2 = response.data.fileNames;
				uploadedFiles2.value = uploadedFileNames2;
				newMenuItem.value.images = uploadedFileNames2;
				console.log("Files uploaded successfully:", uploadedFileNames2);
			} catch (error) {
				console.error("Error uploading files:", error);
			}
		};

		// Computed property to generate comma-separated string of file names
		const fileNamesString2 = computed(() => uploadedFiles2.value.join(","));

		const showImages = ref(true);

		const imageDisplayOff = () => {
			showImages.value = false;
		};
		const imageDisplayOn = () => {
			showImages.value = true;
		};

		return {
			showModal1,
			showModal2,
			newMenuItem,
			allMenuItemsData,
			allMenuCategoriesData,
			getMenuItem,
			updateMenuItem,
			addMenuItem,
			deleteMenuItem,
			resetForm,
			uploadedFiles,
			fileInputRef,
			handleFileUpload,
			fileNamesString,
			uploadedFiles2,
			fileInputRef2,
			editFileUpload,
			fileNamesString2,
			showImages,
			imageDisplayOff,
			imageDisplayOn,
		};
	},
};
</script>

<style></style>
