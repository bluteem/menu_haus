<template>
	<div
		v-if="alertMessage"
		class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-20 sm:items-start sm:justify-end z-50">
		<div
			:class="{
				'bg-green-100': alertType === 'success',
				'bg-red-100': alertType === 'error',
			}"
			class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto">
			<div class="rounded-lg shadow-xs overflow-hidden">
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg
								v-if="alertType === 'success'"
								class="h-6 w-6 text-green-500"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
							<svg
								v-else-if="alertType === 'error'"
								class="h-6 w-6 text-red-500"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z" />
								<circle cx="12" cy="16" r="1.3" />
								<path
									d="M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z" />
							</svg>
						</div>
						<div class="ml-3 w-0 flex-1 pt-0.5">
							<p class="text-md leading-5 font-large text-gray-900" v-html="alertMessage"></p>
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
	name: "Alert",
	data() {
		return {
			alertMessage: "",
		};
	},
	methods: {
		showAlert(type, message) {
			this.alertMessage = message;
			setTimeout(() => {
				this.dismissAlert();
			}, 2000); // 5000 milliseconds = 5 seconds
		},

		dismissAlert() {
			this.alertMessage = "";
		},
	},
};
</script>

<style></style>
