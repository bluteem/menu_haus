<!-- MenuItems.vue -->
<template>
  <div class="container mx-auto py-6 px-6">
    <h1 class="text-3xl font-bold mb-4">Menu Items</h1>

    <!-- Add Menu Item Button -->
    <button @click="showModal1 = true"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
      Add Menu Item
    </button>

    <!-- Modal for adding a new menu item -->
    <div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Add New Menu Item</h3>
            <div class="mt-5">
              <!-- Add Menu Item Form -->
              <form @submit.prevent="addMenuItem($refs.Alert)">
                <!-- Form fields go here -->
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                  <input type="text" v-model="newMenuItem.name" id="name" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>
                
                <div class="mb-4">
                  <label for="images" class="block text-sm font-medium text-gray-700">Images:</label>
                  <div id="my-dropzone" class="border-gray-300 dropzone"></div>
                  <input type="text" v-model="newMenuItem.images" id="images" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
                  <input type="text" v-model="newMenuItem.category" id="category" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                  <textarea v-model="newMenuItem.description" id="description" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                </div>

                <div class="mb-4">
                  <label for="price" class="block text-sm font-medium text-gray-700">Price:</label>
                  <input type="number" v-model.number="newMenuItem.price" id="price" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Add Item
                </button>
              </form>
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

    <!-- Modal for editing menu item -->
    <div :style="{ display: showModal2 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Menu Item</h3>
            <div class="mt-5">
              <!-- Add Menu Item Form -->
              <form @submit.prevent="updateMenuItem($refs.Alert)">
                <!-- Form fields go here -->
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                  <input type="text" v-model="newMenuItem.name" id="name" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="images" class="block text-sm font-medium text-gray-700">Images (Separate with commas if
                    multiple):</label>
                  <input type="text" v-model="newMenuItem.images" id="images" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
                  <input type="text" v-model="newMenuItem.category" id="category" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                  <textarea v-model="newMenuItem.description" id="description" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                </div>

                <div class="mb-4">
                  <label for="price" class="block text-sm font-medium text-gray-700">Price:</label>
                  <input type="number" v-model.number="newMenuItem.price" id="price" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="showModal2 = false" type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem._id" class="flex items-center border-b border-gray-300 py-4">
        <!-- Left column for the image -->
        <div class="w-32 mr-4">
          <img :src="menuItem.images[0]" :alt="menuItem.name" class="w-full h-full object-cover rounded-md">
        </div>
        <!-- Right column for the text content -->
        <div class="flex-grow">
          <h2 class="text-xl font-semibold">{{ menuItem.name }}</h2>
          <p class="text-gray-600">Category: {{ menuItem.category }}</p>
          <p class="text-gray-600">Description: {{ menuItem.description }}</p>
          <p class="text-gray-600">Price: ${{ menuItem.price }}</p>
          <!-- Edit and Delete buttons -->
          <div class="flex">
            <button @click="getMenuItem(menuItem._id, $refs.Alert)" type="button"
              class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Edit</button>
            <button @click="deleteMenuItem(menuItem._id, $refs.Alert)"
              class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">Delete</button>
          </div>
        </div>
      </li>
    </ul>
    <!-- Show message if there are no menu items -->
    <p v-if="menuItems.length === 0" class="text-gray-600">No menu items available</p>
  </div>

  <Alert ref="Alert" />
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Alert from '@/components/Alert.vue';

import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';

export default {
  components: {
    Alert
  },
  setup() {
    // Reactive variables
    const showModal1 = ref(false);
    const showModal2 = ref(false);
    const newMenuItem = ref({
      name: '',
      images: [],
      category: '',
      description: '',
      price: null,
    });
    const menuItems = ref([]);

    // Fetch menu items when the component is mounted
    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menuitems');
        menuItems.value = response.data.menuItems;
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
      try {
        const dropzoneElement = document.getElementById("my-dropzone");
        if (!dropzoneElement) {
          console.error('Dropzone element not found.');
          return;
        }

        const myDropzone = new Dropzone(dropzoneElement, {
          url: 'http://localhost:5000/api/upload', // Your upload endpoint
          paramName: 'file', // Name of the file parameter
          maxFilesize: 10, // Maximum file size in MB
          acceptedFiles: 'image/*', // Accepted file types
          autoProcessQueue: true, // Disable auto upload
        });

        // Event listeners
        myDropzone.on('addedfile', (file) => {
          // File added
          console.log('Added file:', file);
        });

        myDropzone.on('error', (file, message) => {
          // Error handling
          console.error('Error uploading file:', message);
        });
      } catch (error) {
        console.error('Error initiating dropzone:', error);
      }
    });

    // Fetch a single menu item
    const getMenuItem = async (itemId, alertRef) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/menuitems/${itemId}`);
        const menuItem = response.data.menuItem;
        newMenuItem.value = {
          _id: menuItem._id,
          name: menuItem.name,
          images: menuItem.images.join(','),
          category: menuItem.category,
          description: menuItem.description,
          price: menuItem.price
        };
        showModal2.value = true;
      } catch (error) {
        console.error('Error fetching menu item:', error);
        // Show alert if failed to fetch menu item details
        alertRef.showAlert('Failed to fetch menu item details. Please try again later.');
      }
    };

    // Update a menu item
    const updateMenuItem = async (alertRef) => {
      try {
        const response = await axios.put(`http://localhost:5000/api/menuitems/${newMenuItem.value._id}`, newMenuItem.value);
        const updatedMenuItem = response.data.menuItem;
        const updatedItemIndex = menuItems.value.findIndex(item => item._id === updatedMenuItem._id);
        if (updatedItemIndex !== -1) {
          menuItems.value.splice(updatedItemIndex, 1, updatedMenuItem);
        }
        showModal2.value = false;
        resetForm();
        // Show success alert
        alertRef.showAlert('Menu item updated successfully!');
      } catch (error) {
        console.error('Error updating menu item:', error);
        // Show error alert if failed to update menu item
        alertRef.showAlert('Failed to update menu item. Please try again later.');
      }
    };

    // Add a new menu item
    const addMenuItem = async (alertRef) => {
      try {
        const response = await axios.post('http://localhost:5000/api/menuitems', newMenuItem.value);
        menuItems.value.push(response.data.menuItem);
        showModal1.value = false;
        resetForm();
        // Show success alert using the passed alertRef
        alertRef.showAlert('Menu item added successfully!');
      } catch (error) {
        console.error('Error adding menu item:', error);
        // Show error alert using the passed alertRef if failed to add menu item
        alertRef.showAlert('Failed to add menu item. Please try again later.');
      }
    };


    // Delete a menu item
    const deleteMenuItem = async (itemId, alertRef) => {
      try {
        await axios.delete(`http://localhost:5000/api/menuitems/${itemId}`);
        menuItems.value = menuItems.value.filter(item => item._id !== itemId);
        // Show success alert
        alertRef.showAlert('Menu item deleted successfully!');
      } catch (error) {
        console.error('Error deleting menu item:', error);
        // Show error alert if failed to delete menu item
        alertRef.showAlert('Failed to delete menu item. Please try again later.');
      }
    };

    // Reset form fields
    const resetForm = () => {
      newMenuItem.value = {
        _id: null,
        name: '',
        images: '',
        category: '',
        description: '',
        price: null,
      };
    };

    return {
      showModal1,
      showModal2,
      newMenuItem,
      menuItems,
      getMenuItem,
      updateMenuItem,
      addMenuItem,
      deleteMenuItem,
      resetForm
    };
  }
};
</script>

<style>/* Add your Tailwind CSS styles here */</style>