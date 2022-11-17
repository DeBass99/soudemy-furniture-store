<template>
  <div>
    <b-card-group deck>
      <WeekCard
        v-for="(product, i) in products"
        :key="i"
        :name="product.name"
        :price="product.price"
        :status="product.status"
        :image="`${product.image}`"
      />
    </b-card-group>
  </div>
</template>

<script>
import json from "~/data/weekly.json";
export default {
  data() {
    return {
      products: json,
    };
  },
};
</script>

<style scoped></style>
