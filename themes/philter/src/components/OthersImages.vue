<template>
  <div class="row" v-if="othersImages">
      <div id="others-images" class="card-columns">
          <div class="card other" v-bind:key="image.id" v-for="image in othersImages">
              <picture v-bind:id="image.id">
                  <img v-bind:src="'image' + image.image.path"  v-bind:alt="image.description"/>
              </picture>
              <h5>{{ image.name }}</h5>
              <p>{{ image.description }}</p>
          </div>
          <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'othersImages'
}
</script>
