<template>
  <div>
    <!-- <Sidebar></Sidebar>
    <div class="main-container">
      <div>
        <Navbar></Navbar>
      </div>
      <AppMain></AppMain>
    </div> -->
    <Search />
  </div>
</template>

<script>
import AppMain from "../components/AppMain.vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Search from '../components/Search.vue'
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Search
  },
};
</script>

<style lang="scss" scoped>
</style>