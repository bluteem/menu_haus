<template>
	<div
		v-if="alertMessage"
		class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-20 sm:items-start sm:justify-end z-50">
		<div class="max-w-sm w-full bg-indigo-100 shadow-lg rounded-lg pointer-events-auto">
			<div class="rounded-lg shadow-xs overflow-hidden">
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg
								class="h-5 w-5"
								fill="#f7761c"
								height="800px"
								width="800px"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 285.67 285.67">
								<g>
									<g>
										<g>
											<path
												d="M209.195,108.09c-2.761,0-5,2.239-5,5v71.66c0,2.761,2.239,5,5,5s5-2.239,5-5v-71.66
				C214.195,110.329,211.956,108.09,209.195,108.09z" />
											<path
												d="M205.821,79.494c-3.304-6.174-7.522-11.848-12.538-16.864c-1.951-1.952-5.118-1.953-7.071,0s-1.953,5.118,0,7.071
				c4.321,4.322,7.953,9.205,10.793,14.512c1.302,2.433,4.331,3.353,6.768,2.049C206.207,84.959,207.124,81.929,205.821,79.494z" />
											<path
												d="M244.03,241.436l-9.835-37.333V113.09c0-40.349-26.387-75.719-64.657-87.393C168.967,11.221,157.074,0,142.835,0
				c-14.242,0-26.131,11.224-26.703,25.695C77.864,37.351,51.475,72.722,51.475,113.09v91.013l-9.835,37.333
				c-0.834,3.168,1.557,6.274,4.835,6.274h53.7c2.486,21.34,20.664,37.96,42.66,37.96c21.996,0,40.173-16.62,42.66-37.96h53.7
				C242.47,247.71,244.864,244.606,244.03,241.436z M142.835,10c8.043,0,14.77,5.716,16.365,13.19
				c-5.027-0.91-10.736-1.463-16.312-1.466c-0.018,0-0.035-0.001-0.053-0.001c-0.019,0-0.037,0.001-0.056,0.001
				c-5.573,0.003-11.382,0.574-16.309,1.466C128.07,15.696,134.811,10,142.835,10z M61.475,113.09
				c0-37.159,25.103-69.566,61.044-78.807c13.422-3.448,27.547-3.362,40.632,0c0.001,0,0.001,0,0.002,0
				c35.941,9.26,61.042,41.666,61.042,78.807v86.66H61.475V113.09z M142.835,275.67c-16.475,0-30.165-12.15-32.581-27.96h65.163
				C173,263.52,159.31,275.67,142.835,275.67z M52.963,237.71l7.366-27.96h165.013l7.366,27.96
				C227.55,237.71,73.787,237.71,52.963,237.71z" />
										</g>
									</g>
								</g>
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
			}, 50000); // 5000 milliseconds = 5 seconds
		},

		dismissAlert() {
			this.alertMessage = "";
		},
	},
};
</script>

<style></style>
