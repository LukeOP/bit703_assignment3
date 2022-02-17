<template>
    <div>
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
                <input name="login" type="text" class="form-control" id="userSigninLogin" placeholder="Enter your email" v-model="apiRequest.login">
            </div>
            <div class="form-group">
                <label for="userSigninPassword">Password</label>
                <input name="password" type="password" class="form-control" id="userSigninPassword" placeholder="Enter your password" v-model="apiRequest.password">
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    </div>
</template>

<script>

export default {
  data () {
    return {
      apiRequest: new this.$request({
        login: '',
        password: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    OnLogin () {
      this.apiRequest.addStore(this.$store)
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
  }
}
</script>
