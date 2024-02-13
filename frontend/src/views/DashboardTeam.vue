<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <Sidebar />

      <Team />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import Sidebar from "../components/Sidebar.vue";
import Team from "../components/Team.vue";

export default {
  components: {
    // DashboardNavbar,
    Sidebar,
    Team
  }
};

</script>

<style>
</style>