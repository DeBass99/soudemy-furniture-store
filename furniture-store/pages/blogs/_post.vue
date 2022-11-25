<template>
  <div>
    <header>
      <Nav />
    </header>

    <section>
      <h1>{{ post.title }}</h1>
      <img :src="post.image" alt="" />
    </section>
  </div>
</template>

<script>
import blog from "/data/blog.json";
export default {
  data() {
    return {
      blogs: blog,
      slug: this.$route.params.post,
    };
  },

  computed: {
    post() {
      return this.blogs.find((post) => post.id == this.slug);
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 120px;
}
</style>
