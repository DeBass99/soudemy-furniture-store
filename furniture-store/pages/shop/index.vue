<template>
  <div>
    <header>
      <Nav />
    </header>

    <b-container>
      <div class="page">
        <b-row class="grid-row">
          <b-col md="8">
            <div class="empty" v-if="none">
              <img src="~/assets/not found.png" alt="" />
              <h1>Result Not Found</h1>
              <p>
                Please try again with another <br />
                keywords or maybe use generic term
              </p>
            </div>

            <div v-else>
              <b-card-group deck class="cards">
                <product
                  class="single-card"
                  v-for="product in filteredProducts"
                  :key="product.id"
                  :title="product.title"
                  :price="product.price"
                  :image="`${product.image}`"
                  :slug="`/shop/${product.id}`"
                />
              </b-card-group>
            </div>
          </b-col>

          <b-col md="4" class="grid-two">
            <div class="search">
              <div class="form">
                <input
                  type="text"
                  placeholder="search..."
                  v-model="search"
                  @keypress.enter="clickFilter"
                />
                <button @click.prevent="clickFilter()">
                  <img src="~/assets/search button.svg" alt="" />
                </button>
              </div>

              <div class="categories">
                <h4>Categories</h4>
                <div class="buttons">
                  <button @click="all">All</button>
                  <button @click="light">Light</button>
                  <button @click="dark">Dark</button>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "Vuex";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
export default {
  data() {
    return {
      search: "",
      filteredProducts: [],
      none: false,
    };
  },

  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),

    filteredProduct() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    this.filteredProducts = this.products;
  },

  methods: {
    clickFilter() {
      this.filteredProducts = this.products.filter((product) => {
        return product.title.toLowerCase().match(this.search.toLowerCase());
      });

      if (this.filteredProducts == 0) {
        this.none = true;
      } else {
        this.none = false;
      }
    },

    light() {
      this.filteredProducts = this.products.filter((product) => {
        return product.category.match("light");
      });
    },

    dark() {
      this.filteredProducts = this.products.filter((product) => {
        return product.category.match("dark");
      });
    },

    all() {
      this.filteredProducts = this.products;
    },
  },
};
</script>

<style scoped>
.page {
  margin-top: 120px;
}

.search {
  height: 71px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 22px;
}

.form {
  display: flex;
  justify-content: space-between;
}

.search input {
  border: none;
  width: 100%;
}

.search input:focus {
  border: none;
  outline: none;
}

.search button {
  border: none;
  background: none;
}

a {
  text-decoration: none;
}

.categories {
  margin-top: 40px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
}

.buttons button {
  text-align: left;
  margin: 16px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #7e7e7e;
}

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 100px;
  flex-direction: column;
  text-align: center;
}

.empty h1 {
  margin-top: 30px;
}

@media only screen and (max-width: 600px) {
  .grid-row {
    display: flex;
    flex-direction: column-reverse;
  }

  .grid-two {
    margin-bottom: 180px;
  }

  .buttons {
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 10px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
