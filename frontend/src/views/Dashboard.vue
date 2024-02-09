<template>
    <div>
      <DashboardNavbar />

      <main class="container mx-auto px-4 py-8">
        <MenuItems />
      </main>
    
      
    </div>
</template>

<script>
import DashboardNavbar from '../components/DashboardNavbar.vue';
import MenuItems from '../components/MenuItems.vue';

export default {
  components: {
    DashboardNavbar,
    MenuItems
  }
};

</script>

<style>
</style>