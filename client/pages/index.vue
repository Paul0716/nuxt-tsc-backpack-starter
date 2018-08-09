<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <h2>
      <button @click="reduction">-</button>
      {{counter}}
      <button @click="increment">+</button>
    </h2>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>



    <!-- uiv btn -->
    <uiv-btn type="primary" @click="showCollapse">Primary</uiv-btn>

    <!-- uiv-btn-group -->
    <uiv-btn-group>
      <uiv-btn>Left</uiv-btn>
      <uiv-btn>Middle</uiv-btn>
      <uiv-btn>Right</uiv-btn>
    </uiv-btn-group>

    <!-- uiv-collapse -->
    <uiv-collapse v-model="collapse">
      <div class="well">Hi there.</div>
    </uiv-collapse>

  </section>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import services from '../../helper/services'

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
        collapse: false
      }
    },
    methods: {
      showCollapse: function () {
        this.collapse = !this.collapse
        console.log(this.collapse)
      },
      ...mapMutations(['increment', 'reduction'])
    },
    computed: {
      ...mapGetters(['counter'])
    }
  }
</script>
<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
