<template>
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="flex flex-1 items-stretch justify-start">
					<div class="flex flex-shrink-0 items-center text-white">
						<span class="ml-1">Restaurant Name</span>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<a href="#" class="text-gray-300 bg-sky-700 hover:text-white rounded-md px-3 py-2 flex items-center">
								<svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M6 18V14M6 14H8L13 17V7L8 10H5C3.89543 10 3 10.8954 3 12V12C3 13.1046 3.89543 14 5 14H6ZM17 7L19 5M17 17L19 19M19 12H21"
										stroke="currentColor"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
								<span class="align-middle">Call a Waiter</span></a
							>
						</div>
					</div>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<button
						type="button"
						class="relative rounded-full bg-gray-800 mx-1 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">Search Menu</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" />
						</svg>
					</button>

					<button
						type="button"
						class="relative rounded-full bg-gray-800 mx-1 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">View Basket</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 3C10.3432 3 9.00005 4.34315 9.00005 6H15C15 4.34315 13.6569 3 12 3ZM7.00005 6C7.00005 3.23858 9.23863 1 12 1C14.7615 1 17 3.23858 17 6H16.3441C16.7794 6.00005 17.1599 6.0013 17.4791 6.026C17.8369 6.05369 18.1919 6.11475 18.5417 6.27628C19.0471 6.50961 19.4776 6.87893 19.785 7.34294C19.9979 7.66418 20.1122 8.00569 20.194 8.35514C20.2709 8.68375 20.3324 9.08359 20.4031 9.54318L20.8541 12.4751C21.0468 13.7273 21.2014 14.7319 21.2546 15.5469C21.3091 16.3818 21.2669 17.1241 20.9938 17.8221C20.5817 18.8752 19.8247 19.7575 18.8465 20.325C18.1981 20.7011 17.4709 20.8556 16.6375 20.9287C15.8239 21 14.8074 21 13.5406 21H10.4595C9.19267 21 8.17621 21 7.36265 20.9287C6.52917 20.8556 5.80196 20.7011 5.15361 20.325C4.17539 19.7575 3.41842 18.8752 3.00631 17.8221C2.73317 17.1241 2.69104 16.3818 2.74554 15.5469C2.79873 14.732 2.9533 13.7273 3.14594 12.4752L3.59703 9.54315C3.66772 9.08358 3.72921 8.68375 3.80611 8.35514C3.88789 8.00569 4.0022 7.66418 4.21506 7.34294C4.52251 6.87893 4.953 6.50961 5.45837 6.27628C5.80824 6.11475 6.16316 6.05369 6.52098 6.026C6.84022 6.0013 7.22073 6.00005 7.656 6H7.00005ZM6.67528 8.02004C6.43801 8.0384 6.34578 8.06944 6.29671 8.09209C6.12826 8.16987 5.98476 8.29298 5.88228 8.44765C5.85243 8.4927 5.80772 8.57914 5.7535 8.81085C5.69635 9.05506 5.64603 9.3776 5.56836 9.88243L5.12984 12.7328C4.9284 14.0422 4.7881 14.9601 4.74129 15.6772C4.69513 16.3844 4.74974 16.789 4.86878 17.0932C5.11605 17.7251 5.57023 18.2545 6.15717 18.595C6.43973 18.7589 6.83136 18.8744 7.53736 18.9363C8.25323 18.9991 9.18181 19 10.5066 19H13.4935C14.8183 19 15.7469 18.9991 16.4627 18.9363C17.1687 18.8744 17.5604 18.7589 17.8429 18.595C18.4299 18.2545 18.884 17.7251 19.1313 17.0932C19.2504 16.789 19.305 16.3844 19.2588 15.6772C19.212 14.9601 19.0717 14.0422 18.8703 12.7328L18.4317 9.88243C18.3541 9.37761 18.3037 9.05507 18.2466 8.81085C18.1924 8.57914 18.1477 8.4927 18.1178 8.44765C18.0153 8.29298 17.8718 8.16987 17.7034 8.09209C17.6543 8.06944 17.5621 8.0384 17.3248 8.02004C17.0748 8.00069 16.7483 8 16.2376 8H7.76255C7.25178 8 6.92534 8.00069 6.67528 8.02004Z" />
						</svg>
					</button>

					<button
						type="button"
						class="relative flex rounded-full ml-1 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true">
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="" />
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="#"
					class="text-gray-300 bg-sky-700 hover:text-white rounded-md px-3 py-2 flex items-center justify-center">
					<svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M6 18V14M6 14H8L13 17V7L8 10H5C3.89543 10 3 10.8954 3 12V12C3 13.1046 3.89543 14 5 14H6ZM17 7L19 5M17 17L19 19M19 12H21"
							stroke="currentColor"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<span class="align-middle">Call a Waiter</span></a
				>
			</div>
		</div>
	</nav>
</template>

<script>
export default { name: "FrontendNavbar" };
</script>

<style></style>
