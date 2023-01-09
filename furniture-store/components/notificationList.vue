<template>
  <div class="list">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  computed: {
    ...mapState({
      notifications: "notifications",
    }),
  },
};
</script>

<style scoped>
.list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
