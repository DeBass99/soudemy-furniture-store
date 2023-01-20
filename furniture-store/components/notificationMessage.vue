<template>
  <div>
    <div :class="typeClass" class="alert" fade show role="alert">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],

  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  methods: mapActions(["removeNotification"]),

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style scoped></style>
