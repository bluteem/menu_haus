<template>
    <!-- Category links -->
    <div class="sticky top-0 w-full bg-white shadow-md menu-nav px-8 py-6 flex overflow-x-auto">
        <a href="#" class="border-2 border-orange-500 rounded-xl focus:outline-none hover:bg-gray-200 transition duration-300 px-3 py-2 mr-2 flex items-center justify-center font-semibold min-w-48">All Items</a>
        <a v-for="menuCategory in allMenuCategoriesData" :key="menuCategory._id" :href="'#' + toFriendlyURL(menuCategory.name)"
        class="border-2 border-orange-500 rounded-xl focus:outline-none hover:bg-gray-200 transition duration-300 px-3 py-2 mr-2 flex items-center justify-center text-center font-semibold min-w-48">
        {{ menuCategory.name }}</a>
    </div>

    <!-- Items in the category -->
    <div v-for="(categoryItems, categoryName) in groupedMenuItems" :key="categoryName" :id="toFriendlyURL(categoryName)" class="mx-auto max-w-xl px-6 pt-40 mb-4">
        <div>
            <h2 class="text-xl font-bold mb-4">{{ categoryName }}</h2>
            <ul>
            <li v-for="menuItem in categoryItems" :key="menuItem._id" class="flex items-center mb-4 border-2 border-orange-500 rounded-xl hover:bg-gray-200 transition duration-300 p-4">
                <div class="w-32 mr-4">
                <img :src="'/images/' + menuItem.images[0]" :alt="menuItem.name" class="w-full h-full object-cover rounded-md">
                </div>
                <div class="flex-grow">
                <h2 class="text-xl font-semibold mb-2">{{ menuItem.name }}</h2>
                <p class="text-gray-600 mb-1">Category: <span class="font-bold">{{ categoryName }}</span></p>
                <p class="text-gray-600">Price: <span class="font-bold text-xl">${{ menuItem.price.toFixed(2) }}</span></p>
                <div class="flex">
                    <button @click="getMenuItem(menuItem._id)" type="button" class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Details</button>
                </div>
                </div>
            </li>
            </ul>
        </div>
        <!-- Show message if there are no menu items -->
        <p v-if="allMenuItemsData.length === 0" class="text-gray-600">No menu items available</p>
    </div>

    <div class="my-64"></div>

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
             
                    <p class="text-gray-600 mt-4"><span class="font-bold">Category:</span> {{ selectedMenuItem.categoryInfo && selectedMenuItem.categoryInfo.length > 0 ? selectedMenuItem.categoryInfo[0].name : '' }}</p>
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
import { Carousel, initTE } from "tw-elements";

export default {
    setup() {
        const allMenuCategoriesData = ref([]);
        const allMenuItemsData = ref([]);
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
                allMenuCategoriesData.value = response.data.menuCategoryData;
            } catch (error) {
                console.error('Error fetching menu categories:', error);
            }
            try {
                const response = await axios.get('http://localhost:5000/api/menuitems');
                allMenuItemsData.value = response.data.menuItemData;
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        });     

        // Fetch a single menu item
        const getMenuItem = async (itemId) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/menuitems/${itemId}`);
                selectedMenuItem.value = response.data.menuItemData;
                console.log(selectedMenuItem.value);
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

        // Method to handle category click event
        const handleMenuCategoryClick = () => {
            console.log("message");
        };
        
        const groupedMenuItems = computed(() => {
            const groupedItems = {};
                allMenuItemsData.value.forEach(menuItem => {
                    const categoryName = menuItem.categoryInfo && menuItem.categoryInfo.length > 0 ? menuItem.categoryInfo[0].name : 'Uncategorized';
                    if (!groupedItems[categoryName]) {
                        groupedItems[categoryName] = [];
                    }
                    groupedItems[categoryName].push(menuItem);
                });
            return groupedItems;
        });

        // Define the function to convert string to a friendly URL
        const toFriendlyURL = (str) => {
            str = str.toLowerCase();
            str = str.replace(/\s+/g, '-');
            str = str.replace(/[^\w\-]+/g, '');
            return str;
        };
 
        return {
            allMenuCategoriesData,
            allMenuItemsData,
            showModal1,
            selectedMenuItem,
            getMenuItem,
            handleMenuCategoryClick,
            groupedMenuItems,
            toFriendlyURL,
        };       
    }
};

</script>

<style scoped>

@media (max-width: 768px) {
    .menu-nav .overflow-x {
        overflow-x: auto;
  }
}

/* Scoped styles (within your component's <style> tag) */
.menu-nav::-webkit-scrollbar {
    width: 20px; /* Increase scrollbar width */
    background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent background */
}

.menu-nav::-webkit-scrollbar-track {
    background-color: transparent;
}

.menu-nav::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px; /* Rounded corners */
    border: 6px solid transparent;
    background-clip: content-box;
}

.menu-nav::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}

</style>
