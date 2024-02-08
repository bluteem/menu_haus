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


<!--Tabs navigation-->
<ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>

    <li v-for="(category, index) in menuCategories" :key="category._id" role="presentation">
        <a :href="`#tabs-${getFormattedCategoryName(category.name)}`"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent"
            :data-te-toggle="'pill'"
            :role="'tab'"
            :data-te-target="`#tabs-${getFormattedCategoryName(category.name)}`"
            :aria-controls="`tabs-${getFormattedCategoryName(category.name)}`"
            :aria-selected="index === 0 ? true : false"
            :data-te-nav-active="index === 0 ? '' : null">
        {{ category.name }}
        </a>
    </li>

</ul>
<!--Tabs content-->
<div class="mb-6">

    <div v-for="(category, index) in menuCategories" :key="category._id" :id="`tabs-${getFormattedCategoryName(category.name)}`" class="hidden opacity-0 transition-opacity duration-150 ease-linear" role="tabpanel" :aria-labelledby="`tabs-${getFormattedCategoryName(category.name)}-tab`" :data-te-tab-active="index === 0 ? '' : null" :class="{ 'hidden': index !== 0 }">
      <!-- Display menu items corresponding to the category -->
      <div v-for="menuItem in getMenuItemsByCategory(category)" :key="menuItem._id">
        <!-- Display menu item details -->
        <p>{{ menuItem.name }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>

</div>




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
import { ref, onMounted, nextTick, computed } from 'vue';
import axios from 'axios';
import { Carousel, Tab, initTE } from "tw-elements";

export default {
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

            initTE({ Tab });
        });

        // Filter menu items by category
        const getMenuItemsByCategory = (category) => {
        return menuItems.value.filter(item => item.category === category.name);
        };

        // Format category name by replacing spaces with hyphens
        const getFormattedCategoryName = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
        };        

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
        
        return {
            menuCategories,
            menuItems,
            showModal1,
            selectedMenuItem,
            getMenuItem,
            getMenuItemsByCategory,
            getFormattedCategoryName,        
        };       
    }
};

</script>

<style scoped>

</style>
