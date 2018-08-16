<template>
  <section class="container">
    <div class="box">
      <span class="title">404</span>
      <img class="error-img" src="../assets/img/svg/404.svg" alt="Nuxt.js Logo" />
    </div>
    <div class="error-message">OPPS! PAGE NOT FOUND</div>
    <div class="error-details">The link might be corrupted or the page might be removed.</div>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404" tag="button">
      <span class="button-text">Go Back Home</span>
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.title {
  font-family: OpenSans;
  font-size: 160px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #424242;
}

.error-img {
  height: 115px;
}

.box {
   display: flex;
   align-items:center;
   justify-content: center;
}

.error-message {
  font-family: OpenSans;
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #424242;
}

.error-details {
  margin-top: 8px;
  font-family: OpenSans;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #424242;
}

.button {
  margin: 43px auto;
  width: 180px;
  height: 44px;
  border-radius: 35px;
  box-shadow: 0 2px 4px 0 rgba(189, 189, 189, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), linear-gradient(to right, #49e2b8, #5979e6 35%, #e9527f 69%, #e4b444);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.button  .button-text {
  width: 176px;
  height: 40px;
  margin-top: -1px;
  margin-left: -6px;
  font-family: OpenSans;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #424242;
  display: inline-block;
  background: white;
  border-radius: 35px;
}

.button:hover {
  background-clip: content-box;
  box-shadow: none;
}
.button:hover  .button-text {
  background: transparent;
  color:white;
}


@media screen and (max-width: 768px) {
    .title {
        font-size: 72px;
    }
    .error-message {
        font-size: 20px;
    }
    .error-details {
        font-size: 12px;
    }
    .error-img {
      height: 52px;
    }
}

</style>
