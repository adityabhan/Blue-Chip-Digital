<template>
  <div id="footer">
    <b-card style="max-width: 10rem; background: black">
      <b-list-group>
        <b-list-group-item href="#">About</b-list-group-item>
        <b-list-group-item href="#">Projects</b-list-group-item>
        <b-list-group-item href="#">Costs</b-list-group-item>
      </b-list-group>
    </b-card>

    Social

    <div class="h4">
      <b-icon v-b-tooltip.hover title="Twitter" class="social-media-icon" icon="twitter"></b-icon>
      <b-icon class="social-media-icon" icon="facebook"></b-icon>
      <b-icon class="social-media-icon" icon="Instagram"></b-icon>
      <b-icon class="social-media-icon" icon="exclamation-triangle"></b-icon>
    </div>
  </div>
</template>

<style scoped>
#footer {
  background: black;
  color: white;
}

.social-media-icon{
 padding-right: 25px;
}

</style>
