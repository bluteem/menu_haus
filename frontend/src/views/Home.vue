<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <div class="w-full">
          <!-- Tabs -->
          <div class="sm:hidden">
            <select aria-label="Selected tab" v-model="selectedTab" class="block w-full p-2 border-gray-300 rounded-md">
              <option v-for="(tab, index) in tabs" :key="index" :value="tab.value">{{ tab.label }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <nav class="flex space-x-4" aria-label="Tabs">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{
                  'bg-gray-900 text-white': selectedTab === tab.value,
                  'text-gray-300 hover:bg-gray-700 hover:text-white': selectedTab !== tab.value
                }"
                @click="selectedTab = tab.value"
                class="px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              >
                {{ tab.label }}
              </button>
            </nav>
          </div>
        </div>
      </div>
      <!-- Content for each tab -->
      <div class="mt-4">
        <div v-for="(tab, index) in tabs" :key="index" v-if="selectedTab === tab.value">
          <!-- Render content for the selected tab -->
          <p class="text-lg font-semibold mb-2">{{ tab.label }}</p>
          <!-- Example: Render menu items belonging to this category -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(menuItem, idx) in menuItems"
              :key="idx"
              v-if="menuItem.category === tab.value"
              class="bg-white p-4 shadow rounded-lg"
            >
              <p class="text-xl font-semibold">{{ menuItem.name }}</p>
              <p class="text-gray-600">{{ menuItem.description }}</p>
              <p class="text-gray-800 font-bold">${{ menuItem.price.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTab: 'All', // Default selected tab
        tabs: [], // Array of tabs to be fetched dynamically
        menuItems: [ // Sample menu items
          { name: 'Item 1', category: 'Appetizers', description: 'Description for Item 1', price: 5.99 },
          { name: 'Item 2', category: 'Main Course', description: 'Description for Item 2', price: 12.99 },
          { name: 'Item 3', category: 'Desserts', description: 'Description for Item 3', price: 7.99 }
          // Add more menu items as needed
        ]
      };
    },
    mounted() {
      // Fetch menu categories from MongoDB and populate the tabs array
      this.fetchMenuCategories();
    },
    methods: {
      async fetchMenuCategories() {
        try {
          // Make an API call to fetch menu categories from the backend
          const response = await fetch('/api/menuCategories');
          if (!response.ok) {
            throw new Error('Failed to fetch menu categories');
          }
          const categories = await response.json();
          // Update the tabs array with the fetched categories
          this.tabs = [{ label: 'All', value: 'All' }, ...categories];
        } catch (error) {
          console.error('Error fetching menu categories:', error.message);
        }
      }
    }
  };
  </script>
  