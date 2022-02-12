import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import images from '../views/images.vue'
import Account from '../views/account.vue'
import AddImage from '../views/addimage.vue'
import UpdateImage from '../views/updateimage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/image',
    name: 'image',
    component: images
    // meta: { bodyClass: 'bg-light' }
  },
  {
    path: '/image/add',
    name: 'addImage',
    component: AddImage
  },

  {
    path: '/image/update',
    name: 'updateImage',
    component: UpdateImage
  },

  {
    path: '/account',
    name: 'account',
    component: Account
  }

]

const router = new VueRouter({
  routes
})

export default router
