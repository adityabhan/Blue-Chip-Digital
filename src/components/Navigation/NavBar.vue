<template>
  <div>
    <div id="side-bar">
      <SideBar />
    </div>

    <div class="fixed-top">
      <b-navbar toggleable="lg" type="light" variant="light">
        <!-- <b-navbar-brand href="#">Blue Chip Digital</b-navbar-brand> -->

        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img
              :src="require('@/assets/pictures/logo-30.png')"
              class="d-inline-block"
              alt="Blue Chip"
            />
            Blue Chip Digital
          </b-navbar-brand>
        </b-navbar>

        <!-- for mobile view -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item href="#contact-us">Contact</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item v-b-toggle.sidebar-1>Options</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <router-link to="/test">
            <b-nav-item>Next Page</b-nav-item>
            </router-link>
          </b-navbar-nav>


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import SideBar from "./SideBar.vue";
export default {
  name: "NavigationBar",
  components: {
    SideBar,
  },
};
</script>
