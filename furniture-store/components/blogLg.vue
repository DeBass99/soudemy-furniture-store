<template>
  <div class="app">
    <b-card
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 50rem"
      class="mb-2"
    >
      <b-card-text>
        <p class="info">{{ date }} / by {{ author }}</p>
        <h2>{{ title }}</h2>
        <nuxt-link :to="slug"><p class="info">read more</p></nuxt-link>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["author", "date", "title", "image", "slug"],
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
  font-size: 16px;
}
</style>
