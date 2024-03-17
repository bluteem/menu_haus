<!-- MenuItems.vue -->
<template>
	<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-200">
		<h1 class="text-3xl font-bold mb-4">Settings</h1>

		<div class="border-b border-gray-300 mt-1"></div>

		<ul>
			<li
				v-for="businessInfo in allBusinessData"
				:key="businessInfo._id"
				class="flex items-center border-b border-gray-300 pt-2 pb-4">
				<div class="flex">
					{{ businessInfo.name }}
				</div>
			</li>
		</ul>
	</main>

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
		const allBusinessData = ref([]);
		const newBusinessInfo = ref({
			name: "",
			type: "",
			address: "",
			phones: "",
			emails: "",
			website: "",
			socials: "",
			images: "",
		});

		// Fetch business info when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/businesses");
				allBusinessData.value = response.data.businessData;
			} catch (error) {
				console.error("Error fetching menu items:", error);
			}
		});

		// Update business info
		const updateBusinessInfo = async (alertRef) => {
			try {
				const response = await axios.put(`http://localhost:5000/api/businesses/${itemId}`, newBusinessInfo.value);
				const updatedBusinessInfo = response.data.businessData;
				const updatedItemIndex = businessData.value.findIndex((item) => item._id === updatedBusinessInfo._id);
				if (updatedItemIndex !== -1) {
					businessData.value.splice(updatedItemIndex, 1, updatedBusinessInfo);
				}
				// Show success alert
				alertRef.showAlert("Business info updated successfully!");
			} catch (error) {
				console.error("Error updating business info:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update business info. Please try again later.");
			}
		};

		return {
			newBusinessInfo,
			updateBusinessInfo,
		};
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
