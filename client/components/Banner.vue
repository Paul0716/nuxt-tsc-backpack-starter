<template>
  <!-- Banner -->
  <div class="row">
    <canvas id="cover-banner" class="banner" ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  @Component
  export default class banner extends Vue {

    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    width: 100%;
    background-color: #E9EBF0;
  }
</style>
