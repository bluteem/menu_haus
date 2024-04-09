<template>
	<div class="min-h-screen flex items-center justify-center w-10/12 m-auto">
		<!-- Right Layout (Both Mobile and Desktop) -->
		<div class="w-full p-4 md:p-8">
			<img :src="logo" class="w-28 h-28 mb-8 mr-6 inline-block" alt="" />
			<h1 class="text-6xl font-bold text-gray-800 inline-block mb-8">:</h1>
			<p class="text-xl md:text-2xl text-gray-600 mb-8">
				Your email has been successfully <span class="font-bold text-gray-800">verified</span>.
			</p>
			<a
				href="/dashboard"
				class="px-6 py-3 bg-blue-500 text-white text-xl rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out"
				>Go to Dashboard</a
			>
		</div>
	</div>
</template>

<script>
import logo from "../assets/logo.svg";
export default {
	data() {
		return {
			logo: logo,
		};
	},
};
</script>

<style></style>
