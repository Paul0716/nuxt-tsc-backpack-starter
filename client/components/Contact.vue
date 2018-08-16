<template>
  <div class="row contact-section">
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
      <!-- contact form -->
      <h3 class="text-center">How could I help you ?</h3>
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <!-- name -->
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" placeholder="Name">
            </div>

            <!-- email -->
            <div class="form-group">
              <label>Email</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

          </div>
        </div>
        
        
        <button id="submit-contact-form" type="submit" class="btn btn-default">Submit</button>
      </form>      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact-section {
    & > div {
      min-height: 320px;
    }
  }
</style>
