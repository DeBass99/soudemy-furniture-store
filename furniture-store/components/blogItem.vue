<template>
  <div>
    <b-card
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem"
      class="mb-2"
    >
      <b-card-text>
        <p class="info">{{ date }} / by {{ author }}</p>
        <h4>{{ title }}</h4>
        <nuxt-link to="#"><p class="info">read more</p></nuxt-link>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["author", "date", "title", "image"],
};
</script>

<style scoped>
.card {
  border: none;
  text-align: center;
}

a p {
  text-decoration: underline;
}

p.info {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
</style>
