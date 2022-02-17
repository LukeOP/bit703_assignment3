<template>
  <div id="main">
    <div class="container">
      <div class="row">
          <h2>Add An Image</h2>
      </div>
    </div>
    <!-- Our AddImage component will go here -->
    <AddImage />
  </div>
</template>

<script>
import AddImage from '@/components/AddImage.vue'
export default {
  name: 'addImage',
  components: {
    AddImage
  }
}
</script>
