<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <h2>Home</h2>
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
  }
};

</script>

<style>
</style>