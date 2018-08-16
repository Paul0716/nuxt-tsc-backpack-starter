<template>
  <div class="container-fluid">

    <banner />

    <!-- Ideas -->
    <div class="about-us row">
      
      <!-- hexgen -->
      <div class="hexagon">
        <span></span>
        <div>
          <!-- features -->
          <div class="features"></div>
          <div class="features"></div>
          <div class="features"></div>
          <div class="features"></div>
          <div class="features"></div>
          <div class="features"></div>
        </div>
      </div>     
      
    </div>

    <!-- Products List -->
    <products />

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

    <!-- Contact From -->
    <contact />
  </div>

</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import services from '../../helper/services'
  import products from '../components/Products.vue'
  import contact from '../components/Contact.vue'
  import banner from '../components/Banner.vue'
  export default {
    async asyncData ({ req }) {
      let advList = await services.local.getUserList()
      return {
        name: req ? 'server' : 'client',
        advList: advList
      }
    },
    head () {
      return {
        title: `Home Page (${this.name}-side)`
      }
    },
    data () {
      return {
        interval: 5000,
        indicators: true,
        controls: false,
        slides: [
          {title: 'Slide 1'},
          {title: 'Slide 2'},
          {title: 'Slide 3'},
          {title: 'Slide 4'}
        ]
      }
    },
    methods: {
      showCollapse: function () {
        this.collapse = !this.collapse
      },
      ...mapMutations(['increment', 'reduction'])
    },
    computed: {
      ...mapGetters(['counter'])
    },
    components: {
      products,
      contact,
      banner
    }
  }
</script>

<style scoped lang="scss">

  .about-us {
    height: 100vh
  }

  @media only screen and (min-width: 768px) {
    .hexagon {
      position: relative;
      width: 300px; 
      height: 173.21px;
      background-color: transparent;
      margin: calc(30vh + 86.60px) auto;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
      }

      &:before {
        bottom: 100%;
        border-bottom: 86.60px solid transparent;
      }

      &:after {
        top: 100%;
        width: 0;
        border-top: 86.60px solid transparent;
      }
    }

    
    .features {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: black;
        position: absolute;
        z-index: 3;

        &:first-child {
          margin-left: 90px;
          margin-top: -206.6px;
        }

        &:nth-child(2) {
          margin-left: 300px;
          margin-top: -86.6px;
        }

        &:nth-child(3) {
          margin-left: 300px;
          margin-top: 123.21px;
        }

        &:nth-child(4) {
          margin-left: 90px;
          margin-top: 259.81px;
        }

        &:nth-child(5) {
          margin-left: -120px;
          margin-top: -86.6px;
        }

        &:nth-child(6) {
          margin-left: -120px;
          margin-top: 123.21px;
        }
        
      }
  }
  @media only screen and (min-width: 768px) {

  }

  

  

  

  

</style>
