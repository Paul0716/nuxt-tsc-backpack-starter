<template>
  <!-- Banner -->
  <div class="row">
    <canvas id="cover-banner" class="banner" ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import { MousePos } from '../interfaces/MousePos'
  import { Circle } from '../classes/Circle'
  import { colorArray } from '../const/bannerConfig'
  @Component
  export default class banner extends Vue {    
    circleArray: Circle[] = []
    canvas: HTMLCanvasElement | null = null;
    mouse: MousePos = {};
    
    init (canvas: HTMLCanvasElement) {
      this.circleArray = []
      for (var i = 0; i < 900; i++) {
          var radius = (Math.random() * 3 + 1);
          var x = Math.random() * (window.innerWidth - radius * 2) + radius;
          var y = Math.random() * (window.innerHeight -radius * 2) + radius;
          var dx = (Math.random() * -0.5)*3;
          var dy = (Math.random() * -0.5)*3;
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);

          this.circleArray.push(
            new Circle(x, y, dx, dy, radius, r, g, b, canvas.getContext('2d'))
          );
      }
    }

    animate() {
      requestAnimationFrame(this.animate);
      if (this.canvas) {
        const c2d = this.canvas.getContext('2d')
        if(c2d) {
          c2d.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
        for (var i = 0; i < this.circleArray.length; i++) {
          this.circleArray[i].update(this.mouse);
        }
      } else 
        throw Error('Canvas is undefined.')
      
      
    }

    mounted () {
      const canvas = (this.$refs.canvas as HTMLCanvasElement)
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      window.addEventListener('mousemove', ((event: MouseEvent) => {
        this.mouse.x = event.x
        this.mouse.y = event.y
      }).bind(this))

      window.addEventListener('resize', (() => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          this.init(canvas)
      }).bind(this))

      this.init(canvas);
      this.canvas = canvas;
      this.animate();
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    width: 100vw;
    background-color: #E9EBF0;
  }
</style>
