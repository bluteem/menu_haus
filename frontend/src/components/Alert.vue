<template>
	<div
		v-if="alertMessage"
		:class="{ 'bg-green-200': alertType === 'success', 'bg-red-200': alertType === 'error' }"
		class="fixed bottom-0 w-full p-4 z-50">
		<div class="flex justify-center items-center">
			<svg
				v-if="alertType === 'success'"
				class="h-7 w-7 text-green-600 mr-2"
				fill="currentColor"
				stroke-width="2"
				stroke="currentColor"
				viewBox="0 0 48 48">
				<g>
					<g>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z" />
					</g>
				</g>
			</svg>
			<svg
				v-if="alertType === 'error'"
				class="h-6 w-6 text-red-600 mr-2"
				fill="currentColor"
				viewBox="0 0 489 489"
				stroke="currentColor"
				stroke-width="2">
				<g>
					<g>
						<path
							d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.7,489,244.5S379.7,0,244.5,0z M244.5,448.4
			c-112.4,0-203.9-91.5-203.9-203.9S132.1,40.6,244.5,40.6s203.9,91.5,203.9,203.9S356.9,448.4,244.5,448.4z" />
						<path
							d="M354.8,134.2c-8.3-8.3-20.8-8.3-29.1,0l-81.2,81.2l-81.1-81.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l81.1,81.1
			l-81.1,81.1c-8.3,8.3-8.6,21.1,0,29.1c6.5,6,18.8,10.4,29.1,0l81.1-81.1l81.1,81.1c12.4,11.7,25,4.2,29.1,0
			c8.3-8.3,8.3-20.8,0-29.1l-81.1-81.1l81.1-81.1C363.1,155,363.1,142.5,354.8,134.2z" />
					</g>
				</g>
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
			}, 1500); // 5000 milliseconds = 5 seconds
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
