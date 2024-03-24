<template>
	<div
		v-if="alertMessage"
		class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-20 sm:items-start sm:justify-end z-50">
		<div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
			<div class="rounded-lg shadow-xs overflow-hidden">
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg
								class="h-6 w-6 text-green-400"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div class="ml-3 w-0 flex-1 pt-0.5">
							<p class="text-sm leading-5 font-medium text-gray-900" v-html="alertMessage"></p>
						</div>
						<div class="ml-4 flex-shrink-0 flex">
							<button
								@click="dismissAlert"
								class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
								<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M14.293 5.293a1 1 0 0 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 1.414-1.414L10 8.586l4.293-4.293z"
										clip-rule="evenodd" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			alertMessage: "",
		};
	},
	methods: {
		showAlert(message) {
			this.alertMessage = message;
			setTimeout(() => {
				this.dismissAlert();
			}, 1200); // 5000 milliseconds = 5 seconds
		},

		dismissAlert() {
			this.alertMessage = "";
		},
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
