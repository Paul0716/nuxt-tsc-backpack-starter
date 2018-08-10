<template>
  <div class="container-fluid">

    <!-- Banner -->
    <div class="row banner"></div>

    <!-- Ideas -->
    <div class="row">
      <div class="col-xs-6">
        <!-- hexgen -->
        <div class="hexgen">
          <ol class="even">
            <li class='hex'></li>
            <li class='hex'></li>
          </ol>  
          <ol class="odd">
            <li class='hex'></li>
            <li class='hex invisible'></li>
            <li class='hex'></li>
          </ol>
          <ol class="even">
            <li class='hex'></li>
            <li class='hex'></li>
          </ol>
        </div>  
        
        <!-- decorate curve line -->
        <div class="curve">
          <svg width="360" height="720" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q400 360,0 720" stroke="#8c8c8c" stroke-width="2" fill="transparent"/>
          </svg>
        </div>
        
      </div>

      

      <!-- idea content -->
      <div class="col-xs-6 benefits">
        <h3>Highlight key benefits of MG Plus for our customers</h3>
      </div>
      

      
    </div>

    <!-- Products List -->
    <mg-plus-products />

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
    <mg-plus-contact />
  </div>

</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import services from '../../helper/services'
  import mgPlusProducts from '../components/Products.vue'
  import mgPlusContact from '../components/Contact.vue'
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
        collapse: false,
        interval: 5000,
        indicators: true,
        controls: true,
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
      mgPlusProducts,
      mgPlusContact
    }
  }
</script>

<style scoped lang="scss">
  .banner {
    min-height: 480px;
    background-image: url(../assets/img/demo.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  /* hexgen css block */
  $hex-size: 6em; 
  .hexgen {
    margin-top: 120px;
    margin-bottom: 100px;
    margin-left: 60px;
    line-height: 1.3;
  }
  ol.even {
    position: relative;
    left: ($hex-size / 1.1);
  }
  ol.odd {
    position: relative;
    margin-top: -3.5%;
    margin-bottom: -3.5%;
  }
  .hex {
    z-index: 100;
    position: relative;
    margin: 1em auto;
    width: $hex-size; height: ($hex-size * 1.7);
    background: #ccc;
    transform: rotate(-90deg);
    display: inline-block;
    margin-right: ($hex-size / 1.30);
    transition: all 150ms ease-in-out;

    /* to  */
    &.invisible {
      opacity: 0;
      cursor: initial;
    }

    &:before, &:after {
      position: absolute;
      width: inherit; height: inherit;
      border-radius: inherit;
      background: inherit;
      content: '';
    }

    &:before {
      transform: rotate(60deg);
    }
    &:after {
      transform: rotate(-60deg);
    }

    &:hover {
      transform: scale(1.5) rotate(-90deg);
    }
  }
  .curve {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 400px;
  }  
  .benefits {
    margin-top: 320px;
  } 
  /* hexgen css block */
  
</style>
