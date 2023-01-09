<template>
  <div>
    <nuxt-link :to="slug">
      <b-card
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 13rem"
        class="mb-2"
      >
        <b-card-text>
          <h4 class="title">{{ title }}</h4>
          <p class="price">{{ price }}</p>
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "slug", "price"],
};
</script>

<style scoped>
.card {
  border: none;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
}

.title {
  font-size: 19px;
}

.price {
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
}
</style>
