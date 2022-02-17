<template>
    <div>
      <section id="layout-content">
          <div id="hero_wrapper">
              <div id="hero">
                  <div class="container-fluid">
                      <div class="row">
                        <h1>Welcome to Philter</h1>
                        <p>Find something cool? Share it with our community.<br/> Look at other images as well</p>
                        <router-link tag="p" to="/account">
                          <a class="btn btn-primary text-center">Login Now</a>
                        </router-link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <div id="others-images-home" class="container-fluid">
        <div class="row">
            <h2>Latest Images</h2>
        </div>
        <OthersImages />
      </div>
    </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue'
export default {
  name: 'Home',
  components: {
    OthersImages
  }
}
</script>
