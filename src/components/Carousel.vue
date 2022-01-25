<template>
  <div id="caro">
    <br />
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      fade
      indicators
      background="#ababab"
      img-width="50px"
      img-height="50px"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        text="Up Scale Your Business with Blue Chip Clicks"
        :img-src="blueChip1"
        content-visible-up="md"
      ></b-carousel-slide>

      <b-carousel-slide
        background="#f0942b"
        caption="We can always add a caption"
        :img-src="require('@/assets/pictures/blue-chip-white.jpg')"
        content-visible-up="md"
      ></b-carousel-slide>

      <b-carousel-slide
        text="Available on multiple devices"
        :img-src="require('@/assets/pictures/blue-chip-tab.jpg')"
        content-visible-up="md"
      ></b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Caption Area"
        text="Text Area."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      slide: 0,
      sliding: null,
      blueChip1: require('@/assets/pictures/blue-chip-dark.jpg'),
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
/* #caro{
  height: 500vh;
} */
</style>