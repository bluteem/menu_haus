<template>
	<div class="flex items-center justify-center h-screen bg-gray-200">
		<div class="bg-white mx-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
			<div class="grid grid-cols-1 md:grid-cols-2">
				<!-- Left Column - Image -->
				<div class="hidden md:block">
					<img src="/images/login.jpg" alt="Login Image" class="w-full h-full object-cover rounded-s-lg" />
				</div>

				<!-- Right Column - Tabs -->
				<div class="flex flex-col justify-center p-8">
					<h1 class="text-center mb-12 font-bold text-2xl border-2 py-6 px-2">Menu Haus</h1>
					<!-- Tab Buttons -->
					<div class="flex justify-between mb-8 border-b">
						<button
							@click="activeTab = 'login'"
							class="pb-3 w-1/2 text-center"
							:class="{
								'font-semibold border-b-2 border-zinc-700': activeTab === 'login',
								'text-gray-600': activeTab !== 'login',
							}">
							Login
						</button>
						<button
							@click="activeTab = 'signup'"
							class="pb-3 w-1/2 text-center"
							:class="{
								'font-semibold border-b-2 border-zinc-700': activeTab === 'signup',
								'text-gray-600': activeTab !== 'signup',
							}">
							Sign Up
						</button>
					</div>

					<!-- Tab Contents -->
					<div v-if="activeTab === 'login'">
						<form @submit.prevent="login">
							<div class="mb-4">
								<label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
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
										v-model="newLogin.email"
										id="email"
										name="email"
										autocomplete="email"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Enter your email"
										required />
								</div>
							</div>
							<div class="mb-4">
								<label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
								<div class="relative">
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
										v-model="newLogin.password"
										id="password"
										name="password"
										autocomplete="current-password"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Enter your password"
										required />
								</div>
							</div>
							<div class="flex items-center justify-between mb-4">
								<div class="flex items-center">
									<input type="checkbox" id="remember" name="remember" class="mr-2" />
									<label for="remember" class="text-gray-700">Remember me</label>
								</div>
								<div>
									<a href="#" class="text-blue-500">Forgot password?</a>
								</div>
							</div>
							<button
								type="submit"
								class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
								Login
							</button>
						</form>
						<div class="text-sm text-center text-gray-600 mt-4">
							Don't have an account? <a href="#" @click="activeTab = 'signup'" class="text-blue-500">Sign Up</a>
						</div>
					</div>

					<div v-if="activeTab === 'signup'">
						<form @submit.prevent="signUp">
							<div class="mb-4">
								<label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
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
										id="name"
										name="name"
										autocomplete="name"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Enter your full name"
										required />
								</div>
							</div>
							<div class="mb-4">
								<label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
								<div class="relative">
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
										type="email"
										id="email"
										name="email"
										autocomplete="email"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Enter your email"
										required />
								</div>
							</div>
							<div class="mb-4">
								<label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
								<div class="relative">
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
										id="password"
										name="password"
										autocomplete="current-password"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Enter your password"
										required />
								</div>
							</div>
							<div class="mb-4">
								<label for="confirmPassword" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
								<div class="relative">
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
										id="confirmPassword"
										name="confirmPassword"
										autocomplete="current-password"
										class="w-full border border-gray-400 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
										placeholder="Re-enter your password"
										required />
								</div>
							</div>
							<button
								type="submit"
								class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
								Create account
							</button>
						</form>
						<div class="text-sm text-center text-gray-600 mt-4">
							Already have an account? <a href="#" @click="activeTab = 'login'" class="text-blue-500">Login</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter from vue-router
import axios from "axios";

export default {
	setup() {
		const router = useRouter(); // Initialize router

		const activeTab = ref("login");
		const newLogin = ref({
			name: "",
			password: "",
		});

		// Methods for handling login and sign up logic
		const login = async () => {
			try {
				const response = await axios.post(
					"http://localhost:5000/auth/login",
					{
						email: newLogin.value.email,
						password: newLogin.value.password,
					},
					{
						withCredentials: true, // Send cookies with the request
					}
				);
				const token = response.data.token;
				localStorage.setItem("token", token);
				// Redirect to the dashboard
				router.push("/dashboard");
			} catch (error) {
				console.error("Login failed", error);
			}
		};

		const signUp = () => {
			// Handle sign up logic
		};

		return {
			activeTab,
			newLogin,
			login,
			signUp,
		};
	},
};
</script>

<style scoped></style>
