<template>
  <div>
    <img src="../../../assets/SVG/01.svg" :alt="text" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "cardHorizontal",
  props: {
    image: String,
    text: String,
  },
};
</script>
<style scoped lang="scss">
div {
  margin: 30px 0;
  width: 100%;
  padding: 20px;
  background: white;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  img {
    width: 10%;
    text-align: center;
    max-width: 80px;
  }
  p {
    width: 90%;
    text-align: left;
    font-size: 1.2rem;
  }
}
</style>
