<template>
  <div class="row contact-section">
    <!-- help section -->
    <div class="col-xs-6">
      How could I help you ?
    </div>

    <!-- contact form -->
    <div class="col-xs-6">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact-section {
    & > div {
      min-height: 320px;
    }
    
    & > div:first-child{
      background-color: #8c8c8c;
    }
  }
</style>
