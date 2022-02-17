<template>
    <div>
        <div class="container-fliud">
            <nav id="menu" class="navbar navbar-expand-md navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navbar">
                    <ul class="navbar-nav ml-md-auto">

                        <router-link tag="li" to="/">
                            <a>Home</a>
                        </router-link>

                        <router-link tag="li" to="/image">
                            <a>Images</a>
                        </router-link>

                        <router-link v-show="user" tag="li" to="/account">
                            <a>Welcome</a>
                        </router-link>

                        <router-link tag="li" to="/account">
                            <a>Login</a>
                        </router-link>

                        <router-link tag="li" to="/account">
                            <a>Register</a>
                        </router-link>
                        <li><a v-show="user">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {
  name: 'logout',
  computed: {
    user () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
