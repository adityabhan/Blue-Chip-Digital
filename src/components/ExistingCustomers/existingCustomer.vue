<template>
  <div style="text-align: center">
    <h4 >Our Existing customers</h4>
    <br />
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=54"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            rounded="circle"
            src="https://picsum.photos/250/250/?image=58"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=59"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <div>
      <b-img
        class="image-icon"
        v-b-tooltip.hover.bottom
        title="Amazon Market Place"
        :src="amazon"
        v-b-toggle.collapse-1
        fluid
      ></b-img>
      <b-img
        class="image-icon"
        :src="microsoft"
        v-b-toggle.collapse-1
        v-b-popover.hover.bottomleft="'I am popover content!'"
        title="Popover Title"
        fluid
      ></b-img>

      <b-img
        class="image-icon"
        :src="intel"
        v-b-toggle.collapse-1
        fluid
      ></b-img>
      <b-img
        class="image-icon"
        :src="flipkart"
        v-b-toggle.collapse-1
        fluid
      ></b-img>

      <!-- <b-button v-b-toggle.collapse-1 variant="primary">A</b-button>
    <b-button v-b-toggle.collapse-1 variant="primary">B</b-button>
    <b-button v-b-toggle.collapse-1 variant="primary">C</b-button>
    <b-button v-b-toggle.collapse-1 variant="primary">D</b-button> -->

      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">{{ collapseContent }}</p>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExistingCustomers",
  data() {
    return {
      collapseContent: "Default content and can be modified. ",
      amazon: require("../../assets/customers/amazon.jpg"),
      microsoft: require("../../assets/customers/microsoft.jpg"),
      intel: require("../../assets/customers/intel.png"),
      flipkart: require("../../assets/customers/flipkart.png"),
    };
  },
  methods: {
    registerContent(text) {
      console.log(text);
      this.collapseContent = text;
    },
  },
};
</script>

<style scoped>
.image-icon {
  height: 100px;
  margin-left: 30px;
}

/* .image-icon:hover {
  height: 120px;
  box-shadow: 0 0 3px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
  border-radius: 5px;
} */
</style>
