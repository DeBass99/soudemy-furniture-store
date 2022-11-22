<template>
  <div>
    <header>
      <Nav />
    </header>

    <section>
      <h1>{{ post.title }}</h1>
    </section>
  </div>
</template>

<script>
import blog from "/data/blog.json";
export default {
  data() {
    return {
      blogs: blog,
      slug: this.$route.params,
    };
  },

  computed: {
    post() {
      return this.blogs.find((post) => post.id == this.slug);
    },
  },
};
</script>

<style scoped></style>
