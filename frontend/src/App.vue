<!-- App.vue -->

<template>
  <div id="app" class="bg-gray-100 min-h-screen flex items-center justify-center">
    <MenuItems />
  </div>
</template>

<script>
import MenuItems from './components/MenuItems.vue';

export default {
  components: {
    MenuItems
  }
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>