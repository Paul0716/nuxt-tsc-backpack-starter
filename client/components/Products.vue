<template>
  <section class="row product-section">

    <!-- Mg Plus Fun -->
    <div class="col-xs-4 product-intro">
      <h3 class="text-center">Mg Plus Fun</h3>
    </div>

    <!-- Mg Plus Live -->
    <div class="col-xs-4 product-intro">
      <h3 class="text-center">Mg Plus Live</h3>
    </div>

    <!-- Mg Plus Slot -->
    <div class="col-xs-4 product-intro">
      <h3 class="text-center">Mg Plus Slot</h3>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  @Component
  export default class product extends Vue {

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .product-section{
    & > .product-intro {
      padding-top: 150px;
      padding-bottom: 150px;
      min-height: 320px;
      
    }

    & > .product-intro:first-child {
      background-image: linear-gradient(to top, #e5a150, #fc5168);
    }
    & > .product-intro:nth-child(2) {
      background-image: linear-gradient(to top, #44d1b9, #2d82e1);
    } 
    & > .product-intro:nth-child(3) {
      background-image: linear-gradient(to top, #49e2b8, #8ce954);
    }
  }
</style>
