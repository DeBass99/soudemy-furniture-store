<template>
  <div>
    <header>
      <Nav />
    </header>

    <b-container>
      <div class="page">
        <b-row class="grid-row">
          <b-col md="8">
            <b-card-group deck class="cards">
              <product
                v-for="product in products"
                :key="product.id"
                :title="product.title"
                :price="product.price"
                :image="`${product.image}`"
                :slug="`/shop/${product.id}`"
              />
            </b-card-group>
          </b-col>

          <b-col md="4" class="grid-two">
            <div class="search">
              <form action="submit" class="form">
                <input type="text" placeholder="search..." />
                <button type="submit">
                  <img src="~/assets/search button.svg" alt="" />
                </button>
              </form>

              <div class="categories">
                <h4>Categories</h4>
                <div class="buttons">
                  <button>Ceiling</button>
                  <button>Floor</button>
                  <button>Led</button>
                  <button>Modern</button>
                  <button>Retro</button>
                  <button>Wood</button>
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
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
  },

  mounted() {},

  methods: {
    filterItems: function (items) {
      return items.filter(function (item) {
        return item.id < 4;
      });
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
  flex-direction: column;
}

.buttons button {
  text-align: left;
  margin: 16px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #7e7e7e;
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
