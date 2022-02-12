<template>
  <div>
    <section id="layout-content" style="margin-top:7rem">
      <div id="hero_wrapper">
        <div id="hero" class="main-hero">
          <div class="container-fluid">
            <div class="row">
              <h1>Welcome To Philter</h1>
              <p>Find something cool? Share it with our community.<br> Look at other images as well</p>
              <router-link tag="p" to="/account">
                <a class="btn btn-primary text-center">Login Now</a>
              </router-link>
            </div>
          </div>
        </div>
      </div> <!-- / .container -->
    </section>
    <div id="others-images-home" class="container-fluid">
      <!-- Out OtherImages component will go here -->
    </div>
    <div id="image-modal" class="modal" tabindex="-1" role="dialog">
      <div class="codal-dialog" role="document">
        <div class="modal-body">
        </div>
      </div>
    </div>
  </div>
</template>
