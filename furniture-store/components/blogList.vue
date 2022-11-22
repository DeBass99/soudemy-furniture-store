<template>
  <div>
    <b-card-group deck>
      <blogItem
        v-for="blog in blogs"
        :key="blog.id"
        :title="blog.title"
        :author="blog.author"
        :date="blog.date"
        :image="`${blog.image}`"
      />
    </b-card-group>
  </div>
</template>

<script>
import blog from "~/data/blog";
export default {
  data() {
    return {
      blogs: blog,
    };
  },
};
</script>

<style scoped></style>
