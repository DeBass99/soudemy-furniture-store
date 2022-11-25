<template>
  <div>
    <header>
      <Nav :color="this.nav" />

      <div class="slide">
        <Carousel />
      </div>
    </header>

    <section class="week-products">
      <b-container>
        <b-row>
          <b-col class="md">
            <h2>Products of the week</h2>
            <p class="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>

            <div class="weekly-products">
              <WeekGroup />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="img-showcase">
      <b-container>
        <b-row>
          <b-col class="md-7 hide-mobile"> </b-col>
          <b-col class="md-5">
            <p style="color: #fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
            <button class="caro-btn">
              view more <img src="~/assets/white arrow.png" alt="" />
            </button>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="video-showcase"></section>

    <section class="categories">
      <b-container>
        <b-row class="category reverse">
          <b-col class="md cat-text">
            <h2>Stylish Chairs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
            <button class="caro-btn btn-black">
              view more <img src="~/assets/black arrow.png" alt="" />
            </button>
          </b-col>
          <b-col class="md"
            ><img src="~/assets/chair.png" alt="" class="image right"
          /></b-col>
        </b-row>

        <b-row class="category">
          <b-col class="md"
            ><img src="~/assets/table.png" alt="" class="image left"
          /></b-col>
          <b-col class="md cat-text">
            <h2>Table</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
            <button class="caro-btn btn-black">
              view more <img src="~/assets/black arrow.png" alt="" />
            </button>
          </b-col>
        </b-row>

        <b-row class="category reverse">
          <b-col class="md cat-text">
            <h2>contemporary lamps</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
            <button class="caro-btn btn-black">
              view more <img src="~/assets/black arrow.png" alt="" />
            </button>
          </b-col>
          <b-col><img src="~/assets/lamp.png" alt="" class="image right2" /></b-col>
        </b-row>
      </b-container>
    </section>

    <section class="delivery">
      <b-container>
        <div class="express">
          <h5>order now for an <strong> express delivery in 24h !</strong></h5>
          <button class="caro-btn btn-black">
            view more <img src="~/assets/black arrow.png" alt="" />
          </button>
        </div>
      </b-container>
    </section>

    <section class="perks">
      <b-container>
        <div class="perk">
          <div class="perk-item">
            <div class="perk-title">
              <img src="~/assets/clock icon.png" alt="" />
              <h4>Shope online</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio
            </p>
          </div>

          <div class="perk-item">
            <div class="perk-title">
              <img src="~/assets/bag icon.png" alt="" />
              <h4>Free shipping</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio
            </p>
          </div>

          <div class="perk-item">
            <div class="perk-title">
              <img src="~/assets/card icon.png" alt="" />
              <h4>Return policy</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio
            </p>
          </div>

          <div class="perk-item">
            <div class="perk-title">
              <img src="~/assets/dollar icon.png" alt="" />
              <h4>PAYMENT</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
              odio odio
            </p>
          </div>
        </div>
      </b-container>
    </section>

    <section class="blogs">
      <b-container>
        <div class="blog">
          <b-card-group deck>
            <blogItem
              v-for="blog in filterItems(blogs)"
              :key="blog.id"
              :title="blog.title"
              :author="blog.author"
              :date="blog.date"
              :image="`${blog.image}`"
              :slug="`/blogs/${blog.id}`"
            />
          </b-card-group>
        </div>
      </b-container>
    </section>

    <section class="testimonials">
      <b-container class="md">
        <testimonials />
      </b-container>
    </section>
  </div>
</template>

<script>
import json from "~/data/blog.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "IndexPage",

  data() {
    return {
      nav: "white",
      blogs: json,
    };
  },
  mounted() {
    //animations
    gsap.from(".left", {
      scrollTrigger: {
        trigger: ".left",
        scrub: 0.7,
        start: "top center",
        end: "+100px",
      },
      x: "-50px",
      opacity: 0,
    });

    gsap.from(".right", {
      scrollTrigger: {
        trigger: ".right",
        scrub: 0.7,
        start: "top center",
        end: "+100px",
      },
      x: "50px",
      opacity: 0,
      stagger: true,
    });

    gsap.from(".right2", {
      scrollTrigger: {
        trigger: ".right2",
        scrub: 0.7,
        start: "top center",
        end: "+100px",
      },
      x: "50px",
      opacity: 0,
      stagger: true,
    });
  },

  methods: {
    filterItems: function (items) {
      return items.filter(function (item) {
        return item.id < 3;
      });
    },
  },
};
</script>

<style scoped>
.slide {
  margin-top: -60px;
  z-index: -2;
}

.week-products {
  text-align: center;
  padding: 70px 0px;
}

.weekly-products {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.img-showcase {
  background-image: url("~/assets/showcase1.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0px;
}

.video-showcase {
  background-image: url("~/assets/poster.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 523px;
}

.categories {
  margin: 70px 0px;
}

.category {
  margin: 70px 0px;
}

img.image {
  width: 100%;
}

.btn-black {
  color: #252525;
  border-color: #252525;
}

.cat-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.delivery {
  padding: 100px 0px;
  background: #efefef;
}

.express {
  display: flex;
  justify-content: center;
  align-items: center;
}

.express button {
  margin-left: 10px;
}

.perks {
  margin: 140px 0px;
}

.perk {
  display: flex;
}

.perk-title {
  display: flex;
  align-items: center;
}

.perk-title h3 {
  margin-left: 10px;
}

.perk-item p {
  font-size: 18px;
}

.blog {
  display: flex;
  justify-content: center;
  padding: 0px;
}

.testimonials {
  margin-top: 80px;
  background: #efefef;
  padding: 70px 0px;
}

@media only screen and (max-width: 600px) {
  .category {
    display: flex;
    flex-direction: column;
  }

  .reverse {
    flex-direction: column-reverse;
  }

  .hide-mobile {
    display: none;
  }

  .express {
    flex-direction: column;
    text-align: center;
  }

  .express button {
    margin-top: 10px;
  }

  .perk {
    flex-direction: column;
  }

  .perk-item {
    text-align: center;
    margin: 10px 0px;
  }

  .perk-title {
    justify-content: center;
  }
}
</style>
