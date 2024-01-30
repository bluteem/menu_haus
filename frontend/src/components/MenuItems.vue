<template>
  <div class="py-6 px-6">
    <h2 class="text-2xl font-bold mb-4">Menu Items</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li v-for="item in menuItems" :key="item._id" class="border border-gray-300 rounded-md p-4 mb-4 flex">
        <!-- Left column for the image -->
        <div class="mr-4 w-32">
          <img :src="item.images[0]" alt="Menu item image" class="w-24 h-24 object-cover rounded-md">
        </div>
        <!-- Right column for the text content -->
        <div class="flex-grow">
          <h3 class="text-lg font-bold mb-2">{{ item.name }}</h3>
          <p class="text-gray-600">Category: {{ item.category }}</p>
          <p class="text-gray-600">Description: {{ item.description }}</p>
          <p class="text-gray-600">Price: ${{ item.price }}</p>
          <!-- Edit and Delete buttons -->
          <div class="flex">
            <button @click="editItem(item)"
              class="mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Edit</button>
            <button @click="deleteItem(item._id)"
              class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">Delete</button>
          </div>
        </div>
      </li>
    </ul>
    <!-- Show message if there are no menu items -->
    <p v-if="menuItems.length === 0" class="text-gray-600">No menu items available</p>

    <!-- Modal for editing -->
    <div v-if="isEditing" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
      aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Edit Menu Item</h3>
                <div class="mt-5">
                  <!-- Inside the modal dialog -->
                  <!-- Edit Form goes here -->
                  <form @submit.prevent="updateItem" class="mt-5">
                    <div class="mb-4">
                      <label for="editName" class="block text-sm font-medium text-gray-700">Name:</label>
                      <input type="text" id="editName" v-model="editedItem.name" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="editImages" class="block text-sm font-medium text-gray-700">Images:</label>
                      <input type="text" id="editImages" v-model="editedItem.images" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="editCategory" class="block text-sm font-medium text-gray-700">Category:</label>
                      <input type="text" id="editCategory" v-model="editedItem.category" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="editDescription" class="block text-sm font-medium text-gray-700">Description:</label>
                      <textarea id="editDescription" v-model="editedItem.description" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                    </div>

                    <div class="mb-4">
                      <label for="editPrice" class="block text-sm font-medium text-gray-700">Price:</label>
                      <input type="number" id="editPrice" v-model.number="editedItem.price" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <button type="submit"
                      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Update
                      Item</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="closeModal" type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Menu Item Modal -->
    <div v-if="showAddMenuItemModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add New Menu Item</h3>
                <div class="mt-5">
                  <!-- Inside the modal dialog -->
                  <!-- Add Form goes here -->
                  <form @submit.prevent="addItem" class="mt-5">
                    <div class="mb-4">
                      <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                      <input type="text" v-model="name" id="name" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="images" class="block text-sm font-medium text-gray-700">Images:</label>
                      <input type="text" v-model="images" id="images" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
                      <input type="text" v-model="category" id="category" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <div class="mb-4">
                      <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                      <textarea v-model="description" id="description" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                    </div>

                    <div class="mb-4">
                      <label for="price" class="block text-sm font-medium text-gray-700">Price:</label>
                      <input type="number" v-model.number="price" id="price" required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    </div>

                    <button type="submit"
                      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Add
                      Item</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="closeAddModal" type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const name = ref('');
    const images = ref('');
    const category = ref('');
    const description = ref('');
    const price = ref(0);
    const isEditing = ref(false);
    const editedItem = ref({});

    const editItem = (item) => {
      isEditing.value = true;
      editedItem.value = { ...item };
    };

    const deleteItem = async (itemId) => {
      try {
        await axios.delete(`http://localhost:5000/api/menuitems/${itemId}`);
        props.menuItems = props.menuItems.filter(item => item._id !== itemId);
      } catch (error) {
        console.error('Error deleting menu item:', error);
        alert('Failed to delete menu item. Please try again later.');
      }
    };

    const updateItem = async () => {
      try {
        const response = await axios.put(`http://localhost:5000/api/menuitems/${editedItem.value._id}`, editedItem.value);
        const updatedItemIndex = props.menuItems.findIndex(item => item._id === editedItem.value._id);
        if (updatedItemIndex !== -1) {
          props.menuItems.splice(updatedItemIndex, 1, response.data.menuItem);
        }
        isEditing.value = false;
        editedItem.value = {};
        alert('Menu item updated successfully!');
      } catch (error) {
        console.error('Error updating menu item:', error);
        alert('Failed to update menu item. Please try again later.');
      }
    };

    const closeModal = () => {
      isEditing.value = false;
    };

    const addItem = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/menuitems', {
          name: name.value,
          images: images.value.split(','),
          category: category.value,
          description: description.value,
          price: price.value
        });
        props.menuItems.push(response.data.menuItem);
        name.value = '';
        images.value = '';
        category.value = '';
        description.value = '';
        price.value = 0;
        alert('Menu item added successfully!');
      } catch (error) {
        console.error('Error adding menu item:', error);
        alert('Failed to add menu item. Please try again later.');
      }
    };

    const closeAddModal = () => {
      name.value = '';
      images.value = '';
      category.value = '';
      description.value = '';
      price.value = 0;
      closeModal();
    };

    return {
      name,
      images,
      category,
      description,
      price,
      isEditing,
      editedItem,
      editItem,
      deleteItem,
      updateItem,
      closeModal,
      addItem,
      closeAddModal
    };
  }
}
</script>

<style>
/* Add your component-specific styles here */
</style>
