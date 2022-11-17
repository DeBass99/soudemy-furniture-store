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
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      nav: "white",
    };
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
</style>
