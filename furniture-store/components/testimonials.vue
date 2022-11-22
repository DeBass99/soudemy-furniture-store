<template>
  <div>
    <carousel
      :scrollPerPage="true"
      :autoplay="true"
      :autoplayTimeout="5000"
      :autoplayHoverPause="true"
      :mouse-drag="true"
      :perPageCustom="[
        [200, 1],
        [768, 1],
      ]"
      :navigationEnabled="false"
      :navigationClickTargetSize="15"
      paginationColor="#b8b8b8"
    >
      <slide>
        <div class="comment">
          <p class="quote">"</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue
            id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus
            luctus amet. Aliquam
          </p>
          <h4>Soroush norozy</h4>
          <p class="post">Designer</p>
        </div>
      </slide>
      <slide>
        <div class="comment">
          <p class="quote">"</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue
            id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus
            luctus amet. Aliquam
          </p>
          <h4>Soroush norozy</h4>
          <p class="post">Designer</p>
        </div>
      </slide>

      <slide>
        <div class="comment">
          <p class="quote">"</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue
            id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus
            luctus amet. Aliquam
          </p>
          <h4>Soroush norozy</h4>
          <p class="post">Designer</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
};
</script>

<style scoped>
.comment {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

p.quote {
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  color: #2e2e2e;
  margin-bottom: -150px;
}

p.post {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #2e2e2e;
}

.text {
  width: 434px;
}

@media only screen and (max-width: 600px) {
  .text {
    width: 100%;
  }
}
</style>
