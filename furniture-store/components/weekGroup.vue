<template>
  <div>
    <b-card-group deck>
      <WeekCard
        class="card"
        v-for="(product, i) in products"
        :key="i"
        :name="product.name"
        :status="product.status"
        :image="`${product.image}`"
      />
    </b-card-group>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import json from "~/data/weekly.json";
export default {
  data() {
    return {
      products: json,
    };
  },
  mounted() {
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".card",
        start: "top center",
        end: "+100px",
        toggleActions: "play none none reverse",
      },
      duration: 0.4,
      stagger: 0.2,
      y: "-50px",
      opacity: 0,
      ease: "power.inOut",
    });
  },
};
</script>

<style scoped></style>
