<template>
  <div id="app" class="bg-gray-100 min-h-screen flex items-center justify-center">
    <MenuItems :menuItems="menuItems" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MenuItems from './components/MenuItems.vue';

export default {
  components: {
    MenuItems
  },
  setup() {
    const menuItems = ref([]);

    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menuitems');
        menuItems.value = response.data.menuItems;
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    onMounted(fetchMenuItems);

    return {
      menuItems
    };
  }
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
