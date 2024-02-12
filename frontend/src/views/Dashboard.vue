<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <MenuItems />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import MenuItems from '../components/MenuItems.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    MenuItems
  }
};

</script>

<style>
</style>