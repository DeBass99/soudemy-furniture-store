<template>
  <div>
    <div v-if="preloader">
      <Preloader />
    </div>

    <div v-else>
      <Nuxt />
      <NotificationList />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preloader: true,
    };
  },

  methods: {
    preloadTime() {
      setTimeout(() => {
        this.preloader = false;
      }, 1000);
    },
  },

  mounted() {
    this.preloadTime();
  },
};
</script>

<style>
html body {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

h2 {
  font-style: normal;
  font-weight: 7d00;
  font-size: 44px;
  color: #373737;
}

h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  color: #373737;
}

h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  color: #373737;
}

h5 {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  color: #373737;
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #ababab;
}

@media only screen and (max-width: 600px) {
  html body {
    overflow-x: none;
  }
}
</style>
