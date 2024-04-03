<template>
	<button
		v-show="showScrollButton"
		@click="scrollToTop"
		class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow hover:bg-blue-600 transition-opacity duration-300">
		<svg
			fill="#fff"
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			data-name="Flat Line"
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5">
			<polyline
				id="primary"
				points="21 18 12 6 3 18"
				style="
					fill: none;
					stroke: rgb(255, 255, 255);
					stroke-linecap: round;
					stroke-linejoin: round;
					stroke-width: 4;
				"></polyline>
		</svg>
	</button>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
	name: "ScrollUpButton",
	setup() {
		const showScrollButton = ref(false);

		const checkScrollPosition = () => {
			showScrollButton.value = window.pageYOffset > 100;
		};

		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		};

		const handleScroll = () => {
			checkScrollPosition();
		};

		onMounted(() => {
			window.addEventListener("scroll", handleScroll);
		});

		onBeforeUnmount(() => {
			window.removeEventListener("scroll", handleScroll);
		});

		return {
			showScrollButton,
			scrollToTop,
		};
	},
};
</script>

<style scoped>
.scroll-up-button[v-show="false"] {
	opacity: 0;
}
</style>
