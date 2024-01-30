<template>
  <div class="app">
    <!-- Header -->
    <header class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold px-6">My Restaurant</h1>
      </div>
    </header>

    <!-- Main content -->
    <main class="container mx-auto mt-6">

      <div class="grid grid-cols-1 mx-6 my-6">
        <!-- Add Menu Item Button -->
        <button @click="showAddMenuItemModal = true"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Add Menu
          Item</button>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- MenuItems component -->
        <div>
          <MenuItems :menuItems="menuItems" @add-item="addMenuItem" />
        </div>
      </div>

      <!-- Add Menu Item Modal -->
      <AddMenuItemModal v-if="showAddMenuItemModal" @closeModal="showAddMenuItemModal = false" @addMenuItem="addMenuItem" />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MenuItems from './components/MenuItems.vue';

export default {
  components: {
    MenuItems,
    AddMenuItemModal
  },
  setup() {
    const menuItems = ref([]);
    const showAddMenuItemModal = ref(false);

    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menuitems');
        menuItems.value = response.data.menuItems;
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    // Fetch menu items on component mount
    onMounted(fetchMenuItems);

    const addMenuItem = async (menuItem) => {
      try {
        const response = await axios.post('http://localhost:5000/api/menuitems', menuItem);
        menuItems.value.push(response.data.menuItem);
        // Close the modal after adding the menu item
        showAddMenuItemModal.value = false;
        // Show a success message
        alert('Menu item added successfully!');
      } catch (error) {
        console.error('Error adding menu item:', error);
        alert('Failed to add menu item. Please try again later.');
      }
    };

    return {
      menuItems,
      showAddMenuItemModal,
      addMenuItem
    };
  }
}
</script>

<style>
/* Add your component-specific styles here */
</style>
