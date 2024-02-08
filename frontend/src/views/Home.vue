<template>
    <nav class="bg-gray-800 py-3">
        <div class="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <div class="flex justify-center h-16">
                <!-- Navbar Items Container -->
                <div class="flex items-center space-x-4" ref="navbarContainer">
                    <!-- Navbar Items -->
                    <ul class="flex" ref="navbarList">
                        <li v-for="menuCategory in menuCategories" :key="menuCategory._id" class="flex items-center">
                            <a :href="`#${menuCategory.name}`"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center">{{
                                    menuCategory.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>


<nav class="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
  <div class="px-6">
    <button class="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
      <span class="[&>svg]:w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
      </span>
    </button>
    <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentX" data-te-collapse-item>
      <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
        <li data-te-nav-item-ref>
          <a class="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2" href="#!" data-te-ripple-init data-te-ripple-color="light">Regular link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>






    <div class="mx-auto max-w-xl mt-6 px-6">
        <ul>
          <li v-for="menuItem in menuItems" :key="menuItem._id" class="flex items-center border-b border-gray-300 pt-2 pb-4">
            <!-- Left column for the image -->
            <div class="w-32 mr-4">
              <img :src="'/images/' + menuItem.images[0]" :alt="menuItem.name" class="w-full h-full object-cover rounded-md">
            </div>
            <!-- Right column for the text content -->
            <div class="flex-grow">
              <h2 class="text-xl font-semibold">{{ menuItem.name }}</h2>
              <p class="text-gray-600"><span class="font-bold">Category:</span> {{ menuItem.category }}</p>
              <p class="text-gray-600"><span class="font-bold">Price:</span> ${{ menuItem.price.toFixed(2) }}</p>
              <!-- Edit and Delete buttons -->
              <div class="flex">
                <button @click="getMenuItem(menuItem._id)" type="button"
                  class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Details</button>
              </div>
            </div>
          </li>
        </ul>
        <!-- Show message if there are no menu items -->
        <p v-if="menuItems.length === 0" class="text-gray-600">No menu items available</p>
    </div>

    <!-- Modal for adding a new menu item -->
    <div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <!-- Modal content -->
            <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">{{ selectedMenuItem.name }}</h3>
                <div class="mt-2">

                    <!-- carousel -->
                    <div id="Carousel" class="relative" data-te-carousel-init data-te-ride="carousel">

                        <!--Carousel items-->
                        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            <div v-for="(image, index) in selectedMenuItem.images" :key="index" :class="{ 'hidden': index !== 0 }" class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item :data-te-carousel-active="index === 0 ? '' : null">
                            <img :src="'/images/' + image" class="block w-full" alt="{{ selectedMenuItem.name }}" />
                            </div>
                        </div>

                        <!--Carousel controls - prev item-->
                        <button class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#Carousel" data-te-slide="prev">
                            <span class="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            </span>
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                        </button>
                        <!--Carousel controls - next item-->
                        <button class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#Carousel" data-te-slide="next">
                            <span class="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            </span>
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                        </button>
                    </div>             
             
                    <p class="text-gray-600 mt-4"><span class="font-bold">Category:</span> {{ selectedMenuItem.category }}</p>
                    <p class="text-gray-600"><span class="font-bold">Description:</span> {{ selectedMenuItem.description }}</p>
                    <p class="text-gray-600"><span class="font-bold">Price:</span> {{ selectedMenuItem.price }}</p>

                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button @click="showModal1 = false" type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
                </button>
            </div>
            </div>
        </div>
    </div>    

</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import { Carousel, initTE } from "tw-elements";
// Initialization for ES Users
import { Collapse, Dropdown, Ripple } from "tw-elements";

export default {
    components: {

    },
    setup() {
        const menuCategories = ref([]);
        const menuItems = ref([]);
        const showModal1 = ref(false);
        const selectedMenuItem = ref({
            name: '',
            images: [],
            category: '',
            description: '',
            price: null,
        });

        // Fetch menu items when the component is mounted
        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/menucategories');
                menuCategories.value = response.data.menuCategories;
            } catch (error) {
                console.error('Error fetching menu categories:', error);
            }
            try {
                const response = await axios.get('http://localhost:5000/api/menuitems');
                menuItems.value = response.data.menuItems;
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        });

        // Fetch a single menu item
        const getMenuItem = async (itemId) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/menuitems/${itemId}`);
                const menuItem = response.data.menuItem;
                selectedMenuItem.value = {
                    _id: menuItem._id,
                    name: menuItem.name,
                    images: menuItem.images,
                    category: menuItem.category,
                    description: menuItem.description,
                    price: menuItem.price
                };
                showModal1.value = true;

                // Use Vue.nextTick() to ensure that the carousel initialization
                // happens after the DOM has been updated with the carousel items
                await nextTick();                

                // Initialize tw-elements Carousel after setting the menu item details
                initTE({ Carousel });

            } catch (error) {
                console.error('Error fetching menu item:', error);
                // Show alert if failed to fetch menu item details
                console.error('Failed to fetch menu item details. Please try again later.');
            }
        };

        initTE({ Collapse, Dropdown, Ripple });
        
        return {
            menuCategories,
            menuItems,
            showModal1,
            selectedMenuItem,
            getMenuItem,
        };       
    }
};

</script>

<style scoped>

</style>
