<template>
  <div class="app" v-if="cart.length >= 1">
    <div class="mini-cart" v-for="item in cart" :key="item.id">
      <div class="title">
        <h6>{{ item.product.title }}</h6>
      </div>

      <div class="infos">
        <div class="amount">
          <p>{{ item.quantity }} * ${{ item.product.price }}</p>
        </div>

        <div class="button">
          <button @click.prevent="removeProduct(item.product)">remove</button>
        </div>
      </div>
    </div>

    <hr />

    <div class="total">
      <div class="amount">
        <p>total: ${{ total }}</p>
      </div>
    </div>

    <div class="button proceed">
      <button @click="$router.push('/checkout')">Proceed to checkout</button>
    </div>
  </div>

  <div class="empty" v-else>
    <img src="~/assets/empty cart.png" alt="" />
    <h4>Your Cart is Empty</h4>
    <p>Looks like you haven’t added anything to your cart yet</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartFilled: false,
    };
  },

  computed: {
    ...mapState({
      cart: (store) => store.cart.cart,
    }),

    ...mapGetters({
      total: "cart/cartTotalPrice",
    }),
  },

  methods: {
    ...mapActions("cart", ["removeFromCart"]),

    removeProduct(product) {
      this.removeFromCart(product);
    },
  },
};
</script>
s

<style scoped>
.app {
  padding: 15px;
  width: 200px;
}

.mini-cart {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  background-color: #fffaf4;
  padding: 10px;
}

.infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
}

.amount p {
  color: #000;
  font-size: 16px;
  margin-top: 10px;
}

.button button {
  width: 60px;
  font-size: 10px;
  background-color: #2b2b2b;
  color: #fff;
  border: none;
}

.proceed button {
  width: 100%;
  height: 35px;
}

.total {
  display: flex;
  justify-content: space-between;
}

.empty {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  text-align: center;
}

.empty img {
  width: 125px;
}

.empty h4 {
  font-size: 16px;
  margin-top: 20px;
}

.empty p {
  font-size: 12px;
}
</style>
