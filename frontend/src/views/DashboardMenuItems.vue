<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <Sidebar />

      <MenuItems />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import MenuItems from '../components/MenuItems.vue';

export default {
  components: {
    // DashboardNavbar,
    Sidebar,
    MenuItems
  }
};

</script>

<style>
</style>