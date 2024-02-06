<!-- App.vue -->
<template>
  <div id="app">
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
      <Navbar />

      <main class="container mx-auto px-4 py-8">
        <MenuItems />
      </main>
    
      
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MenuItems from './components/MenuItems.vue';

export default {
  name: "App",
  components: {
    Navbar,
    MenuItems
  }
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>