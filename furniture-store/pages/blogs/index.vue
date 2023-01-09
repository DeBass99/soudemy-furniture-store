<template>
  <div>
    <header>
      <Nav />
    </header>

    <b-container>
      <div class="page">
        <b-row>
          <b-col md="8">
            <div class="content">
              <blogLg
                v-for="blog in blogs"
                :key="blog.id"
                :title="blog.title"
                :author="blog.author"
                :date="blog.date"
                :image="`${blog.image}`"
                :slug="`/blogs/${blog.id}`"
              />
            </div>
          </b-col>

          <b-col md="4">
            <div class="search">
              <form action="submit" class="form">
                <input type="text" placeholder="search..." />
                <button type="submit">
                  <img src="~/assets/search button.svg" alt="" />
                </button>
              </form>
            </div>

            <div class="ad">
              <h3>Lorem ipsum dolor sit amet, consectetur</h3>
              <img src="~/assets/ad.png" alt="" style="width: 100%" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et gravida ante
                dolor tristique euismod dui nam.
              </p>
            </div>

            <div class="recent-post">
              <h3>Recent Post</h3>
              <nuxt-link
                :to="`/blogs/${recent.id}`"
                v-for="recent in filterItems(blogs)"
                :key="recent.id"
              >
                <p>{{ recent.title }}</p>
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import blog from "/data/blog.json";
export default {
  data() {
    return {
      blogs: blog,
    };
  },

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

.img-head img {
  width: 100%;
}

.info {
  margin-top: 20px;
}

.info p {
  font-size: 16px;
}

strong {
  color: #000;
}

.content-img {
  display: flex;
  margin-top: 25px;
  margin-bottom: 40px;
}

.content-img img {
  width: 300px;
}

.content-img img:nth-child(2) {
  margin-left: 40px;
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

.ad {
  margin-top: 60px;
}

.ad p {
  margin-top: 25px;
}

.recent-post {
  margin-top: 60px;
}

a {
  text-decoration: none;
}
</style>
