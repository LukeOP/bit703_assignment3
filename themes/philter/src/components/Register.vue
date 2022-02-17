<template>
  <div class="container">
    <!-- Success or failure message -->
    <div class="row">
      <form @submit.prevent="RegisterUser">
        <!-- Form fields -->
        <div class="form-group">
          <label for="userName">Name</label>
          <input type="text" id="userName" name="name" class="form-control"   />
        </div>
        <div class="form-group">
          <label for="userEmail" >Email</label>
          <input type="email" id="userEmail" name="email" class="form-control"  />
        </div>
        <div class="form-group">
          <label for="userPassword" >Password</label>
          <input type="password" id="userPassword" name="password" class="form-control"  />
        </div>
        <div class="form-group">
          <label for="userPassword_confirmation" >Password confirmation</label>
          <input type="password" id="userPassword_confirmation" name="password_confirmation" class="form-control" />
        </div>
        <input
          type="submit"
          class="btn btn-primary btn-form"
          name="submit"
          value="Register"
        />
        <input type="hidden" name="_handler" value="register" />
      </form>
    </div>
    <div class="row">
      <p> </p>
      <p> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      apiRequest: new this.$request({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    RegisterUser () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.addAuth()
      this.apiRequest.post('users/add')
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
