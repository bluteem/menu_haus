<template>
    <div>
      <Navbar />

      <main class="container mx-auto px-4 py-8">
        <MenuItems />
      </main>
    
      
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import MenuItems from '../components/MenuItems.vue';

export default {
  components: {
    Navbar,
    MenuItems
  }
};

</script>

<style>
</style>