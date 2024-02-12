<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <MenuCategories />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";
import MenuCategories from '../components/MenuCategories.vue';

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    MenuCategories
  }
};

</script>

<style>
</style>