<template>
  <div class="container mx-auto py-6">
    <h1 class="text-3xl font-bold mb-4">Menu Items</h1>

    <!-- Add Menu Item Button -->
    <button @click="showModal1 = true"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
      Add Menu Item
    </button>

    <!-- Modal for adding a new menu item -->
    <div v-if="showModal1" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Add New Menu Item</h3>
            <div class="mt-5">
              <!-- Add Menu Item Form -->
              <form @submit.prevent="addMenuItem">
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
    <div v-if="showModal2" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Menu Item</h3>
            <div class="mt-5">
              <!-- Add Menu Item Form -->
              <form @submit.prevent="updateMenuItem">
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
                  Edit Item
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
            <button @click="getMenuItem(menuItem._id)" type="button"
              class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Edit</button>
            <button @click="deleteMenuItem(menuItem._id)"
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
import axios from 'axios'; // Import the Axios library
import Alert from '@/components/Alert.vue';

export default {
  data() {
    return {
      showModal1: false,
      showModal2: false,
      newMenuItem: {
        name: '',
        images: '', // Add an empty string for images
        category: '', // Add an empty string for category
        description: '', // Add an empty string for description
        price: null, // Add null for price, assuming it's a number
      },
      menuItems: [] // Initialize an empty array to store menu items
    };
  },
  components: {
    Alert
  },
  methods: {
    async fetchMenuItems() {
      try {
        const response = await axios.get('http://localhost:5000/api/menuitems');
        this.menuItems = response.data.menuItems;
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    },
    async getMenuItem(itemId) {
      try {
        const response = await axios.get(`http://localhost:5000/api/menuitems/${itemId}`);
        const menuItem = response.data.menuItem;

        // Populate the form fields with the retrieved menu item data
        this.newMenuItem = {
          _id: menuItem._id,
          name: menuItem.name,
          images: menuItem.images.join(','),
          category: menuItem.category,
          description: menuItem.description,
          price: menuItem.price
        };

        this.showModal2 = true;
      } catch (error) {
        console.error('Error fetching menu item:', error);
        this.$refs.Alert.showAlert('Failed to fetch menu item details. Please try again later.');
      }
    },
    async updateMenuItem() {
      try {
        const response = await axios.put(`http://localhost:5000/api/menuitems/${this.newMenuItem._id}`, this.newMenuItem);

        // Retrieve the updated menu item from the response
        const updatedMenuItem = response.data.menuItem;

        // Find the index of the updated menu item in the menuItems array
        const updatedItemIndex = this.menuItems.findIndex(item => item._id === updatedMenuItem._id);

        // If the updated menu item exists in the array, replace it with the updated version
        if (updatedItemIndex !== -1) {
          this.menuItems.splice(updatedItemIndex, 1, updatedMenuItem);
        }

        this.showModal2 = false;
        this.resetForm();

        this.$refs.Alert.showAlert('Menu item updated successfully!');
      } catch (error) {
        console.error('Error updating menu item:', error);
        this.$refs.Alert.showAlert('Failed to update menu item. Please try again later.');
      }
    },
    async addMenuItem() {
      try {
        const response = await axios.post('http://localhost:5000/api/menuitems', this.newMenuItem);
        this.menuItems.push(response.data.menuItem);

        this.showModal1 = false;
        this.resetForm();

        this.$refs.Alert.showAlert('Menu item added successfully!');
      } catch (error) {
        console.error('Error adding menu item:', error);
        this.$refs.Alert.showAlert('Failed to add menu item. Please try again later.!');
      }
    },
    async deleteMenuItem(itemId) {
      try {
        await axios.delete(`http://localhost:5000/api/menuitems/${itemId}`);
        // Filter out the deleted menu item from the menuItems array
        this.menuItems = this.menuItems.filter(item => item._id !== itemId);
        this.$refs.Alert.showAlert('Menu item deleted successfully!');
      } catch (error) {
        console.error('Error deleting menu item:', error);
        this.$refs.Alert.showAlert('Failed to delete menu item. Please try again later.');
      }
    },
    resetForm() {
      this.newMenuItem = {
        _id: null,
        name: '',
        images: '',
        category: '',
        description: '',
        price: null,
      };
    },
  },
  mounted() {
    this.fetchMenuItems(); // Fetch menu items when the component is mounted
  }
};
</script>

<style>/* Add your Tailwind CSS styles here */</style>