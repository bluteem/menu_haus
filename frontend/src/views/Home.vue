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

                    <fwb-carousel :pictures="pictures" slide />

<!--                     <carousel style="width: 100%; height: 100%;">
                        <slide v-for="(image, index) in selectedMenuItem.images" :key="index">
                            <div class="carousel__item">
                                <img :src="'/images/' + image" :alt="selectedMenuItem.name" class="w-full h-full object-cover rounded-md">
                            </div>
                        </slide>
                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel> -->
             
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
import { ref, onMounted, defineComponent } from 'vue';
import axios from 'axios';
import { FwbCarousel } from 'flowbite-vue';
import { Tooltip, initTE } from "tw-elements";

export default defineComponent({
    components: {
        FwbCarousel,
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
            initTE({ Tooltip });
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
            } catch (error) {
                console.error('Error fetching menu item:', error);
                // Show alert if failed to fetch menu item details
                alertRef.showAlert('Failed to fetch menu item details. Please try again later.');
            }
        };

        const pictures = [
            {src: '/images/caprese-1.jpg', alt: 'Image 1'},
            {src: '/images/caprese-2.jpg', alt: 'Image 2'},
            {src: '/images/carbonara-1.jpg', alt: 'Image 3'},
        ]
        
        return {
            menuCategories,
            menuItems,
            showModal1,
            selectedMenuItem,
            getMenuItem,
            pictures,
        };       
    }
});

</script>

<style scoped>

</style>
