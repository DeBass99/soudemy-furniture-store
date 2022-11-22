<template>
  <div class="footer">
    <b-container>
      <nuxt-link to="/" class="logo"> soudemy</nuxt-link>

      <div class="main">
        <div class="item">
          <div class="top">About us</div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue
              id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus
              luctus amet. Aliquam
            </li>
          </ul>
        </div>

        <div class="item">
          <div class="top">Useful</div>
          <ul>
            <li>Download product</li>
            <li>Download product</li>
            <li>Download product</li>
            <li>Download product</li>
            <li>Download product</li>
          </ul>
        </div>

        <div class="item">
          <div class="top">Download</div>
          <ul>
            <li>instgram</li>
            <li>facebook</li>
            <li>Twitter</li>
            <li>printeress</li>
            <li>youtube</li>
          </ul>
        </div>

        <div class="item">
          <div class="top">Call center</div>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae</li>
            <li>soroushnorozyui@gmail.com</li>
            <li>+1 333 555</li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 36px 0px;
  background: #2b2b2b;
}

a.logo {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  border: none;
  color: #fff;
}

.main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.top {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #fff;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

li {
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #ababab;
  width: 214px;
  margin: 10px 0px;
}

@media only screen and (max-width: 600px) {
  .main {
    flex-direction: column;
  }

  .item {
    margin: 20px 0px;
  }

  li {
    width: 100%;
  }
}
</style>
