<template>
  <div id="main">
    <div class="container">
      <div class="row">
          <h2>Update This Image</h2>
      </div>
    </div>
    <!-- Our AddImage component will go here -->
    <UpdateImage />
  </div>
</template>

<script>
import UpdateImage from '@/components/UpdateImage.vue'

export default {
  name: 'updateImage',
  components: {
    UpdateImage
  }
}
</script>
