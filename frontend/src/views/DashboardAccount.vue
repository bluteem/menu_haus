<template>
    <div class="flex h-screen overflow-hidden">

      <!-- <DashboardNavbar /> -->
      
      <DashboardSidebar />

      <Account />
      
    </div>
</template>

<script>
// import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from "../components/DashboardSidebar.vue";
import Account from "../components/Account.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    Account
  }
};

</script>

<style>
</style>