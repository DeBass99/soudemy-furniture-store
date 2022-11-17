<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="slide-wrap" img-src="~/assets/slide 1.png">
        <div class="carousel-caption">
          <h1 class="caro-h1">All for your home</h1>
          <p class="caro-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio
            odio malesuada at condimentum adipiscing iaculis semper.
          </p>
          <button class="caro-btn">
            view more <img src="~/assets/white arrow.png" alt="" />
          </button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="~/assets/slide 1.png">
        <div class="carousel-caption">
          <h1 class="caro-h1">All for your home</h1>
          <p class="caro-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio
            odio malesuada at condimentum adipiscing iaculis semper.
          </p>
          <button class="caro-btn">
            view more <img src="~/assets/white arrow.png" alt="" />
          </button>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel-control-prev,
.carousel-control-next {
  top: 40%;
  height: 129px !important;
  width: 60px !important;
  background: #eeeeee !important;
}

.carousel-control-prev-icon {
  background-image: url("~/assets/left arrow.png") !important;
  height: 22px !important;
  width: 10px !important;
}

.carousel-control-next-icon {
  background-image: url("~/assets/right arrow.png") !important;
  height: 22px !important;
  width: 10px !important;
}

.carousel-caption {
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caro-h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
}

.caro-p {
  width: 584px;
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #ffffff;
}

.caro-btn {
  width: 242px;
  height: 78px;
  background: none;
  border: 1px solid #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
}

.caro-btn:hover img {
  margin-left: 10px;
  transition: all 0.7s ease-in-out;
}
</style>
