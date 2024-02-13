<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <Sidebar />

      <Home />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import Home from "../components/Home.vue";

export default {
  components: {
    // DashboardNavbar,
    Sidebar,
    Home
  }
};

</script>

<style>
</style>