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
						<span class="sr-only">View dish</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 502.4 502.4" aria-hidden="true">
							<g>
								<g>
									<path
										d="M272,193.81v-13.867c0-11.733-9.6-21.333-21.333-21.333s-21.333,9.6-21.333,21.333v13.867
			c-106.667,11.733-188.8,108.8-188.8,226.133c0,11.733,9.601,21.333,21.334,21.333h377.6c11.733,0,21.333-9.6,21.333-21.333
			C460.8,301.543,378.666,205.543,272,193.81z M83.2,399.677c9.6-92.8,80-164.267,166.4-164.267s157.867,71.467,167.467,164.267
			H83.2z" />
								</g>
							</g>
							<g>
								<g>
									<path
										d="M481.067,459.41H21.333C9.6,459.41,0,469.01,0,480.743s9.6,21.333,21.333,21.333H480c11.733,0,21.333-9.6,22.4-21.333
			C502.4,469.01,492.8,459.41,481.067,459.41z" />
								</g>
							</g>
							<g>
								<g>
									<path
										d="M110.934,157.544c1.067-1.067,1.067-2.133,2.133-4.267c3.2-5.333,7.467-12.8,7.467-23.467c0-11.733-3.2-20.267-6.4-26.667
			c-5.333-12.8-12.8-21.333-21.333-24.533c-6.4-2.133-13.867-2.133-20.267,1.067c-9.6,5.333-14.933,17.067-9.6,27.733
			c3.2,6.399,8.533,10.666,13.866,11.733v1.067c1.067,2.133,3.2,6.4,3.2,7.467c0,1.067-2.133,4.267-3.2,6.4
			c-1.067,2.133-2.133,5.333-3.2,7.467c-8.533,20.267-6.4,46.933,5.333,64c4.267,6.4,10.667,9.6,17.067,9.6
			c3.2,0,7.467-1.067,11.733-4.267c9.6-6.4,11.733-19.2,5.333-28.8C108.8,175.677,107.734,165.01,110.934,157.544z" />
								</g>
							</g>
							<g>
								<g>
									<path
										d="M266.667,80.743c1.067-1.067,1.067-3.2,2.133-4.267c3.2-5.333,7.467-12.8,7.467-23.467c0-11.733-3.2-20.267-6.4-26.667
			c-5.333-12.8-12.8-21.333-21.333-24.533c-6.4-2.133-13.867-2.133-20.267,1.067c-9.6,5.333-14.933,17.067-9.6,27.733
			c3.2,6.4,8.533,10.666,13.866,11.733c1.067,3.2,3.2,7.467,3.2,8.533c0,1.067-2.133,4.267-3.2,6.4
			c-1.067,2.133-2.133,5.333-3.2,7.467c-8.533,20.267-6.4,46.933,5.333,64c4.267,6.4,10.667,9.6,17.067,9.6
			c4.267,0,7.467-1.067,11.733-4.267c9.6-6.4,11.733-19.2,5.333-28.8C264.534,98.877,263.467,88.21,266.667,80.743z" />
								</g>
							</g>
							<g>
								<g>
									<path
										d="M436.267,208.744c-5.333-5.333-8.533-19.2-8.533-35.2c0-6.4,1.067-13.867,1.067-20.267
			c1.067-11.733,2.133-23.467,1.067-35.2c-2.133-24.533-16-33.067-27.733-33.067c-11.733,0-21.333,9.6-21.333,21.333
			c0,6.4,2.133,11.733,6.4,16c0,9.599,0,19.2-1.067,28.799c-1.067,8.533-1.067,16-1.067,23.467c0,19.2,3.2,44.8,19.2,62.933
			c4.267,5.333,10.667,7.467,16,7.467c4.267,0,9.6-1.067,13.867-6.4C442.666,231.144,443.733,217.277,436.267,208.744z" />
								</g>
							</g>
						</svg>
					</button>

					<button
						type="button"
						class="relative rounded-full bg-gray-800 mx-1 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">View notifications</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="relative flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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

						<!-- <div
							class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1">
							<a
								href="#"
								class="block px-4 py-2 text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0"
								>Your Profile</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1"
								>Settings</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2"
								>Sign out</a
							>
						</div> -->
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a href="#" class="text-gray-300 bg-sky-700 hover:text-white block rounded-md px-3 py-2 text-base text-center">
					Call a Waiter</a
				>
			</div>
		</div>
	</nav>
</template>

<script>
export default { name: "FrontendNavbar" };
</script>

<style></style>
