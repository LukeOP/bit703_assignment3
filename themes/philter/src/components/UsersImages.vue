<template>
  <div class="row" v-if="usersImages">
      <div class="col" v-if="errors">
        <div class="alert alert-danger">{{ errors }}</div>
      </div>
            <div class="row">
              <h2>Your Images {{ user.name }}</h2>
                <p>
                  <a class="btn btn-primary text-center float-right" href="#/image/add"
                    >Upload an Image Now</a
                  >
                </p>
            </div>
            <div id="users-images" class="card-grid">
                <div class="card card-image" v-bind:key="image.id" v-for="image in usersImages">
                  <picture v-bind:id="'image' + image.id">
                    <img v-bind:src="image.image.path"  v-bind:alt="image.description" />
                  </picture>
              <div class="card__content">
                <h5 class="card__header">{{ image.name }}</h5>
                <p class="card-description" >{{ image.description }}</p>

                  <a class="btn btn-primary" @click="updateImageLink(image.id)">Edit</a>
              </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
</template>

<script>
import Axios from 'axios'
Axios.defaults.withCredentials = true
export default {
  name: 'usersImages',
  data () {
    return {
      usersImages: [],
      user: [],
      imageID: '',
      errors: ''
    }
  },
  methods: {
    updateImageLink (imageID) {
      this.$store.commit('setCurrentImageID', imageID)
      console.log(this.$store.getters.getCurrentImageID)
      this.$router.push('/image/update')
    }

  },
  mounted () {
    if (this.$store.getters.getToken) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }
      Axios.get('http://localhost/bit703/module6/api/v1/img/user', config)
        .then((response) => {
          this.usersImages = response.data
          // console.log(this.usersImages)
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
      Axios.get('http://localhost/bit703/module6/api/v1/user', config)
        .then((response) => {
          this.user = response.data
          // console.log(this.usersImages)
          this.errors = ''
          this.$store.commit('setUserName', this.user.name)
          this.$store.commit('setUserID', this.user.id)
          // console.log(this.user)
          console.log(this.$store.getters.getUserID)
        })
        .catch((errors) => {
          this.errors = errors
        })
    } else {
      this.$router.push('/account')
    }
  }
}
</script>
