<template>
	<div class="flex h-screen overflow-hidden">
		<Sidebar />

		<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10 bg-gray-200">
			<h1 class="text-3xl font-bold mb-4">Dashboard</h1>

			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				<!-- Box for Number of Tables -->
				<div class="bg-white px-6 py-6 rounded-md shadow-md flex items-center justify-between">
					<div>
						<span class="font-bold text-3xl">{{ numberOfTables }}</span>
						<p class="text-sm text-gray-500 font-semibold">Tables</p>
					</div>
					<div class="rounded-full bg-gray-200 p-3">
						<svg class="w-7 h-7 text-sky-600" fill="currentColor" viewBox="0 0 50 50">
							<path
								d="M17.965 41.737L15.309 32H16c.552 0 1-.447 1-1s-.448-1-1-1H9.432c-1.491 0-2.738-1.069-2.965-2.544l-1.478-9.608c-.084-.546-.601-.919-1.14-.836-.546.084-.92.595-.836 1.141l1.478 9.608c.289 1.88 1.578 3.357 3.28 3.951L5.035 41.737c-.145.532.169 1.082.702 1.228C5.825 42.989 5.914 43 6 43c.44 0 .843-.292.964-.737L9.764 32h3.473l2.799 10.263C16.157 42.708 16.56 43 17 43c.087 0 .176-.011.264-.035C17.796 42.819 18.11 42.27 17.965 41.737zM40 28H45V43H40zM20 28H25V43H20zM46 22h-1-4.953c.099-.651.38-1.287.845-1.862C41.606 19.253 42 18.139 42 17c0-1.579-.743-3.055-2-3.998V9h-6v4.002c-1.257.943-2 2.419-2 3.998h3v3.5c0 .54-.135 1.044-.354 1.5H31.5c.827 0 1.5-.673 1.5-1.5V19h-8v1.5c0 .827.673 1.5 1.5 1.5H20h-1c-.552 0-1 .447-1 1s.448 1 1 1h1v2h25v-2h1c.552 0 1-.447 1-1S46.552 22 46 22z" />
						</svg>
					</div>
				</div>

				<!-- Box for Number of Menu Categories -->
				<div class="bg-white px-6 py-6 rounded-md shadow-md flex items-center justify-between">
					<div>
						<span class="font-bold text-3xl">{{ numberOfMenuCategories }}</span>
						<p class="text-sm text-gray-500 font-semibold">Menu Categories</p>
					</div>
					<div class="rounded-full bg-gray-200 p-3">
						<svg
							class="w-7 h-7"
							fill="#3C50E0"
							height="24"
							width="24"
							viewBox="0 0 48 48"
							xmlns="http://www.w3.org/2000/svg">
							<g id="Layer_2" data-name="Layer 2">
								<g id="invisible_box" data-name="invisible box">
									<rect width="48" height="48" fill="none" />
								</g>
								<g id="icons_Q2" data-name="icons Q2">
									<path d="M24,10h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,10Z" />
									<path d="M24,24h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,24Z" />
									<path d="M24,38h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,38Z" />
									<path
										d="M12,2a2.1,2.1,0,0,0-1.7,1L4.2,13a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H18a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-6-10A1.9,1.9,0,0,0,12,2Z" />
									<path d="M12,30a6,6,0,1,1,6-6A6,6,0,0,1,12,30Z" />
									<path d="M16,44H8a2,2,0,0,1-2-2V34a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v8A2,2,0,0,1,16,44Z" />
								</g>
							</g>
						</svg>
					</div>
				</div>

				<!-- Box for Number of Menu Items -->
				<div class="bg-white px-6 py-6 rounded-md shadow-md flex items-center justify-between">
					<div>
						<span class="font-bold text-3xl">{{ numberOfMenuItems }}</span>
						<p class="text-sm text-gray-500 font-semibold">Menu Items</p>
					</div>
					<div class="rounded-full bg-gray-200 p-3">
						<svg class="w-7 h-7 text-sky-600" fill="currentColor" viewBox="0 0 576.3 576.301">
							<g>
								<g id="Layer_1_144_">
									<g>
										<path
											d="M264.563,494.699c7.65,1.275,15.3,1.275,24.225,1.275s17.85,0,26.775-1.275l3.825-124.949
				c-7.65-3.824-15.3-8.926-21.675-15.301c-11.476-12.75-17.851-29.324-16.575-47.174l6.375-85.425
				c-7.65,10.2-17.85,17.85-30.6,22.95L264.563,494.699z" />
										<path
											d="M446.888,49.725v54.825c52.274,44.625,85.425,110.925,85.425,184.875c0,73.949-33.15,140.25-85.425,184.875v54.824
				c77.774-51,128.774-138.975,128.774-239.699C575.663,188.7,524.663,100.725,446.888,49.725z" />
										<path
											d="M297.713,30.6v14.025c1.274,0,2.55,0,5.1,0c5.1-16.575,15.3-30.6,29.325-40.8C318.113,1.275,302.813,0,288.788,0
				c-1.275,0-3.825,0-5.1,0C291.338,8.925,297.713,19.125,297.713,30.6z" />
										<path
											d="M446.888,156.825v22.95V349.35v71.4c30.6-35.699,48.45-81.6,48.45-132.6C494.063,239.7,477.488,192.525,446.888,156.825z
				" />
										<path
											d="M105.188,192.525c-15.3,29.325-24.225,61.2-24.225,95.625c0,54.824,21.675,104.549,56.1,141.525l6.375-187.426
				C123.038,235.875,107.738,216.75,105.188,192.525z" />
										<path
											d="M313.013,535.5v-3.824c-8.925,1.273-16.575,1.273-25.5,1.273c-7.65,0-15.3,0-22.95-1.273v3.824
				c0,14.025-5.1,28.051-14.025,38.25c11.475,1.275,24.225,2.551,35.7,2.551c12.75,0,25.5-1.275,38.25-2.551
				C318.113,563.551,313.013,549.525,313.013,535.5z" />
										<path
											d="M43.988,289.426c0-61.201,22.95-118.576,61.2-160.651v-61.2c-63.75,52.275-104.55,132.6-104.55,221.851
				c0,102,53.55,192.523,133.875,243.523l1.275-52.273C80.963,436.051,43.988,365.926,43.988,289.426z" />
										<path
											d="M386.963,11.475L386.963,11.475c-33.15,0-61.2,25.5-63.75,58.65l-16.575,238.426c-1.275,10.199,2.55,20.398,10.2,28.049
				c7.649,7.65,16.574,12.75,28.05,12.75h1.274l-6.375,187.426c0,7.65,2.551,15.299,8.926,21.674
				c5.1,6.375,12.75,8.926,21.675,8.926h21.675c16.575,0,29.325-14.025,29.325-29.324V349.35V179.775V45.9
				C421.388,26.775,406.088,11.475,386.963,11.475z" />
										<path
											d="M231.413,221.85h6.375c19.125,0,35.7-15.3,35.7-34.425V30.6c0-6.375-5.1-11.475-11.475-11.475h-2.55
				c-6.375,0-10.2,5.1-10.2,11.475v103.275c0,8.925-7.65,16.575-16.575,16.575h-2.55c-8.925,0-16.575-7.65-16.575-16.575V30.6
				c0-6.375-5.1-11.475-10.2-11.475h-2.55c-6.375,0-11.475,5.1-11.475,11.475v103.275c0,8.925-7.65,16.575-16.575,16.575h-2.55
				c-8.925,0-16.575-7.65-16.575-16.575V30.6c0-6.375-5.1-11.475-10.2-11.475h-2.55c-6.375,0-10.2,5.1-10.2,11.475v156.825
				c0,19.125,15.3,34.425,34.425,34.425h5.1l-10.2,314.925c0,7.65,2.55,15.299,7.65,21.674c5.1,5.102,12.75,8.926,20.4,8.926h22.95
				c7.65,0,15.3-3.824,20.4-8.926c5.1-5.1,8.925-14.023,7.65-21.674L231.413,221.85z" />
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>

				<!-- Box for Number of Users -->
				<div class="bg-white px-6 py-6 rounded-md shadow-md flex items-center justify-between">
					<div>
						<span class="font-bold text-3xl">{{ numberOfUsers }}</span>
						<p class="text-sm text-gray-500 font-semibold">Users</p>
					</div>
					<div class="rounded-full bg-gray-200 p-3">
						<svg
							class="w-7 h-7"
							fill="#3C50E0"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 460.067 460.067">
							<g>
								<path
									d="M454.165,154.398c-0.111-22.012-18.11-39.92-40.122-39.92c-7.096,0-67.007,0-73.949,0
		c1.413,5.186,2.191,10.629,2.22,16.245l0.674,134.227c0.073,14.404-7.867,27.011-19.623,33.599v141.027
		c0,11.236,9.109,20.345,20.345,20.345c11.236,0,20.345-9.108,20.345-20.345V281.348c0-2.426,1.967-4.392,4.393-4.392
		c2.426,0,4.393,1.967,4.393,4.393v158.229c0,11.236,9.108,20.345,20.345,20.345c11.236,0,20.345-9.108,20.345-20.345
		c0-269.024-0.36-115.048-0.369-284.913c0-1.941,1.56-3.523,3.501-3.549c1.941-0.026,3.542,1.513,3.595,3.454l0,0l0.626,124.557
		c0.047,9.335,7.628,16.869,16.952,16.869c0.028,0,0.059,0,0.087,0c9.363-0.047,16.916-7.676,16.869-17.039L454.165,154.398z" />
								<path
									d="M368.676,103.277c19.39,0,35.138-15.746,35.138-35.138c0-19.407-15.732-35.139-35.138-35.139
		c-19.406,0-35.138,15.732-35.138,35.139C333.538,87.538,349.294,103.277,368.676,103.277z" />
								<path
									d="M117.079,264.95l0.674-134.227c0.028-5.617,0.806-11.06,2.219-16.245c-6.939,0-66.854,0-73.95,0
		c-22.013,0-40.011,17.908-40.121,39.921L5.276,278.955c-0.047,9.363,7.505,16.992,16.869,17.039c0.029,0,0.058,0,0.087,0
		c9.323,0,16.905-7.534,16.952-16.869l0.626-124.557c0.016-3.163,2.445-6.183,6.547-6.183l0.008,291.19
		c0,11.236,9.109,20.345,20.345,20.345c11.236,0,20.345-9.108,20.345-20.345V281.348c0-2.426,1.967-4.392,4.393-4.392
		c2.426,0,4.393,1.967,4.393,4.393v158.229c0,11.236,9.108,20.345,20.345,20.345c11.236,0,20.345-9.108,20.345-20.345V298.449
		C124.869,291.833,117.007,279.283,117.079,264.95z" />
								<path
									d="M56.538,68.139c0,10.49,4.602,19.9,11.892,26.339h0c6.195,5.472,14.33,8.799,23.246,8.799
		c19.405,0,35.138-15.731,35.138-35.138C126.815,48.732,111.083,33,91.676,33C72.265,33,56.538,48.738,56.538,68.139z" />
								<path
									d="M207.013,67.803L207.013,67.803c6.406,4.966,14.442,7.93,23.174,7.93c20.839,0,37.866-16.906,37.866-37.866
		C268.054,16.877,250.991,0,230.187,0l0,0l0,0c-20.907,0-37.866,16.948-37.866,37.867C192.321,49.509,197.614,60.519,207.013,67.803
		z" />
								<path
									d="M279.077,87.803c-10.17,0-87.895,0-98.087,0c-17.792,0-33.149,10.856-39.767,26.291c-2.266,5.285-3.441,10.95-3.47,16.729
		l-0.674,134.227v0.001c-0.051,10.091,8.088,18.311,18.179,18.362c0.031,0,0.063,0,0.094,0c10.047,0,18.218-8.12,18.269-18.179
		l0.674-134.228c0-0.005,0-0.011,0-0.016c0.015-1.943,1.598-3.508,3.541-3.501c1.943,0.007,3.514,1.585,3.514,3.528l0.008,307.125
		v0.001c0,12.108,9.816,21.925,21.925,21.925s21.925-9.816,21.925-21.925v-0.001V267.629c0-2.614,2.119-4.733,4.733-4.733
		c2.614,0,4.733,2.119,4.733,4.733v170.513v0.001c0,12.108,9.816,21.925,21.925,21.925c12.109,0,21.925-9.816,21.925-21.925v-0.001
		c0-78.408-0.376-225.029-0.397-307.113c0-2.105,1.701-3.815,3.807-3.824c2.105-0.009,3.822,1.685,3.84,3.791
		c0,0.004,0,0.007,0,0.011l0.674,134.228c0.051,10.06,8.22,18.179,18.268,18.179c0.031,0,0.063,0,0.094,0
		c10.09-0.051,18.23-8.271,18.179-18.362v-0.001l-0.674-134.227C322.194,107.083,302.779,87.803,279.077,87.803z" />
							</g>
						</svg>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Sidebar from "../components/Sidebar.vue";

export default {
	components: {
		Sidebar,
	},
	setup() {
		const allTablesData = ref([]);
		const allMenuCategoriesData = ref([]);
		const allMenuItemsData = ref([]);
		const allUsersData = ref([]);

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/tables");
				allTablesData.value = response.data.tableData;
			} catch (error) {
				console.error("Error:", error);
			}
			try {
				const response = await axios.get("http://localhost:5000/api/menucategories");
				allMenuCategoriesData.value = response.data.menuCategoryData;
			} catch (error) {
				console.error("Error:", error);
			}
			try {
				const response = await axios.get("http://localhost:5000/api/menuitems");
				allMenuItemsData.value = response.data.menuItemData;
			} catch (error) {
				console.error("Error:", error);
			}
			try {
				const response = await axios.get("http://localhost:5000/api/users");
				allUsersData.value = response.data.userData;
			} catch (error) {
				console.error("Error:", error);
			}
		});

		// Computed property to calculate the numbers
		const numberOfTables = computed(() => allTablesData.value.length);
		const numberOfMenuCategories = computed(() => allMenuCategoriesData.value.length);
		const numberOfMenuItems = computed(() => allMenuItemsData.value.length);
		const numberOfUsers = computed(() => allUsersData.value.length);

		return {
			allTablesData,
			allMenuCategoriesData,
			allMenuItemsData,
			allUsersData,
			numberOfTables,
			numberOfMenuCategories,
			numberOfMenuItems,
			numberOfUsers,
		};
	},
};
</script>

<style></style>
