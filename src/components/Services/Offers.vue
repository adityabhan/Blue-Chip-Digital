<template>
  <div id="offers">
    <div>
      <h4>Our Offers</h4>
    </div>
    <br />
    <br />

    <!-- <div id="cards">
      <Card :cards="cards" />
    </div> -->
    
    <div>
      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Get Amazed"
        sub-title="We are best in industry"
      >
        <b-card-text>
          The biggest part of our digital transformation is changing the way we
          think
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import Card from "../Views/Card.vue";
export default {
  name: "Offers",
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          cardTitle: "Title 1",
          imageSrc: "https://placekitten.com/300/300",
          cardText: "Short Description 1",
        },
        // {
        //   cardTitle: "Title 2",
        //   imageSrc: "https://placekitten.com/300/301",
        //   cardText: "Short Description 2",
        // },
      ],
    };
  },
  beforeCreate() {
    console.log("before creating");
  },
};
</script>

<style scoped>
#cards {
  display: inline-flex;
}

#offers {
  background: #c7d4e0;
}
</style>
