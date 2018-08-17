<template>
  <div class="row">
    <section class="product-section">

      <div class="product-intro">
        <div class="product-brand">
          <img class="brand-img" src="~/assets/img/logo.png"/>
        </div>
        <p class="intro">Discover fun & interactive non-slot games thea will get platers hooked in no time!</p>
      </div>

      <div class="product-intro">
        <div class="product-brand">
          <img class="brand-img" src="~/assets/img/logo.png"/>
        </div>
        <p class="intro">A revolutionary live dealer product engineered for the best mobile experience. Success? It's already in your hands.</p>
      </div>

      <div class="product-intro">
        <div class="product-brand">
          <img class="brand-img" src="~/assets/img/logo.png"/>
        </div>
        <p class="intro">The largest and most diverse portfolio of gmes in the industry and the home of the biggest and best games in Asia. Step into our world now!</p>
      </div>
    </section>
  </div>
  
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import { TweenLite } from 'gsap'
  @Component
  export default class product extends Vue {

    mounted () {
      const intros = Array.from(document.querySelectorAll('.product-intro'));
      const introBaseWidth: number = window.innerWidth / intros.length;

      for (let intro of intros) {
        for (let intro of intros) {
          const introEl = intro as HTMLElement;
          if (window.innerWidth <= 768) { 
              introEl.style.width  = window.innerWidth + "px";
              introEl.style.height = window.innerHeight/2 + "px";
            
          } else {
            introEl.style.width  = introBaseWidth + "px";
            introEl.style.height = introBaseWidth + "px";
          }
        }
        // intro base width
        // (intro as HTMLElement).style.width  = introBaseWidth + "px";
        // (intro as HTMLElement).style.height = introBaseWidth + "px";

        // mouse event
        intro.addEventListener('mouseover', (ev) => {
          if (window.innerWidth > 768) {
            TweenLite.to(intro, 0.3, {css: {width: introBaseWidth + 250 + "px"}});
          }
          
        })
        intro.addEventListener('mouseout', (ev) => {
          if (window.innerWidth > 768) {
            TweenLite.to(intro, 0.3, {css: {width: introBaseWidth + "px"}});
          }
          
        })
      }

      // const section = document.querySelector('body') as HTMLElement;
      window.addEventListener('resize', function() {
          console.log('section resize.');
          // for (let intro of intros) {
          //   const introEl = intro as HTMLElement;
          //   if (window.innerWidth <= 768) { 
          //       introEl.style.width  = window.innerWidth + "px";
          //       introEl.style.height = window.innerHeight + "px";
              
          //   } else {
          //     introEl.style.width  = introBaseWidth + "px";
          //     introEl.style.height = introBaseWidth + "px";
          //   }
          // }
      })
    }

    
  }
</script>

<style scoped lang="scss">
  // screen width > 768px
  @media screen and (min-width: 768px) {
    .product-section{
      display: table;
      margin: 0;
      padding: 0;
      width: 100%;
      overflow: hidden;
      
      & > .product-intro {
        cursor: pointer;
        display: table-cell;
        padding: 0;
        height: 100%;
        text-align: center;
        vertical-align: middle;

        .product-brand{
          width: 60%;
          margin: 0 auto;
          img {
            margin-bottom: 40px;
          }
        }
        .intro {
          color: white;
          width: 60%;
          margin: 0 auto;
        }
      }
    }  
  }
  // screen width < 768px
  @media screen and (max-width: 767px) {
    .product-section{
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      overflow: hidden;
      
      & > .product-intro {
        cursor: pointer;
        display: block;
        padding: 0;
        height: 100%;
        text-align: center;
        vertical-align: middle;

        .product-brand{
          padding-top: 60px;
          width: 60%;
          margin: 0 auto;
          img {
            margin-bottom: 40px;
          }
        }
        .intro {
          color: white;
          width: 60%;
          margin: 0 auto;
        }
      }
    }
  }
  
  .product-section {
    & > .product-intro:first-child {
      background-image: linear-gradient(to top, #49e2b8, #8ce954);
      
    }
    & > .product-intro:nth-child(2) {
      background-image: linear-gradient(to top, #44d1b9, #2d82e1);
    } 
    & > .product-intro:nth-child(3) {
      background-image: linear-gradient(to top, #e5a150, #fc5168);
    }
  }
</style>
