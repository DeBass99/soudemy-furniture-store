<template>
  <div>
    <Nav />
    <b-container v-if="products.length >= 1">
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

    <b-container v-else>
      <div class="empty">
        <img src="~/assets/empty cart.png" alt="" />
        <h1>Your Cart is Empty</h1>
        <p>Looks like you haven’t added anything to your cart yet</p>
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

.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 60px;
  text-align: center;
}

.empty img {
  width: 30%;
}

.empty h1 {
  margin-top: 45px;
}

@media only screen and (max-width: 600px) {
  .empty img {
    width: 50%;
  }
}
</style>
