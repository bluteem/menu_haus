<template>
	<div class="flex h-screen overflow-hidden">
		<!-- <DashboardNavbar /> -->

		<Sidebar />

		<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-200">
			<h1 class="text-3xl font-bold mb-4">Tables</h1>

			<!-- Add Menu Item Button -->
			<button
				@click="showModal1 = true"
				class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 border-b border-gray-300 mb-4">
				Add New Table
			</button>

			<div class="flex flex-col">
				<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div class="overflow-hidden">
							<table class="min-w-full border text-center font-light border-neutral-300">
								<thead class="border-b font-medium border-neutral-300">
									<tr>
										<th scope="col" class="border-r px-6 py-4 border-neutral-300">Name</th>
										<th scope="col" class="border-r px-6 py-4 border-neutral-300">Number</th>
										<th scope="col" class="border-r px-6 py-4 border-neutral-300">QR Code</th>
										<th scope="col" class="px-6 py-4"></th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="table in allTablesData" :key="table._id" class="border-b border-neutral-300">
										<td class="whitespace-nowrap border-r px-6 py-4 border-neutral-300">
											<div class="text-gray-900">{{ table.tableName }}</div>
										</td>
										<td class="border-r px-6 py-4 border-neutral-300">
											<div class="text-gray-900">{{ table.tableNumber }}</div>
										</td>
										<td class="border-r px-6 py-4 border-neutral-300">
											<div class="text-gray-900">{{ table.qrCode }}</div>
										</td>
										<td class="whitespace-nowrap border-r px-6 py-4 border-neutral-300">
											<button
												@click="getTable(table._id, $refs.Alert)"
												type="button"
												class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
												Edit
											</button>
											<button
												@click="deleteTable(table._id, $refs.Alert)"
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
			<p v-if="allTablesData.length === 0" class="text-gray-600 mt-3">No table available</p>
		</main>

		<!-- Modal for adding -->
		<div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Add New Table</h3>
						<div class="mt-5">
							<form @submit.prevent="addTable($refs.Alert)">
								<div class="mb-4">
									<label for="newTableName" class="block font-medium text-gray-700">Table Name:</label>
									<input
										type="text"
										v-model="newTable.tableName"
										id="newTableName"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<div class="mb-4">
									<label for="newTableNumber" class="block font-medium text-gray-700">Table Number:</label>
									<input
										type="text"
										v-model="newTable.tableNumber"
										id="newTableNumber"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<div class="mb-4">
									<div class="container mx-auto border border-gray-300 rounded-md">
										<div class="grid grid-cols-2 gap-4">
											<!-- First column -->
											<div class="col-span-1 px-4 pt-6 pb-5">
												<a
													href="#"
													@click="generateQrCode"
													class="px-4 py-2 my-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
													>Generate QR Code</a
												>
											</div>
											<!-- Second column -->
											<div class="col-span-1 p-4">
												<QRCodeVue3
													v-if="showQRCode"
													:width="1000"
													:height="1000"
													:value="urlForQrCode"
													:qrOptions="{
														typeNumber: 0,
														mode: 'Byte',
														errorCorrectionLevel: 'H',
													}"
													:imageOptions="{
														hideBackgroundDots: true,
														imageSize: 0.4,
														margin: 10,
													}"
													:dotsOptions="{
														type: 'extra-rounded',
														color: '#6A1A4C',
														gradient: {
															type: 'linear',
															rotation: 0,
															colorStops: [
																{ offset: 0, color: '#6A1A4C' },
																{ offset: 1, color: '#6A1A4C' },
															],
														},
													}"
													:backgroundOptions="{ color: '#ffffff' }"
													:cornersSquareOptions="{ type: 'extra-rounded', color: '#000000' }"
													:cornersDotOptions="{ type: 'extra-rounded', color: '#000000' }"
													fileExt="png"
													:download="true"
													myclass="my-qur mb-4"
													imgclass="img-qr"
													downloadButton="my-button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
													:downloadOptions="{ name: 'vqr', extension: 'png' }" />
											</div>
										</div>
									</div>
								</div>

								<button
									type="submit"
									class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
									Add Table
								</button>
							</form>
						</div>
					</div>
					<div class="bg-gray-50 px-5 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
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
						<h3 class="text-lg leading-6 font-medium text-gray-900">Edit Table Info</h3>
						<div class="mt-5">
							<form @submit.prevent="updateTable($refs.Alert)">
								<div class="mb-4">
									<label for="editTableName" class="block font-medium text-gray-700">Table Name:</label>
									<input
										type="text"
										v-model="newTable.tableName"
										id="editTableName"
										required
										class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
								</div>

								<div class="mb-4">
									<label for="editTableNumber" class="block font-medium text-gray-700">Table Number:</label>
									<input
										type="text"
										v-model="newTable.tableNumber"
										id="editTableNumber"
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
import { ref, computed, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import Alert from "@/components/Alert.vue";
import QRCodeVue3 from "qrcode-vue3";
import Sidebar from "../components/Sidebar.vue";

export default {
	components: {
		Sidebar,
		Alert,
		QRCodeVue3,
	},
	setup() {
		// Reactive variables
		const showModal1 = ref(false);
		const showModal2 = ref(false);
		const newTable = ref({
			tableName: "",
			tableNumber: null,
			qrCode: "",
			status: "",
		});
		const allTablesData = ref([]);

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/tables");
				allTablesData.value = response.data.tableData;
			} catch (error) {
				console.error("Error fetching tables:", error);
			}
		});

		// Add a new menu item
		const addTable = async (alertRef) => {
			try {
				const response = await axios.post("http://localhost:5000/api/tables", {
					tableName: newTable.value.tableName,
					tableNumber: newTable.value.tableNumber,
					qrCode: newTable.value.qrCode,
				});
				allTablesData.value.push(response.data.tableData);
				showModal1.value = false;
				resetForm();
				// Show success alert using the passed alertRef
				alertRef.showAlert("Table added successfully!");
			} catch (error) {
				console.error("Error adding table:", error);
				// Show error alert using the passed alertRef if failed to add menu item
				alertRef.showAlert("Failed to add table. Please try again later.");
			}
		};

		// Fetch a single menu item
		const getTable = async (itemId, alertRef) => {
			try {
				const response = await axios.get(`http://localhost:5000/api/tables/${itemId}`);
				const variable = response.data.tableData;
				newTable.value = {
					_id: variable._id,
					tableName: variable.tableName,
					tableNumber: variable.tableNumber,
					qrCode: variable.qrCode,
				};
				showModal2.value = true;
			} catch (error) {
				console.error("Error fetching table:", error);
				// Show alert if failed to fetch menu item details
				alertRef.showAlert("Failed to fetch table details. Please try again later.");
			}
		};

		// Update a table info
		const updateTable = async (alertRef) => {
			try {
				// Send a PUT request to update table info
				const response = await axios.put(`http://localhost:5000/api/tables/${newTable.value._id}`, newTable.value);
				// Extract updated table data from the response
				const updatedTable = response.data.tableData;
				// Find the index of the updated table in the tables array
				const updatedTableIndex = allTablesData.value.findIndex((item) => item._id === updatedTable._id);
				// If the updated table index is found
				if (updatedTableIndex !== -1) {
					allTablesData.value.splice(updatedTableIndex, 1, updatedTable);
				}
				// Hide the modal for editing table info
				showModal2.value = false;
				resetForm();
				// Show success alert
				alertRef.showAlert("Table info updated successfully!");
			} catch (error) {
				console.error("Error updating table info:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update table info. Please try again later.");
			}
		};

		// Delete a table
		const deleteTable = async (itemId, alertRef) => {
			try {
				await axios.delete(`http://localhost:5000/api/tables/${itemId}`);
				allTablesData.value = allTablesData.value.filter((item) => item._id !== itemId);
				// Show success alert
				alertRef.showAlert("Table deleted successfully!");
			} catch (error) {
				console.error("Error deleting table:", error);
				// Show error alert if failed to delete menu item
				alertRef.showAlert("Failed to delete table. Please try again later.");
			}
		};

		const showQRCode = ref(false);
		const urlForQrCode = ref("https://maps.app.goo.gl/wkmvfL5Dq8XvimCh6");

		const generateQrCode = () => {
			// Set qrValue based on your logic, e.g., fetch from an API
			urlForQrCode.value = "https://maps.app.goo.gl/wkmvfL5Dq8XvimCh6";
			showQRCode.value = true; // Show the QR code
		};

		// Reset form fields
		const resetForm = () => {
			newTable.value = {
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
			newTable,
			allTablesData,
			getTable,
			updateTable,
			addTable,
			deleteTable,
			generateQrCode,
			showQRCode,
			urlForQrCode,
			resetForm,
		};
	},
};
</script>

<style>
.img-qr {
	width: 10rem;
}
</style>
