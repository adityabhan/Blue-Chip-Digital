<template>
  <div id="home-page">
    <hr />
    <div id="navigation-bar">
      <NavigationBar />
    </div>
    <hr />
    <br />
    <br />
    <div id="carousel-bar">
      <Carousel />
    </div>
    <hr />

    <div id="our-services">
      <Offers />
    </div>
    <hr />

    <div id="existing-customers">
      <ExistingCustomers />
    </div>
    <hr />

    <div>
      <router-link to="/more">More</router-link>
    </div>

    <div id="contact-us">
      <ContactUs />
    </div>
    <div id='footer'>Footer Bar <Footer/></div>
  </div>
</template>

<script>
import NavigationBar from "./Navigation/NavBar.vue";
import ContactUs from "./Contact/Contact.vue";
import Carousel from "./Carousel.vue";
import Offers from "./Services/Offers.vue";
import ExistingCustomers from "./ExistingCustomers/existingCustomer.vue";
import Footer from "./Footer.vue";
export default {
  name: "HomePage",
  components: {
    NavigationBar,
    Carousel,
    ContactUs,
    Offers,
    ExistingCustomers,
    Footer,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#carousel-bar {
  background: hsla(24, 92%, 46%, 0.911);
  max-height: 10%;
}
</style>
