<template>
	<div class="line-chart-container">
		<canvas ref="chartCanvas"></canvas>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Line } from "vue-chartjs";

export default {
	extends: Line,
	props: ["chartData", "options"],
	setup(props) {
		const chartRef = ref(null);

		onMounted(() => {
			if (chartRef.value) {
				new Line(chartRef.value, {
					data: props.chartData,
					options: props.options,
				});
			}
		});

		return { chartRef };
	},
};
</script>

<style scoped>
.line-chart-container {
	width: 100%;
	height: 300px; /* Adjust height as needed */
}
</style>
