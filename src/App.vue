<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HomePage /> -->
    <!-- <router-link to="/contact-us">Contact</router-link> -->
    <router-view></router-view>
    <br>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
