<template>
  <div class="fixed-top app" :class="{ onScroll: !view.topOfPage }">
    <b-container>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand to="/" class="logo" :class="color">soudemy</b-navbar-brand>

        <div class="hide-desktop">
          <b-nav-item>
            <div>
              <b-button v-b-modal.modal-scrollable class="search-modal">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :class="color"
                    d="M12.9375 23.625C18.84 23.625 23.625 18.84 23.625 12.9375C23.625 7.03496 18.84 2.25 12.9375 2.25C7.03496 2.25 2.25 7.03496 2.25 12.9375C2.25 18.84 7.03496 23.625 12.9375 23.625Z"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    :class="color"
                    d="M24.75 24.75L22.5 22.5"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></b-button>

              <b-modal id="modal-scrollable" hide-footer hide-header>
                <div class="search">
                  <div class="form">
                    <input type="text" placeholder="search..." v-model="search" />
                    <button>
                      <img src="~/assets/search button.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div
                  v-if="visible"
                  class="product-list"
                  v-for="product in filterSearch"
                  :key="product.id"
                >
                  <nuxt-link :to="`/shop/${product.id}`" class="list-link">
                    <img :src="product.image" alt="" />
                    <h4>{{ product.title }}</h4>
                  </nuxt-link>
                </div>
              </b-modal>
            </div>
          </b-nav-item>

          <b-nav-item class="cart-item">
            <VDropdown :distance="0">
              <!-- This will be the popover reference (for the events and position) -->
              <button class="drop">
                <div class="checkout">
                  <div class="count">
                    <p>{{ count }}</p>
                  </div>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :class="color"
                      d="M8.4375 8.62874V7.53749C8.4375 5.00624 10.4738 2.51999 13.005 2.28374C16.02 1.99124 18.5625 4.36499 18.5625 7.32374V8.87624"
                      stroke="#303030"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      :class="color"
                      d="M10.1249 24.75H16.8749C21.3974 24.75 22.2074 22.9387 22.4437 20.7337L23.2874 13.9837C23.5912 11.2388 22.8037 9 17.9999 9H8.99993C4.19618 9 3.40868 11.2388 3.71243 13.9837L4.55618 20.7337C4.79243 22.9387 5.60243 24.75 10.1249 24.75Z"
                      stroke="#303030"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      :class="color"
                      d="M17.4323 13.5H17.4424"
                      stroke="#303030"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      :class="color"
                      d="M9.55632 13.5H9.56643"
                      stroke="#303030"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <!-- This will be the content of the popover -->
              <template #popper>
                <miniCart />
              </template>
            </VDropdown>
          </b-nav-item>
        </div>

        <b-navbar-toggle target="nav-collapse">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.375 7.875H23.625"
              stroke="#303030"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.375 13.5H23.625"
              stroke="#303030"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.375 19.125H23.625"
              stroke="#303030"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item> <nuxt-link to="/" :class="color"> Home </nuxt-link> </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/shop" :class="color"> Shop </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/about" :class="color"> About us </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/blogs" :class="color"> Blog </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto right-links hide-mobile">
            <b-nav-item>
              <div>
                <b-button v-b-modal.modal-1 class="search-modal">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :class="color"
                      d="M12.9375 23.625C18.84 23.625 23.625 18.84 23.625 12.9375C23.625 7.03496 18.84 2.25 12.9375 2.25C7.03496 2.25 2.25 7.03496 2.25 12.9375C2.25 18.84 7.03496 23.625 12.9375 23.625Z"
                      stroke="#303030"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      :class="color"
                      d="M24.75 24.75L22.5 22.5"
                      stroke="#303030"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></b-button>

                <b-modal id="modal-1" hide-footer hide-header>
                  <div class="search">
                    <div class="form">
                      <input type="text" placeholder="search..." v-model="search" />
                      <button>
                        <img src="~/assets/search button.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="visible"
                    class="product-list"
                    v-for="product in filterSearch"
                    :key="product.id"
                  >
                    <nuxt-link :to="`/shop/${product.id}`" class="list-link">
                      <img :src="product.image" alt="" />
                      <h4>{{ product.title }}</h4>
                    </nuxt-link>
                  </div>
                </b-modal>
              </div>
            </b-nav-item>

            <b-nav-item class="cart-item">
              <VDropdown :distance="0">
                <!-- This will be the popover reference (for the events and position) -->
                <button class="drop">
                  <div class="checkout">
                    <div class="count">
                      <p>{{ count }}</p>
                    </div>
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        :class="color"
                        d="M8.4375 8.62874V7.53749C8.4375 5.00624 10.4738 2.51999 13.005 2.28374C16.02 1.99124 18.5625 4.36499 18.5625 7.32374V8.87624"
                        stroke="#303030"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        :class="color"
                        d="M10.1249 24.75H16.8749C21.3974 24.75 22.2074 22.9387 22.4437 20.7337L23.2874 13.9837C23.5912 11.2388 22.8037 9 17.9999 9H8.99993C4.19618 9 3.40868 11.2388 3.71243 13.9837L4.55618 20.7337C4.79243 22.9387 5.60243 24.75 10.1249 24.75Z"
                        stroke="#303030"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        :class="color"
                        d="M17.4323 13.5H17.4424"
                        stroke="#303030"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        :class="color"
                        d="M9.55632 13.5H9.56643"
                        stroke="#303030"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <!-- This will be the content of the popover -->
                <template #popper>
                  <miniCart />
                </template>
              </VDropdown>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "Vuex";
import { mapGetters } from "Vuex";
import "floating-vue/dist/style.css";
export default {
  props: ["color"],

  data() {
    return {
      view: {
        topOfPage: true,
      },
      search: "",
      visible: false,
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  computed: {
    ...mapGetters({
      count: "cart/cartItemCount",
    }),

    ...mapState({
      products: (state) => state.product.products,
    }),

    filterSearch() {
      return this.products.map((product) => {
        if (product.title.toLowerCase().indexOf(this.search.toLowerCase())) {
          this.visible = true;
        } else {
          this.visible = false;
        }
        return product;
      });
    },
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 10) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else if (window.pageYOffset < 10) {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      } else {
      }
      {
      }
    },
  },
};
</script>

<style scoped>
.onScroll {
  background-color: rgb(176, 176, 176);
  transition: all 0.5s ease-in-out;
}
.navbar {
  background: none !important;
}

a.logo {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  border: none;
}

a {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin: 0px 6px;
  padding-bottom: 4px;
}

.nuxt-link-exact-active {
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  border-bottom: 4px solid #e2e2e2;
}

button.search-modal {
  background: none;
  border: none;
  box-shadow: none;
}

.cart-item {
  margin-top: 4px;
}

.white {
  color: #fff;
  stroke: #fff;
  border-color: #fff;
}

.right-links {
  margin-top: 20px;
}

.checkout {
  display: flex;
  flex-direction: column-reverse;
}

.count {
  width: 20px;
  height: 20px;
  background: #2b2b2b;
  color: #ababab;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
  top: -15px;
  left: 15px;
}

.count p {
  font-size: 14px;
}

button.drop {
  background: none;
  border: none;
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

.hide-desktop {
  display: none;
}

.product-list {
  display: flex;
  margin: 20px 0px;
}

.product-list img {
  width: 15%;
}

.product-list h4 {
  margin-left: 25px;
}

a.list-link {
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

a.list-link:hover {
  background-color: #e2e2e2;
}

@media only screen and (max-width: 600px) {
  .app {
    background: rgb(176, 176, 176);
  }

  .hide-mobile {
    display: none;
  }

  .hide-desktop {
    display: flex;
    list-style: none;
    margin-top: 15px;
  }

  .hide-desktop a {
    padding: 0px;
  }
}
</style>

<style>
.v-popper__arrow-container {
  display: none;
}
</style>
