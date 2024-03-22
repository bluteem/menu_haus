<!-- MenuItems.vue -->
<template>
	<main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10">
		<h1 class="text-3xl font-bold mb-6">Account</h1>

		<div class="border-b border-gray-300 mb-6"></div>

		<form>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
				<div>
					<div class="mb-6">
						<label for="email" class="block mb-1">Email:</label>
						<div class="flex items-center">
							<div class="relative w-full mr-6">
								<svg
									class="h-4 w-4 text-gray-400 absolute left-3 top-3"
									fill="#4b5563"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512">
									<g>
										<path
											class="st0"
											d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
                                                c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
                                                C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
                                                c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
                                                c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
                                                c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
                                                c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
                                                L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
                                                C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
                                                C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
                                                l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
                                                C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
                                                V385.92z" />
									</g>
								</svg>
								<input
									type="text"
									v-model="allUserData.email"
									id="email"
									name="email"
									autocomplete="off"
									class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
									placeholder="Enter your email"
									required />
							</div>
							<button
								class="inline-block text-white border bg-sky-400 rounded-md hover:bg-sky-500 transition duration-300 px-4 py-2 whitespace-nowrap">
								Update
							</button>
						</div>
					</div>
					<div class="mb-6">
						<label for="password" class="block mb-1">Password:</label>
						<div class="flex items-center">
							<div class="relative w-full mr-6">
								<svg
									class="h-4 w-4 text-gray-400 absolute left-3 top-3"
									fill="#4b5563"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 203.096 203.096">
									<g>
										<path
											d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12
                                                c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736
                                                C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15
                                                c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12
                                                c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z" />
										<path
											d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715
                                                C109.047,119.666,105.689,116.309,101.547,116.309z" />
									</g>
								</svg>
								<input
									type="password"
									v-model="newPassword"
									id="password"
									autocomplete="off"
									class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
									placeholder="Enter your password"
									required />
							</div>
							<button
								class="inline-block text-white border bg-sky-400 rounded-md hover:bg-sky-500 transition duration-300 px-4 py-2 whitespace-nowrap">
								Update
							</button>
						</div>
					</div>
					<div class="border-b border-gray-300 mb-6"></div>
					<div class="mb-6">
						<label for="fullName" class="block mb-1">Full Name:</label>
						<div class="relative">
							<svg
								class="h-4 w-4 text-gray-400 absolute left-3 top-3"
								fill="none"
								stroke-width="4"
								stroke="#4b5563"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="32" cy="18.14" r="11.14" />
								<path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
							</svg>
							<input
								type="text"
								v-model="allUserData.fullName"
								id="fullName"
								autocomplete="off"
								class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
								placeholder="Enter your full name"
								required />
						</div>
					</div>
					<div class="mb-6">
						<label for="role" class="block mb-1">Role:</label>
						<div class="relative">
							<svg
								class="h-4 w-4 text-gray-400 absolute left-3 top-3"
								fill="#000000"
								height="800px"
								width="800px"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 485 485">
								<g>
									<g>
										<g>
											<path
												d="M375.935,375.033c-10.498-5.408-22.442-10.275-35.512-14.472c-0.767-0.409-2.272-1.216-4.303-2.33
				c-16.668-9.184-29.807-17.867-36.12-23.803v-24.286c30.385-17.372,51.163-48.542,57.804-86.695
				C375.017,218.518,390,202.361,390,187.5c0-15.043-11.308-25.026-30-27.094V150h35v-7.5c0-9.655-8.382-46.807-27.002-47.469
				C355.397,57.703,326.775,27.87,290,13.748V0h-95v13.748c-36.824,14.137-65.464,43.973-78.033,81.285
				C98.372,95.74,90,132.851,90,142.5v7.5h35v10.406c-18.692,2.068-30,12.051-30,27.094c0,14.861,14.983,31.019,32.196,35.948
				c6.647,38.167,27.429,69.336,57.804,86.695v24.285c-6.312,5.936-19.45,14.618-36.106,23.795c-2.06,1.13-3.577,1.943-4.338,2.349
				c-13.408,4.401-25.363,9.341-35.485,14.658c-62.571,32.182-64.037,75.318-64.069,77.139L45,485h395v-32.537
				C439.991,450.626,439.051,407.119,375.935,375.033z M340,376.218c9.011,3.058,17.38,6.448,25,10.127V430h-25V376.218z M375,187.5
				c0,6.126-6.627,14.467-15.266,19.07c0.165-2.964,0.266-31.088,0.266-31.088C373.367,177.356,375,184.268,375,187.5z M290,29.958
				C318.457,42.536,340.807,65.964,352.045,95H290V29.958z M210,15h65v80h-65V15z M195,29.956V95h-62.081
				C144.134,65.976,166.5,42.545,195,29.956z M110,187.5c0-3.232,1.633-10.144,15-12.018c0,0,0.101,28.125,0.266,31.088
				C116.627,201.966,110,193.626,110,187.5z M105.912,135c2.285-10.771,8.315-23.686,11.757-25h249.662
				c3.442,1.314,9.472,14.229,11.757,25H105.912z M141.227,216.156C140.413,210.366,140,204.09,140,197.5V150h205v47.5
				c0,6.59-0.413,12.866-1.229,18.674c-5.158,37.347-25.101,67.55-54.733,82.874C275.075,306.315,259.417,310,242.5,310
				s-32.575-3.685-46.555-10.962C166.331,283.724,146.388,253.521,141.227,216.156z M285,317.299v17.312
				C279.87,339.974,263.613,355,242.5,355c-20.977,0-37.346-15.055-42.5-20.404v-17.298c13.182,5.108,27.424,7.702,42.5,7.702
				C257.579,325,271.824,322.405,285,317.299z M160,369.204c9.754-5.509,23.203-13.621,32.241-21.169
				C200.885,356.174,219.023,370,242.5,370s41.615-13.826,50.259-21.966c9.035,7.546,22.48,15.656,32.241,21.169V430H160V369.204z
				 M120,386.509c7.426-3.641,15.798-7.078,25-10.258V430h-25V386.509z M90.2,470H60v-17.37c0.093-2.065,2.189-31.708,45-57.922
				V430.2c-8.466,1.22-15,8.502-15,17.3v20C90,468.351,90.082,469.181,90.2,470z M380,467.5c0,1.355-1.145,2.5-2.5,2.5h-270
				c-1.355,0-2.5-1.145-2.5-2.5v-20c0-1.355,1.145-2.5,2.5-2.5h270c1.355,0,2.5,1.145,2.5,2.5V467.5z M425,470h-30.2
				c0.118-0.819,0.2-1.649,0.2-2.5v-20c0-8.798-6.534-16.081-15-17.3v-35.764c43.445,26.306,44.951,56.392,45,58.136V470z" />
											<path d="M242.5,255h20v-15H250v-32.5h-15v40C235,251.642,238.358,255,242.5,255z" />
										</g>
									</g>
								</g>
							</svg>
							<input
								type="text"
								v-model="allUserData.role"
								id="role"
								disabled
								autocomplete="off"
								class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500" />
						</div>
					</div>
					<div class="mb-6">
						<label for="phone" class="block mb-1">Phone:</label>
						<div class="relative">
							<svg
								class="h-4 w-4 text-gray-400 absolute left-3 top-3"
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<g>
									<g>
										<path
											d="M361.392,0H150.608c-27.686,0-50.216,22.564-50.216,50.294v411.412c0,27.731,22.529,50.294,50.216,50.294h210.784
			c27.686,0,50.216-22.564,50.216-50.294V50.294C411.608,22.564,389.078,0,361.392,0z M391.529,461.706
			c0,16.662-13.52,30.216-30.137,30.216H150.608c-16.618,0-30.137-13.554-30.137-30.216V50.294c0-16.662,13.52-30.216,30.137-30.216
			h210.784c16.618,0,30.137,13.554,30.137,30.216V461.706z" />
									</g>
								</g>
								<g>
									<g>
										<rect x="240.941" y="40.157" width="60.235" height="20.078" />
									</g>
								</g>
								<g>
									<g>
										<rect x="190.745" y="40.157" width="30.118" height="20.078" />
									</g>
								</g>
								<g>
									<g>
										<path
											d="M256,411.608c-19.372,0-35.137,15.765-35.137,35.137c0,19.372,15.765,35.137,35.137,35.137
			c19.373,0,35.137-15.765,35.137-35.137C291.137,427.372,275.373,411.608,256,411.608z M256,461.804
			c-8.304,0-15.059-6.755-15.059-15.059c0-8.304,6.755-15.059,15.059-15.059s15.059,6.755,15.059,15.059
			C271.059,455.049,264.304,461.804,256,461.804z" />
									</g>
								</g>
							</svg>

							<input
								type="tel"
								v-model="phoneNumber"
								@input="formatPhoneNumber"
								id="phone"
								autocomplete="off"
								class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
								placeholder="Enter your phone number"
								required />
						</div>
					</div>
				</div>
				<div>
					<label for="profilePicture" class="block mb-1">Profile Picture:</label>
					<div class="w-full border border-gray-400 rounded-md bg-white p-8">
						<div class="flex items-center mb-8">
							<div
								class="rounded-full max-w-24 h-auto mr-8 bg-cover bg-[url('../../public/images/no-profile.jpg')] border border-gray-400">
								<img
									:src="'../../public/uploads/' + allUserData.profilePicture"
									class="rounded-full max-w-24 h-auto"
									alt="" />
							</div>

							<a
								href="#"
								class="inline-block border border-gray-400 rounded-md hover:border-sky-400 hover:bg-sky-200 transition duration-300 px-4 py-2 mr-2"
								>Delete</a
							>
						</div>
						<div
							class="w-full border-2 border-dashed border-sky-400 bg-sky-100 bg-opacity-50 rounded-xl p-6 mb-8 text-center">
							<svg
								class="h-9 w-9 mx-auto mb-6"
								width="800px"
								height="800px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 3C12.2652 3 12.5195 3.10536 12.7071 3.29289L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13 6.41421L13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15L11 6.41421L8.70708 8.70711C8.31656 9.09763 7.68339 9.09763 7.29287 8.70711C6.90235 8.31658 6.90234 7.68342 7.29287 7.29289L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3ZM3.99998 14C4.55226 14 4.99998 14.4477 4.99998 15C4.99998 15.9772 5.00482 16.3198 5.05762 16.5853C5.29434 17.7753 6.22463 18.7056 7.41471 18.9424C7.68015 18.9952 8.02273 19 8.99998 19H15C15.9772 19 16.3198 18.9952 16.5852 18.9424C17.7753 18.7056 18.7056 17.7753 18.9423 16.5853C18.9951 16.3198 19 15.9772 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15C21 15.0392 21 15.0777 21 15.1157C21.0002 15.9334 21.0003 16.4906 20.9039 16.9755C20.5094 18.9589 18.9589 20.5094 16.9754 20.9039C16.4906 21.0004 15.9333 21.0002 15.1158 21C15.0777 21 15.0391 21 15 21H8.99998C8.96081 21 8.92222 21 8.8842 21C8.06661 21.0002 7.50932 21.0004 7.02452 20.9039C5.04107 20.5094 3.49058 18.9589 3.09605 16.9755C2.99962 16.4906 2.99975 15.9334 2.99996 15.1158C2.99997 15.0777 2.99998 15.0392 2.99998 15C2.99998 14.4477 3.44769 14 3.99998 14Z"
									fill="#0F1729" />
							</svg>
							<p class="mb-1">Click to upload or drag and drop</p>
							<p class="mb-1">SVG, PNG, JPG or GIF</p>
						</div>
						<div class="text-right">
							<a
								href="#"
								class="inline-block text-white border bg-sky-400 rounded-md hover:bg-sky-500 transition duration-300 px-4 py-2"
								>Save</a
							>
						</div>
					</div>
				</div>
			</div>
		</form>
		<div class="inline-block">
			<button
				type="button"
				class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
				Update
			</button>
		</div>
	</main>

	<Alert ref="Alert" />
</template>

<script>
import { ref, onMounted } from "vue";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Alert from "@/components/Alert.vue";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default {
	components: {
		Alert,
	},
	setup() {
		const allUserData = ref({
			email: "",
			password: [],
			fullName: "",
			role: "",
			profilePicture: "",
		});

		// Fetch menu items when the component is mounted
		onMounted(async () => {
			try {
				// Decode JWT token to extract user's ID
				const token = localStorage.getItem("token");
				const decodedToken = jwtDecode(token);
				const userId = decodedToken.userId;

				const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				allUserData.value = response.data.userData;
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		});

		const phoneNumber = ref("");
		const formatPhoneNumber = () => {
			const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber.value);
			if (parsedPhoneNumber) {
				phoneNumber.value = parsedPhoneNumber.formatInternational();
			}
		};

		// Update a menu item
		/* 		const updateUser = async (alertRef) => {
			try {
				const response = await axios.put(`http://localhost:5000/api/users/${currentUser.value._id}`, currentUser.value);
				const updatedUser = response.data.menuItem;
				const updatedItemIndex = menuItems.value.findIndex((item) => item._id === updatedMenuItem._id);
				if (updatedItemIndex !== -1) {
					menuItems.value.splice(updatedItemIndex, 1, updatedMenuItem);
				}
				// Show success alert
				alertRef.showAlert("User updated successfully!");
			} catch (error) {
				console.error("Error updating user:", error);
				// Show error alert if failed to update menu item
				alertRef.showAlert("Failed to update user info. Please try again later.");
			}
		}; */

		return {
			allUserData,
			// updateUser,
			phoneNumber,
			formatPhoneNumber,
		};
	},
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
