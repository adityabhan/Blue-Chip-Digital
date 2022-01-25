import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Contact from "./components/Contact/Contact.vue";
import HomePage from "./components/HomePage.vue";
import Test from "./components/test.vue";
import  More from "./components/More.vue";
import { publicPath } from "../vue.config";
export default new Router({
  mode: "history",
  base: publicPath,
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
    {
      path: "/more",
      name: "More",
      component: More,
    },
    {
      path: "/point1",
      name: "More",
      component: More,
    },
  ],
});

// const router = createRouter({
//     history : createWebHistory(process.env.BASE_URL),
//     routes
// })
