<template>
	<div
		v-if="isVisible"
		:class="{ 'bg-green-100': isSuccess, 'bg-red-100': isError }"
		class="fixed bottom-0 left-0 w-full p-4 flex justify-center items-center">
		<div class="flex items-center">
			<svg
				v-if="isSuccess"
				class="h-6 w-6 text-green-600 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			<svg
				v-if="isError"
				class="h-6 w-6 text-red-600 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
			<p class="text-sm font-medium text-gray-800">{{ message }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "Alert",
	props: {
		message: String,
		type: String,
	},
	setup(props) {
		const isVisible = ref(false);
		const isSuccess = ref(false);
		const isError = ref(false);

		if (props.type === "success") {
			isSuccess.value = true;
			isError.value = false;
		} else if (props.type === "error") {
			isSuccess.value = false;
			isError.value = true;
		}
		isVisible.value = true;
		setTimeout(() => {
			isVisible.value = false;
		}, 3000); // Hide after 3 seconds

		return {
			isVisible,
			isSuccess,
			isError,
		};
	},
};
</script>

<style scoped>
/* Add Tailwind styles here */
</style>
