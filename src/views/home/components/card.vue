<template>
  <div class="card-section">
    <div class="image">
      <img :src="image" :alt="text" />
      <!-- <uil-Airplay size="100%" clss="logo" /> -->
    </div>

    <p>{{ text }}</p>
  </div>
</template>

<script>
// import { UilAirplay } from "@iconscout/vue-unicons";

export default {
  name: "cardComponent",
  props: {
    text: String,
    image: String,
  },
  components: {
    // UilAirplay,
  },
};
</script>

<style scoped lang="scss">
.card-section {
  width: 100%;
  padding: 10px;
  text-align: left;
  color: #2a65c5;
  background: white;
  min-height: 320px;
  border-radius: 10px;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  .image {
    padding: 20px 0;
    height: 40%;
    img {
      width: 100%;
    }
    width: 80px;
  }
  p {
    padding: 20px 0;
    height: 60%;
    font-size: 22px;
  }
}
</style>
