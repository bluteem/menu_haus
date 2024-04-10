<template>
	<div class="flex h-screen overflow-hidden">
		<Sidebar />

		<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-200">
			<h1 class="text-3xl font-bold mb-4">File Manager</h1>

			<!-- Add Menu Item Button -->
			<button
				@click="showModal1 = true"
				class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 border-b border-gray-300 mb-4">
				Add New File
			</button>

			<!-- Display style toggle buttons -->
			<div class="flex justify-end mb-4">
				<button
					@click="setDisplayStyle('grid')"
					:class="{
						'bg-blue-500 text-white border-y border-l border-gray-600': displayStyle === 'grid',
						'bg-gray-200 text-gray-700 border-y border-l border-gray-600': displayStyle !== 'grid',
					}"
					class="px-4 py-2 rounded-l-md focus:outline-none">
					Grid View
				</button>
				<button
					@click="setDisplayStyle('list')"
					:class="{
						'bg-blue-500 text-white border-y border-r border-gray-600': displayStyle === 'list',
						'bg-gray-200 text-gray-700 border-y border-r border-gray-600': displayStyle !== 'list',
					}"
					class="px-4 py-2 rounded-r-md focus:outline-none">
					List View
				</button>
			</div>

			<!-- Display files based on selected style -->

			<div v-if="displayStyle === 'list'">
				<!-- List view -->
				<table class="min-w-full border text-center border-neutral-300">
					<thead class="border-b font-medium border-neutral-300">
						<tr>
							<th scope="col" class="border-r px-6 py-4 border-neutral-300">Thumbnail</th>
							<th scope="col" class="border-r px-6 py-4 border-neutral-300">File Name</th>
							<th scope="col" class="border-r px-6 py-4 border-neutral-300">Type</th>
							<th scope="col" class="border-r px-6 py-4 border-neutral-300">Size</th>
							<th scope="col" class="px-6 py-4"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="file in allFilesData" :key="file._id" class="border-b border-neutral-300">
							<td class="border-r px-6 py-4 border-neutral-300">
								<img
									:src="'http://localhost:5000/uploads/' + file.filePath"
									alt="File"
									class="w-full h-12 object-cover rounded-md" />
							</td>
							<td class="border-r px-6 py-4 border-neutral-300">
								<div class="text-gray-900">{{ file.fileName }}</div>
							</td>
							<td class="border-r px-6 py-4 border-neutral-300">
								<div class="text-gray-900">{{ file.fileType }}</div>
							</td>
							<td class="border-r px-6 py-4 border-neutral-300">
								<div class="text-gray-900">{{ formattedFileSize(file.fileSize) }}</div>
							</td>
							<td class="border-r px-6 py-4 border-neutral-300">
								<button
									@click="getFile(file._id, $refs.Alert)"
									type="button"
									class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
									Edit
								</button>
								<button
									@click="deleteFile(file._id, $refs.Alert)"
									class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div v-else-if="displayStyle === 'grid'" class="grid grid-cols-3 gap-4">
				<!-- Grid view -->
				<div v-for="file in allFilesData" :key="file._id" class="bg-white p-4 shadow-md rounded-md">
					<img
						:src="'http://localhost:5000/uploads/' + file.filePath"
						alt="File"
						class="w-full h-32 object-cover mb-2" />
					<p class="font-semibold text-gray-800">{{ file.fileName }}</p>
					<p class="text-sm text-gray-600">{{ file.fileSize }}</p>
					<button
						@click="getFile(file._id, $refs.Alert)"
						type="button"
						class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
						Edit
					</button>
					<button
						@click="deleteFile(file._id, $refs.Alert)"
						class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
						Delete
					</button>
				</div>
			</div>

			<!-- Show message if there are no menu items -->
			<p v-if="allFilesData.length === 0" class="text-gray-600 mt-3">No file available</p>
		</main>

		<!-- Modal for adding -->
		<div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Add New File</h3>
						<div class="mt-5">
							<form @submit.prevent="addFile($refs.Alert)">
								<div class="mb-4">
									<label for="file" class="block font-medium text-gray-700">New File:</label>
									<input
										type="file"
										ref="fileInput"
										@change="handleFileUpload"
										id="file"
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>
								<button
									type="submit"
									class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
									Add File
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
						<h3 class="text-lg leading-6 font-medium text-gray-900">Edit File Info</h3>
						<div class="mt-5">
							<form @submit.prevent="updateFile($refs.Alert)">
								<div class="mb-4">
									<label for="editFileName" class="block font-medium text-gray-700">File Name:</label>
									<input
										type="text"
										v-model="newFile.originalName"
										id="editName"
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
import { ref, onMounted } from "vue";
import axios from "axios";
import Alert from "@/components/Alert.vue";
import Sidebar from "../components/Sidebar.vue";
import prettyBytes from "pretty-bytes";

export default {
	components: {
		Sidebar,
		Alert,
	},
	setup(props) {
		// Reactive variables
		const showModal1 = ref(false);
		const showModal2 = ref(false);

		const newFile = ref({
			fileName: "",
			fileType: "",
			filePath: "",
		});
		const allFilesData = ref([]);

		const formattedFileSize = (fileSize) => {
			if (fileSize === null || fileSize === undefined) {
				return "N/A"; // Return black if size is null or undefined
			}
			return prettyBytes(fileSize, { locale: "en" }); // Use prettyBytes if value is present
		};

		// Fetch files when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/files");
				allFilesData.value = response.data.fileData;
			} catch (error) {
				console.error("Error fetching files:", error);
			}
		});

		const fileInput = ref(null);
		const selectedFile = ref(null);

		const handleFileUpload = () => {
			const file = fileInput.value.files[0];
			selectedFile.value = file;
		};

		// Add a new menu item
		const addFile = async (alertRef) => {
			try {
				const formData = new FormData();
				formData.append("file", selectedFile.value);
				const response = await axios.post("http://localhost:5000/api/files/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});

				const response2 = await axios.get("http://localhost:5000/api/files");
				allFilesData.value = response2.data.fileData;
				showModal1.value = false;
				resetForm();
				// Show success alert using the passed alertRef
				alertRef.showAlert("File added successfully!", "success");
			} catch (error) {
				console.error("Error adding file:", error);
				// Show error alert using the passed alertRef if failed to add menu item
				alertRef.showAlert("Failed to add file. Please try again later.", "error");
			}
		};

		const displayStyle = ref("list");
		// Method to set display style
		const setDisplayStyle = (style) => {
			displayStyle.value = style;
		};

		// Fetch a single file
		const getFile = async (itemId, alertRef) => {
			try {
				const response = await axios.get(`http://localhost:5000/api/files/${itemId}`);
				const variable = response.data.fileData;
				newFile.value = {
					_id: variable._id,
					fileName: variable.fileName,
					fileType: variable.fileType,
					filePath: variable.filePath,
				};
				showModal2.value = true;
			} catch (error) {
				console.error("Error fetching file:", error);
				// Show alert if failed to fetch file details
				alertRef.showAlert("Failed to fetch file details. Please try again later.", "error");
			}
		};

		// Update a file info
		const updateFile = async (alertRef) => {
			try {
				// Send a PUT request to update file info
				const response = await axios.put(`http://localhost:5000/api/files/${newFile.value._id}`, newFile.value);
				// Extract updated file data from the response
				const updatedFile = response.data.fileData;
				// Find the index of the updated file in the files array
				const updatedFileIndex = allFilesData.value.findIndex((item) => item._id === updatedFile._id);
				// If the updated file index is found
				if (updatedFileIndex !== -1) {
					allFilesData.value.splice(updatedFileIndex, 1, updatedFile);
				}
				// Hide the modal for editing file info
				showModal2.value = false;
				resetForm();
				// Show success alert
				alertRef.showAlert("File info updated successfully!", "success");
			} catch (error) {
				console.error("Error updating file info:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update file info. Please try again later.", "error");
			}
		};

		// Delete a menu item
		const deleteFile = async (itemId, alertRef) => {
			try {
				await axios.delete(`http://localhost:5000/api/files/${itemId}`);
				allFilesData.value = allFilesData.value.filter((item) => item._id !== itemId);
				// Show success alert
				alertRef.showAlert("File deleted successfully!", "success");
			} catch (error) {
				console.error("Error deleting file:", error);
				// Show error alert if failed to delete menu item
				alertRef.showAlert("Failed to delete file. Please try again later.", "error");
			}
		};

		// Reset form fields
		const resetForm = () => {
			newFile.value = {
				_id: null,
				originalName: "",
				mimeType: "",
				storagePath: "",
			};
		};

		return {
			showModal1,
			showModal2,
			newFile,
			allFilesData,
			formattedFileSize,
			fileInput,
			selectedFile,
			handleFileUpload,
			getFile,
			updateFile,
			addFile,
			deleteFile,
			resetForm,
			displayStyle,
			setDisplayStyle,
		};
	},
};
</script>

<style></style>
