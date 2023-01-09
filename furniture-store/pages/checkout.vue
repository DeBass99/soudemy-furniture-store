<template>
  <div>
    <Nav />
    <b-container>
      <div class="items">
        <ProductCheckout v-for="item in products" :key="item.id" :order="item" />
        <hr />
        <div class="total">
          <div class="amount">
            <h3>total: ${{ total }}</h3>
          </div>
          <div class="button">
            <button @click.prevent="removeAll()">clear cart</button>
          </div>
        </div>
        <hr />
        <div class="payment">
          <button class="pay">Pay Now</button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "Vuex";
import { mapState } from "Vuex";
import { mapGetters } from "Vuex";
export default {
  computed: {
    ...mapState({
      products: (store) => store.cart.cart,
    }),

    ...mapGetters("cart", {
      total: "cartTotalPrice",
    }),
  },

  methods: {
    ...mapActions("cart", { removeAll: "clearCart" }),
  },
};
</script>

<style scoped>
.items {
  margin-top: 150px;
}

.total {
  display: flex;
  justify-content: space-between;
}

.button button {
  width: 100px;
  height: 35px;
  background-color: #2b2b2b;
  color: #fff;
}

.total {
  margin-top: 40px;
}

.payment {
  margin: 80px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button.pay {
  width: 400px;
  height: 45px;
  background-color: #2b2b2b;
  color: #fff;
  border: none;
}
</style>
