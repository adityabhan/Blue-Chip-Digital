<template>
  <div>
    <b-row>
      <b-card-group deck v-for="(card, index) in cards" :key="index">
        <b-col>
          <b-card :title="card.cardTitle">
            <b-avatar :src="card.imageSrc" size="6rem"> </b-avatar>
            <b-card-text>
              {{ card.cardText }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-card-group>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    cards: { type: Array, default: [] },
  },
};
</script>
