<template>

  <section class="container-fluid">
    <div class="row">
      <!-- carousel -->
      <uiv-carousel
        :indicators="indicators"
        :controls="controls"
        :interval="interval"
        ref="carousel">
        <uiv-slide v-for="(slide, index) in slides" :key="index">
          <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0? '#99a9bf' : '#d3dce6'}"></div>
          <div class="carousel-caption">
            <h3>This is {{ slide.title }}</h3>
          </div>
        </uiv-slide>
      </uiv-carousel>
    </div>
    
    <div class="row">
      <!-- filter area -->
      <div class="col-xs-12 col-sm-3 filter-area">
          <h3 class="title">FILTERING</h3>
          <hr>
          <div class="row">
            <div class="col-xs-12">
              <h3>PRODUCT</h3>
              <div class="filter live">
                MG LIVE
              </div>
              <div class="filter slots">
                MG Slots
              </div>
              <div class="filter fun">
                MG Fun
              </div>
              <div class="filter plus">
                MG Plus
              </div>
            </div>
            
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12">
              <h3>CATEGORY</h3>
              <div class="category">
                Games Update
              </div>
              <div class="category">
                Product Updates
              </div>
              <div class="category">
                Newsflash
              </div>
              <div class="category">
                Other
              </div>
            </div>
            
          </div>  
          
      </div>

      <!-- post lists -->
      <div class="col-xs-12 col-sm-9 post-area">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-4"
                v-for="n in 9">
            <div class="post-container">
              <!-- post image -->
              <img class="img-responsive" src="~/assets/img/demo.jpg" />

              <!-- post category -->
              <div class="filter live">
                MG LIVE
              </div>
              <div class="clearfix"></div>
              
              <!-- post content -->
              <div class="post-content">
                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
              </div>

              <!-- post date -->
              <div class="post-date">
                <i class="far fa-calendar"></i>
                <span>2018 Jun. 20</span>
              </div>
              
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import { Slide } from '../interfaces/Slide'
  import fontawesome from '@fortawesome/fontawesome'
  import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendar'
  fontawesome.library.add(faCalendar)
  @Component
  export default class posts extends Vue {
    slides: Slide[] = [
      {title: 'Slide 1'},
      {title: 'Slide 2'},
      {title: 'Slide 3'},
      {title: 'Slide 4'}
    ]
  }
</script>

<style scoped lang="scss">
</style>