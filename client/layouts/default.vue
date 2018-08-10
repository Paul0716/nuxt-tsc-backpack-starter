<template>
  <main>
    <!-- navbar -->
    <mg-plug-navbar />
    <nuxt/>
    <!-- footer -->
    <mg-plug-footer />
  </main>
</template>

<script>
import mgPlugNavbar from '../components/Navbar.vue'
import mgPlugFooter from '../components/Footer.vue'

export default {
  components: {
    mgPlugNavbar,
    mgPlugFooter
  }
}
</script>
<style scoped>
</style>
