<template>
  <div class="app">
    <img :src="`${order.product.image}`" alt="" />
    <h3>{{ order.product.title }}</h3>
    <h3>{{ order.quantity }} * ${{ order.product.price }}</h3>
    <button @click.prevent="remove(order.product)">remove</button>
  </div>
</template>

<script>
import { mapActions } from "Vuex";
export default {
  props: ["order"],

  methods: {
    ...mapActions("cart", ["removeFromCart"]),

    remove(product) {
      this.removeFromCart(product);
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

img {
  width: 60px;
}

h3 {
  font-size: 16px;
}

.app button {
  width: 100px;
  height: 35px;
  background-color: #2b2b2b;
  color: #fff;
}
</style>
