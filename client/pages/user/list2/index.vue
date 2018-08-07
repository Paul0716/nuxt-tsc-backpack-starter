<template>
    <h1>Hello</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import a from '../../../test'
import { Component } from 'nuxt-property-decorator'
@Component
export default class List2 extends Vue {
  name= '123'

  created () {
    console.log(a)
  }
}
</script>
