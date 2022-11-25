<template>
  <div>
    <Nav />
    <b-container>
      <div class="heading">
        <h2>About Us</h2>
      </div>

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

      <img src="~/assets/about lamp.png" alt="" style="width: 100%" />

      <section class="stat">
        <b-row>
          <b-col>
            <h3>Functionality meets perfection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa
              libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur.
              Mattis proin enim, nam porttitor vitae.
            </p>
          </b-col>

          <b-col class="status">
            <div class="percent">
              <div class="top">
                <h4>Creativity</h4>
                <h4>72%</h4>
              </div>
              <img src="~/assets/72.png" alt="" style="width: 100%" />
            </div>

            <div class="percent">
              <div class="top">
                <h4>Advertising</h4>
                <h4>84%</h4>
              </div>
              <img src="~/assets/84.png" alt="" style="width: 100%" />
            </div>

            <div class="percent">
              <div class="top">
                <h4>Design</h4>
                <h4>72%</h4>
              </div>
              <img src="~/assets/72.png" alt="" style="width: 100%" />
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="blog">
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
      </section>
    </b-container>
  </div>
</template>

<script>
import json from "~/data/blog.json";
export default {
  data() {
    return {
      blogs: json,
    };
  },
  methods: {
    filterItems: function (items) {
      return items.filter(function (item) {
        return item.id > 2;
      });
    },
  },
};
</script>

<style scoped>
.heading {
  background-image: url("~/assets/about head.png");
  background-size: cover;
  height: 468px;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.status {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat {
  margin: 80px 0px;
}

.percent {
  margin-bottom: 38px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.blog {
  display: flex;
  justify-content: center;
}

[deck] {
  display: flex;
}

@media only screen and (max-width: 600px) {
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
