<template>
<div class="container">

      <div class="row" v-if="errorMessage">
          <div class="alert alert-danger">{{ errorMessage }}</div>
      </div>
      <div class="row" v-if="successMessage">
          <div class="alert alert-success">{{ successMessage.data }}</div>
      </div>
 <form @submit.prevent="addImage">

            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control" v-model="name" />
            </div>

            <div class="form-group">
                <label>Description</label>
                <input type="text" name="description" class="form-control" v-model="description" />
            </div>

            <div class="form-group">
                <label>Tags - add a comma after each tag.</label>
                <input type="text" name="tag" class="form-control" v-model="tag" />
            </div>

            <div class="form-group">
                <label>Filter</label>
                <select name="filter" class="form-select" v-model="filter">
                    <option value="_1977">1977</option>
                    <option value="aden">Aden</option>
                    <option value="brannan">Brannan</option>
                    <option value="brooklyn">Brooklyn</option>
                    <option value="clarendon">Clarendon</option>
                    <option value="earlybird">Earlybird</option>
                    <option value="gingham">Gingham</option>
                    <option value="hudson">Hudson</option>
                    <option value="inkwell">Inkwell</option>
                    <option value="kelvin">Kelvin</option>
                    <option value="lark">Lark</option>
                    <option value="lofi">Lo-Fi</option>
                    <option value="maven">Maven</option>
                    <option value="mayfair">Mayfair</option>
                    <option value="moon">Moon</option>
                    <option value="nashville">Nashville</option>
                    <option value="perpetua">Perpetua</option>
                    <option value="reyes">Reyes</option>
                    <option value="rise">Rise</option>
                    <option value="slumber">Slumber</option>
                    <option value="stinson">Stinson</option>
                    <option value="toaster">Toaster</option>
                    <option value="valencia">Valencia</option>
                    <option value="walden">Walden</option>
                    <option value="willow">Willow</option>
                    <option value="xpro2">X-pro II</option>
                </select>
            </div>

            <div id="image-upload" class="form-group">
                <input type="file" class="btn-form" name="file" @change="handleFileUpload( $event )" />
            </div>

            <input class="btn btn-primary btn-form" name="submit" type="submit" value="Submit" />

            <input type="hidden" name="_handler" value="addImage">

        </form>
    </div>
</template>

<script>
import Axios from 'axios'
Axios.defaults.withCredentials = true
export default {
  name: 'AddImage',
  data () {
    return {
      name: '',
      description: '',
      tag: '',
      filter: '',
      file: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    handleFileUpload (event) {
      this.file = event.target.files[0]
    },
    addImage () {
      const config = {
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('userID', this.$store.getters.getUserID)
      formData.append('description', this.description)
      formData.append('filter', this.filter)
      formData.append('tag', this.tag)
      formData.append('file', this.file)

      Axios.post('http://localhost/bit703/module6/api/v1/img/add', formData, config)
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
    // this.someData = this.$refs.id.value
    console.log(this.$store.getters.getUserID)
  }

}
</script>
