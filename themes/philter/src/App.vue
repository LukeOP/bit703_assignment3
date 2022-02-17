<template>
  <div>

    <!-- Header -->
    <header id="header">
      <app-header></app-header>
    </header>

    <!-- Content -->
    <section id="layout-content">
      <router-view/>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>

// import your components here
import Header from './partials/header.vue'
import Footer from './partials/footer.vue'

export default {

  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}

</script>
