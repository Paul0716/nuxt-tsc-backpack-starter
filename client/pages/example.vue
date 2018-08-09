<template>

    <div>
        <uiv-tabs>
            <uiv-tab title="Home">
                <p>Home tab.</p>
            </uiv-tab>
            <uiv-tab title="Profile" disabled>
                <p>Profile tab.</p>
            </uiv-tab>
            <uiv-tab title="@vue" group="Dropdown">
                <p>@vue tab.</p>
            </uiv-tab>
            <uiv-tab title="@bootstrap" group="Dropdown" disabled>
                <p>@bootstrap tab.</p>
            </uiv-tab>
        </uiv-tabs>

        <!-- pagination -->
        <uiv-pagination v-model="currentPage" :total-page="totalPage"/>

        <!-- time selected tool -->
        <uiv-date-picker v-model="empDate"/>

        <!--- breadvreabs  -->
        <uiv-breadcrumbs>
          <uiv-breadcrumb-item href="#"><b>Home</b></uiv-breadcrumb-item>
          <uiv-breadcrumb-item href="#">Library</uiv-breadcrumb-item>
          <uiv-breadcrumb-item active>Data</uiv-breadcrumb-item>
        </uiv-breadcrumbs>

        <uiv-multi-select
          v-model="selected"
          :options="options"
        ></uiv-multi-select>

        <!-- modal -->
        <uiv-modal v-model="open" title="Modal 1" @hide="callback" ref="modal" id="modal-demo">
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <h4>Popover in a modal</h4>
          <p>
            This
            <uiv-btn v-popover:modal-demo="{title:'Title',content:'Some popover content...'}">button</uiv-btn>
            should trigger a popover on click.
          </p>
          <h4>Tooltips in a modal</h4>
          <p>
            <a role="button" v-tooltip:modal-demo="'Tooltip'">This link</a>
            <span>and</span>
            <a role="button" v-tooltip:modal-demo="'Tooltip'">that link</a>
            <span>should have tooltips on hover.</span>
          </p>
          <hr>
          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </uiv-modal>

        <uiv-btn type="primary" @click="openModal">Open Modal</uiv-btn>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class List2 extends Vue {
    name = 'example'
    totalPage = 10
    open = false
    currentPage = 1
    empDate = null
    selected = []
    options = [
      {
        value: 1,
        label: 'Option1'
      },
      {
        value: 2,
        label: 'Option2'
      },
      {
        value: 3,
        label: 'Option3'
      },
      {
        value: 4,
        label: 'Option4'
      },
      {
        value: 5,
        label: 'Option5'
      }
    ]

    openModal () {
      this.open = !this.open
    }
  }
</script>


<style scoped>

</style>
