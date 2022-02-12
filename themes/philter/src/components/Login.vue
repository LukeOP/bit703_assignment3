<template>
    <div>
        <div class="" v-if="this.$store.getters.isLoggedIn">
            <h3 class="">Welcome</h3>
        </div>
        <div class="" v-else>
            <h3 class="">You are not logged in</h3>
        </div>
        <h3>Sign in</h3>
        <div class="row" v-if="errorMessage">
            <div class="alert alert-danger">{{ errorMessage }}</div>
        </div>
        <div class="row" v-if="successMessage">
            <div class="alert alert-success">{{ successMessage }}</div>
        </div>
        <form @submit.prevent="OnLogin">
            <div class="form-group">
                <label for="userSigninLogin">Email</label>
                <input name="login" type="text" class="form-control" id="userSigninLogin"
                placeholder="Enter your email" v-model="apiRequest.login">
            </div>
            <div class="form-group">
                <label for="userSigninPassword">Password</label>
                <input name="password" type="password" class="form-control" id="userSigninPassword"
                placeholder="Enter your password" v-model="apiRequest.password">
            </div>
            <button type="submit" class="btn btn-primary btn-form">Sign in</button>
        </form>
    </div>
</template>

<script>
// import Axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      apiRequest: new this.$request({
        login: '',
        password: ''
      }),
      usersImages: [],
      errors: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    OnLogin () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.addAuth()
      this.apiRequest.post('login')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
        })
        .catch((errors) => {
          this.errorMessage = errors
          this.successMessage = ''
        })
    }
  },
  mounted () {
    // console.log('test')
    // console.log(this.$store.getters.isLoggedIn)
  }
}
</script>
