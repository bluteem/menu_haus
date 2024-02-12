<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <Team />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";
import Team from "../components/Team.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    Team
  }
};

</script>

<style>
</style>