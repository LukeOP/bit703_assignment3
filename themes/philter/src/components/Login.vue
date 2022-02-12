<template>
  <div>
    <form>
        <div class="form-group">
            <label for="userSigninLogin">Email</label>
            <input name="login" type="text" class="form-control" id="userSigninLogin"
            placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="userSigninPassword">Password</label>
            <input name="password" type="password" class="form-control" id="userSigninPassword"
            placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-primary btn-form">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
