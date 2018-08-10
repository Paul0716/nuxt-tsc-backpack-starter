<template>
  <section class="row product-section">

    <!-- Mg Plus Fun -->
    <div class="col-xs-4">
      Mg Plus Fun
    </div>

    <!-- Mg Plus Live -->
    <div class="col-xs-4">
      Mg Plus Live
    </div>

    <!-- Mg Plus Slot -->
    <div class="col-xs-4">
      Mg Plus Slot
    </div>
  </section>
</template>

<style scoped lang="scss">
  .product-section{
    & > div {
      min-height: 320px;
    }

    & > div:first-child {
      background-color: #c02c38;
    }
    & > div:nth-child(2) {
      background-color: #7a7374;
    } 
    & > div:nth-child(3) {
      background-color: #f0c9cf;
    }
  }
</style>
