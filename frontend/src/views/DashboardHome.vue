<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <DashboardHome />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";
import DashboardHome from "../components/DashboardHome.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    DashboardHome
  }
};

</script>

<style>
</style>