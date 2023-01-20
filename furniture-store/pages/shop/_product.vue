<template>
  <div class="app">
    <Nav />

    <b-container>
      <div class="overview">
        <b-row>
          <b-col md="7">
            <img :src="`${item.image}`" alt="" />
          </b-col>

          <b-col md="5">
            <h2>{{ item.title }}</h2>
            <p class="price">{{ item.price }}</p>
            <p class="describe">{{ item.description }}</p>
            <div class="cart">
              <form class="form" @submit.prevent="addToCart">
                <div class="quantity">
                  <button
                    class="btn btn-outline-secondary btn-quantity"
                    type="button"
                    @click="decrement"
                  >
                    -
                  </button>

                  <b-form-input
                    type="number"
                    class="number"
                    v-model.number="quantityOfProduct"
                    min="1"
                    max="10"
                  ></b-form-input>

                  <button
                    class="btn btn-outline-secondary btn-quantity"
                    type="button"
                    @click="increment"
                  >
                    +
                  </button>
                </div>

                <button type="submit" class="add">Add to cart</button>
              </form>
            </div>

            <p>Category: {{ item.category }}</p>

            <div class="info">
              <div class="btns">
                <button @click="show1">Description</button>
                <button @click="show2">Additional informatiom</button>
              </div>

              <div class="information">
                <div class="flip" v-if="describe">
                  <p>{{ item.description }}</p>
                </div>
                <div class="flip" v-else>
                  <p>{{ item.additional }}</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

        <div class="related">
          <h3>Related products</h3>

          <b-card-group deck class="group">
            <product
              v-for="product in filterItems(products)"
              :key="product.id"
              :title="product.title"
              :image="`${product.image}`"
              :slug="`/shop/${product.id}`"
            />
          </b-card-group>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
export default {
  data() {
    return {
      slug: this.$route.params.product,
      describe: true,
      quantityOfProduct: 1,
    };
  },

  computed: {
    ...mapState({
      products: (store) => store.product.products,
    }),

    item() {
      return this.products.find((item) => item.id == this.slug);
    },
  },

  methods: {
    show1() {
      const state = Flip.getState(".flip");
      this.describe = true;
      Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from(".flip", {
        opacity: 0,
        duration: 1,
        x: 25,
      });
    },

    show2() {
      const state = Flip.getState(".flip");
      this.describe = false;
      Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from(".flip", {
        opacity: 0,
        duration: 1,
        x: 25,
      });
    },

    filterItems(items) {
      return items.filter((item) => {
        return item.id < 5;
      });
    },

    //input functions
    increment() {
      this.quantityOfProduct++;
    },
    decrement() {
      this.quantityOfProduct--;
    },

    //Vuex functions
    addToCart() {
      this.addProduct({
        product: this.item,
        quantity: this.quantityOfProduct,
      });
    },

    ...mapActions("cart", ["addProduct"]),
  },

  mounted() {},
};
</script>

<style scoped>
.overview {
  margin-top: 120px;
}
.overview img {
  width: 100%;
}

p.price {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000;
}

p.describe {
  margin-top: 26px;
}

.cart {
  display: flex;
  margin-bottom: 30px;
}

.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
}

input.number {
  width: 60px;
  outline: none;
  box-shadow: none;
  display: flex;
  justify-content: space-between;
}

button.add {
  width: 158px;
  height: 55px;
  background: #393939;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #e2e2e2;
  margin-left: 45px;
  border: none;
}

.btns {
  margin-top: 25px;
}

.btns button {
  border: none;
  background: none;
}

.btns button:hover {
  text-decoration: underline;
}

.btns button:focus {
  text-decoration: underline;
}

.information {
  margin-top: 20px;
}

.related {
  margin-top: 73px;
}

.group {
  margin-top: 43px;
}

.form {
  display: flex;
}

.number {
  margin: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.btn-quantity {
  color: #fff;
  background-color: #393939;
}

@media only screen and (max-width: 600px) {
  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
