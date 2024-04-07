<template>
	<div
		v-if="alertMessage"
		:class="{ 'bg-green-200': alertType === 'success', 'bg-red-200': alertType === 'error' }"
		class="fixed bottom-0 w-full p-4 z-50">
		<div class="flex justify-center items-center">
			<svg
				v-if="alertType === 'success'"
				class="h-6 w-6 text-green-600 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			<svg
				v-if="alertType === 'error'"
				class="h-6 w-6 text-red-600 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
			<p class="inline text-xl text-gray-800" v-html="alertMessage"></p>
		</div>
		<div class="absolute right-5 bottom-0 flex items-center h-full">
			<button
				@click="dismissAlert"
				class="text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
				<svg
					class="h-6 w-6 text-gray-700 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Alert",
	data() {
		return {
			alertMessage: "",
			alertType: "",
		};
	},
	methods: {
		showAlert(message, type) {
			this.alertMessage = message;
			this.alertType = type;
			setTimeout(() => {
				this.dismissAlert();
			}, 20000); // 5000 milliseconds = 5 seconds
		},

		dismissAlert() {
			this.alertMessage = "";
			this.alertType = "";
		},
	},
};
</script>

<style scoped>
/* Add Tailwind styles here */
</style>
