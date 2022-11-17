<template>
  <div>
    <b-card
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <p class="status">{{ status }}</p>

      <b-card-text>
        <h4>{{ name }}</h4>
        <p class="price">{{ price }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "status", "image"],
};
</script>

<style scoped>
p.status {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  margin: 24px 0px 0px 24px;
}

.card {
  border: none;
}
</style>
