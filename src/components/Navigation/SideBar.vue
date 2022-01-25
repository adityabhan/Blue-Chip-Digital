<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button> -->
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div>
        <b-list-group>
          <router-link to="/point1">
            <b-list-group-item variant="info">Point 1</b-list-group-item>
          </router-link>
          <b-list-group-item href="#" variant="info">Point 2</b-list-group-item>
          <b-list-group-item href="#" variant="info">Point 3</b-list-group-item>
          <b-list-group-item href="#" variant="info">Point 4</b-list-group-item>
        </b-list-group>
      </div>
      <div class="px-3 py-2">
        <p>Can have a picture with Description</p>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>
