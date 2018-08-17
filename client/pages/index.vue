<template>
  <div class="container-fluid intro-section">

    <banner />

    <!-- Ideas -->
    <div class="about-us">
      
      <!-- hexgen -->
      <div class="hexagon">
        <span></span>
        <div>
          <!-- features -->
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
          <div class="features">
            <p class="title">Hello world!</p>
          </div>
        </div>
      </div>

      <!-- plus-four-image -->
      <img class="plus-four" src="~/assets/img/home/plus-4-icon.svg" />

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
  import products from '../components/Products.vue'
  import contact from '../components/Contact.vue'
  import banner from '../components/Banner.vue'
  export default {
    async asyncData ({ req }) {
      return {
        name: req ? 'server' : 'client',
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
  @import '~/assets/css/_theme.scss';

  .intro-section {
    background-color: rgba(151, 151, 151, .1);
    background-image: url('~/assets/img/home/plus-pattern.png');
  }

  .about-us {
    position: relative;
    height: 60vh;

    .plus-four {
      position: absolute;
      right: 0px;
      bottom: 0px;
      width: 253px;
      height: 253px;
    }
  }

  @media only screen and (min-width: 768px) {
    .hexagon {
      position: relative;
      width: 300px; 
      height: 173.21px;
      background-color: transparent;
      background-image: url('~/assets/img/logo.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
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
  @media only screen and (max-width: 768px) {
    .hexagon {
      position: relative;
      width: 180px; 
      height: 103.92px;
      margin: calc(30vh + 51.96px) auto;
      background-color: transparent;
      background-image: url('~/assets/img/logo.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 90px solid transparent;
        border-right: 90px solid transparent;
      }

      &:before {
        bottom: 100%;
        border-bottom: 51.96px solid transparent;
      }

      .hexagon:after {
        top: 100%;
        width: 0;
        border-top: 51.96px solid transparent;
      }
    }

    

    

    

    .features {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      position: absolute;
      z-index: 3;

      &:first-child {
        margin-left: 30px;
        margin-top: -172.6px;
      }

      &:nth-child(2) {
        margin-left: 180px;
        margin-top: -66.6px;
      }

      &:nth-child(3) {
        margin-left: 180px;
        margin-top: 63.21px;
      }

      &:nth-child(4) {
        margin-left: 30px;
        // margin-top: 259.81px;
        margin-top: 158.96px;
      }

      &:nth-child(5) {
        margin-left: -120px;
        margin-top: -66.6px;
      }

      &:nth-child(6) {
        margin-left: -120px;
        margin-top: 63.21px;
      }
      
    }

    
  }

  @mixin featureTitle($color, $alignLeft: false) {
    @media only screen and (min-width: 768px) {
      > .title {
        display: inline-block;
        color: $color;
        white-space:nowrap;
        line-height: 120px;
        font-size: 24px;
        letter-spacing: .3px;
        font-weight: 600;

        @if ($alignLeft) {
          margin-left: calc(-100% - 40px);
        }
        @else {
          margin-left: calc(100% + 20px);
        }
      }
    }
    @media only screen and (max-width: 768px) {
      > .title {
        display: none;
      }
    }
  }

  .features {

    &:first-child {
      background-image: url("~/assets/img/home/feature-6.svg");
      @include featureTitle($featureSixColor);
    }

    &:nth-child(2) {
      background-image: url("~/assets/img/home/feature-1.svg");
      @include featureTitle($featureOneColor);
    }

    &:nth-child(3) {
      background-image: url("~/assets/img/home/feature-2.svg");
      @include featureTitle($featureTwoColor);
    }

    &:nth-child(4) {
      background-image: url("~/assets/img/home/feature-3.svg");
      @include featureTitle($featureThreeColor);
    }

    &:nth-child(5) {
      background-image: url("~/assets/img/home/feature-5.svg");
      @include featureTitle($featureFiveColor, true);
    }

    &:nth-child(6) {
      background-image: url("~/assets/img/home/feature-4.svg");
      @include featureTitle($featureFourColor, true);
    }
    
  }

</style>
